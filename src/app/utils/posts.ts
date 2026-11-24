import {
  fetchAllPostsRaw,
  fetchExternalGraph,
  fetchPostMarkdown,
  type ExternalGraphData,
} from "./blogApi";

export interface PostMetadata {
  layout: string;
  title: string;
  date: string;
  tags: string[];
  comments: boolean;
  author: string;
  toc: boolean;
  draft?: boolean;
  related?: string[];
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  excerpt: string;
  content: string;
  readingTimeMin: number;
}

/** Estimate reading time in minutes (handles both CJK characters and Latin words). */
export function estimateReadingTime(markdown: string): number {
  const plain = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~\-|]/g, " ");

  const cjkChars = (plain.match(/[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g) || []).length;
  const latinWords = plain
    .replace(/[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = cjkChars / 320 + latinWords / 200;
  return Math.max(1, Math.round(minutes));
}

// 简单的 frontmatter 解析器（浏览器兼容）
function parseFrontmatter(content: string): { data: Record<string, unknown>; content: string } {
  const normalized = content.replace(/\r\n/g, "\n");
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = normalized.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: normalized };
  }

  const [, frontmatter, markdown] = match;
  const data: Record<string, unknown> = {};

  let lastKey: string | null = null;
  frontmatter.split("\n").forEach((line) => {
    if (/^\s+-\s/.test(line) && lastKey) {
      const item = line.trim().slice(2).trim().replace(/^["']|["']$/g, "");
      if (!Array.isArray(data[lastKey])) {
        data[lastKey] = [];
      }
      (data[lastKey] as string[]).push(item);
      return;
    }

    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) return;

    lastKey = line.slice(0, colonIndex).trim();
    const rawValue = line.slice(colonIndex + 1).trim();
    let value: unknown = rawValue;

    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      value = rawValue
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else if (rawValue === "true") {
      value = true;
    } else if (rawValue === "false") {
      value = false;
    } else {
      value = rawValue.replace(/^["']|["']$/g, "");
    }

    data[lastKey] = value;
  });

  return { data, content: markdown };
}

function parsePost(slug: string, raw: string): Post {
  const { data, content: markdownContent } = parseFrontmatter(raw);

  const parts = markdownContent.split("<!-- more -->");
  const excerpt = parts[0].trim();
  const fullContent = parts.length > 1 ? parts[1].trim() : markdownContent;

  const metadata: PostMetadata = {
    layout: String(data.layout || "post"),
    title: String(data.title || slug),
    date: String(data.date || ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    comments: Boolean(data.comments),
    author: String(data.author || ""),
    toc: data.toc !== false,
    draft: Boolean(data.draft),
    related: Array.isArray(data.related) ? data.related.map(String) : undefined,
  };

  return {
    slug,
    metadata,
    excerpt,
    content: fullContent,
    readingTimeMin: estimateReadingTime(fullContent || excerpt),
  };
}

// 鉴权用户拉取的文章在会话内缓存，避免重复请求 Worker。
const cache: Record<"zh" | "en", Post[] | null> = { zh: null, en: null };
let graphCache: ExternalGraphData | null | undefined = undefined;

export function clearPostsCache(): void {
  cache.zh = null;
  cache.en = null;
  graphCache = undefined;
}

export async function getExternalGraph(token: string): Promise<ExternalGraphData | null> {
  if (graphCache !== undefined) return graphCache;
  const data = await fetchExternalGraph(token);
  graphCache = data;
  return data;
}

export async function getAllPosts(lang: "zh" | "en", token: string): Promise<Post[]> {
  if (cache[lang]) return cache[lang]!;

  const rawPosts = await fetchAllPostsRaw(lang, token);
  const posts = rawPosts
    .map(({ slug, markdown }) => parsePost(slug, markdown))
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  cache[lang] = posts;
  return posts;
}

export async function getPostBySlug(
  slug: string,
  lang: "zh" | "en",
  token: string,
): Promise<Post | undefined> {
  const cached = cache[lang]?.find((p) => p.slug === slug);
  if (cached) return cached;

  const raw = await fetchPostMarkdown(slug, lang, token);
  if (!raw) return undefined;
  return parsePost(raw.slug, raw.markdown);
}

/**
 * Resolve the target post plus adjacent prev/next posts using a single cached
 * getAllPosts call (avoids firing two parallel Worker requests on direct links).
 */
export async function getPostAndAdjacent(
  slug: string,
  lang: "zh" | "en",
  token: string,
): Promise<{ post: Post | undefined; prev: Post | undefined; next: Post | undefined }> {
  const allPosts = await getAllPosts(lang, token);
  const published = allPosts.filter((p) => !p.metadata.draft);
  const found = allPosts.find((p) => p.slug === slug);

  if (!found) {
    const fallback = await getPostBySlug(slug, lang, token);
    return { post: fallback, prev: undefined, next: undefined };
  }

  const index = published.findIndex((p) => p.slug === slug);
  return {
    post: found,
    prev: index > 0 ? published[index - 1] : undefined,
    next: index !== -1 && index < published.length - 1 ? published[index + 1] : undefined,
  };
}

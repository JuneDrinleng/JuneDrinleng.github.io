import { fetchAllPostsRaw, fetchPostMarkdown } from "./blogApi";

export interface PostMetadata {
  layout: string;
  title: string;
  date: string;
  tags: string[];
  comments: boolean;
  author: string;
  toc: boolean;
  draft?: boolean;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  excerpt: string;
  content: string;
}

// 简单的 frontmatter 解析器（浏览器兼容）
function parseFrontmatter(content: string): { data: any; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content };
  }

  const [, frontmatter, markdown] = match;
  const data: any = {};

  // 解析 YAML frontmatter
  let lastKey: string | null = null;
  frontmatter.split('\n').forEach(line => {
    // 处理多行数组项（- value）
    if (/^\s+-\s/.test(line) && lastKey) {
      const item = line.trim().slice(2).trim().replace(/^["']|["']$/g, '');
      if (!Array.isArray(data[lastKey])) {
        data[lastKey] = [];
      }
      data[lastKey].push(item);
      return;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;

    lastKey = line.slice(0, colonIndex).trim();
    let value: any = line.slice(colonIndex + 1).trim();

    // 处理内联数组（如 tags: [tag1, tag2]）
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((v: string) => v.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    } else {
      value = value.replace(/^["']|["']$/g, '');
    }

    data[lastKey] = value;
  });

  return { data, content: markdown };
}

// 把一篇原始 markdown（slug + 内容）解析为 Post
function parsePost(slug: string, raw: string): Post {
  const { data, content: markdownContent } = parseFrontmatter(raw);

  // 提取摘要（<!-- more --> 之前的内容）
  const parts = markdownContent.split('<!-- more -->');
  const excerpt = parts[0].trim();
  const fullContent = parts.length > 1 ? parts[1].trim() : markdownContent;

  return {
    slug,
    metadata: data as PostMetadata,
    excerpt,
    content: fullContent,
  };
}

// 鉴权用户拉取的文章在会话内缓存，避免重复请求 Worker。
const cache: Record<'zh' | 'en', Post[] | null> = { zh: null, en: null };

// 退出登录时清空缓存
export function clearPostsCache(): void {
  cache.zh = null;
  cache.en = null;
}

export async function getAllPosts(lang: 'zh' | 'en', token: string): Promise<Post[]> {
  if (cache[lang]) return cache[lang]!;

  const rawPosts = await fetchAllPostsRaw(lang, token);
  const posts = rawPosts
    .map(({ slug, markdown }) => parsePost(slug, markdown))
    // 按日期排序（最新的在前）
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  cache[lang] = posts;
  return posts;
}

export async function getPostBySlug(
  slug: string,
  lang: 'zh' | 'en',
  token: string,
): Promise<Post | undefined> {
  // 列表已加载时直接命中缓存，省去一次请求
  const cached = cache[lang]?.find(p => p.slug === slug);
  if (cached) return cached;

  const raw = await fetchPostMarkdown(slug, lang, token);
  if (!raw) return undefined;
  return parsePost(raw.slug, raw.markdown);
}

export async function getAdjacentPosts(
  slug: string,
  lang: 'zh' | 'en',
  token: string,
): Promise<{ prev: Post | undefined; next: Post | undefined }> {
  const allPosts = (await getAllPosts(lang, token)).filter(p => !p.metadata.draft);
  const index = allPosts.findIndex(post => post.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? allPosts[index - 1] : undefined,
    next: index < allPosts.length - 1 ? allPosts[index + 1] : undefined,
  };
}

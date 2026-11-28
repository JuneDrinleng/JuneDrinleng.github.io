import { fetchAllWikiRaw, fetchWikiMarkdown } from "./blogApi";
import { estimateReadingTime, parseFrontmatter } from "./posts";

export type WikiCategory = "term" | "technique" | "solution";

export interface WikiEntry {
  slug: string;
  title: string;
  aliases: string[];
  category: WikiCategory;
  tags: string[];
  summary: string;
  relatedNotes: string[];
  relatedWiki: string[];
  sources: string[];
  updated: string;
  content: string;
  readingTimeMin: number;
}

const VALID_CATEGORIES = new Set<WikiCategory>(["term", "technique", "solution"]);

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((v) => String(v).trim()).filter(Boolean);
  }
  return [];
}

function stripMarkdownInline(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_~>]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractFallbackSummary(markdown: string): string {
  const blocks = markdown.replace(/\r\n/g, "\n").split(/\n\s*\n/);
  for (const rawBlock of blocks) {
    const block = rawBlock.trim();
    if (!block) continue;
    if (/^#{1,6}\s/.test(block)) continue;
    if (/^```/.test(block)) continue;
    const plain = stripMarkdownInline(block);
    if (!plain) continue;
    return plain.length > 160 ? `${plain.slice(0, 159)}…` : plain;
  }
  return "";
}

function parseWikiEntry(slug: string, raw: string): WikiEntry {
  const { data, content } = parseFrontmatter(raw);
  const rawCategory = String(data.category || "term").trim();
  const category: WikiCategory = VALID_CATEGORIES.has(rawCategory as WikiCategory)
    ? (rawCategory as WikiCategory)
    : "term";

  const title = data.title ? String(data.title).trim() : slug;
  const rawSummary = data.summary ? String(data.summary).trim() : "";
  const summary = rawSummary || extractFallbackSummary(content);

  return {
    slug,
    title: title || slug,
    aliases: toStringArray(data.aliases),
    category,
    tags: toStringArray(data.tags),
    summary,
    relatedNotes: toStringArray(data.related_notes),
    relatedWiki: toStringArray(data.related_wiki),
    sources: toStringArray(data.sources),
    updated: data.updated ? String(data.updated).trim() : "",
    content: content.trim(),
    readingTimeMin: estimateReadingTime(content),
  };
}

/**
 * Rewrite `[[slug]]` and `[[slug|label]]` wiki links into standard Markdown
 * links (`/wiki/slug`) while leaving fenced code blocks untouched.
 */
export function expandWikiLinks(markdown: string): string {
  const segments = markdown.split(/(```[\s\S]*?```)/g);
  return segments
    .map((segment, index) => {
      if (index % 2 === 1) return segment;
      return segment.replace(
        /\[\[([^\]|\n]+?)(?:\|([^\]\n]+?))?\]\]/g,
        (_match, rawSlug: string, rawLabel?: string) => {
          const targetSlug = rawSlug.trim();
          const label = (rawLabel ?? rawSlug).trim();
          return `[${label}](/wiki/${encodeURIComponent(targetSlug)})`;
        },
      );
    })
    .join("");
}

let wikiCache: WikiEntry[] | null = null;

export function clearWikiCache(): void {
  wikiCache = null;
}

export async function getAllWiki(token: string): Promise<WikiEntry[]> {
  if (wikiCache) return wikiCache;

  const rawEntries = await fetchAllWikiRaw(token);
  const entries = rawEntries
    .map(({ slug, markdown }) => parseWikiEntry(slug, markdown))
    .sort((a, b) => a.title.localeCompare(b.title, "zh"));

  wikiCache = entries;
  return entries;
}

export async function getWikiEntry(
  slug: string,
  token: string,
): Promise<WikiEntry | undefined> {
  const cached = wikiCache?.find((e) => e.slug === slug);
  if (cached) return cached;

  const raw = await fetchWikiMarkdown(slug, token);
  if (!raw) return undefined;
  return parseWikiEntry(raw.slug, raw.markdown);
}

/**
 * Return wiki entries that reference `slug` via `related_wiki`, `/wiki/:slug`,
 * or `[[slug]]` syntax.
 */
export function getBacklinks(all: WikiEntry[], slug: string): WikiEntry[] {
  return all.filter((entry) => {
    if (entry.slug === slug) return false;
    return (
      entry.relatedWiki.includes(slug) ||
      entry.content.includes(`/wiki/${slug}`) ||
      entry.content.includes(`[[${slug}`)
    );
  });
}

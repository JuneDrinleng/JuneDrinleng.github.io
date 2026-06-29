// Blog content is served by an authenticated Cloudflare Worker that reads the
// private posts repo. Nothing here is bundled at build time, so post content
// never ships in the public static assets.
const API_BASE =
  import.meta.env.VITE_BLOG_API || "https://junedrinlengblog.zhuzilan520.workers.dev";

/** Raw markdown for a single post, as returned by the Worker. */
export interface RawPost {
  slug: string;
  markdown: string;
}

/**
 * Fetch every post's raw markdown for a language in one request.
 * The viewer is already authenticated, so shipping bodies to their browser is
 * expected; the point is that bodies are never in the public bundle.
 */
export async function fetchAllPostsRaw(lang: "zh" | "en", token: string): Promise<RawPost[]> {
  const r = await fetch(`${API_BASE}/api/posts?lang=${lang}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (r.status === 401 || r.status === 403) throw new Error("unauthorized");
  if (!r.ok) throw new Error(`Blog API error: ${r.status}`);
  return r.json() as Promise<RawPost[]>;
}

/** Fetch one post's raw markdown. Returns null if the Worker reports 404. */
export async function fetchPostMarkdown(
  slug: string,
  lang: "zh" | "en",
  token: string,
): Promise<RawPost | null> {
  const r = await fetch(`${API_BASE}/api/posts/${encodeURIComponent(slug)}?lang=${lang}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (r.status === 404) return null;
  if (r.status === 401 || r.status === 403) throw new Error("unauthorized");
  if (!r.ok) throw new Error(`Blog API error: ${r.status}`);
  return r.json() as Promise<RawPost>;
}

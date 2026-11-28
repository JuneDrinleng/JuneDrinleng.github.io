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

/** Optional per-node overlay metadata from `notes/graph/graph.json`. */
export interface ExternalGraphNode {
  title?: string;
  date?: string;
  tags?: string[];
  extraTags?: string[];
  links?: string[];
  series?: string;
  seriesLabel?: string;
  order?: number;
}

/** Explicit note-to-note edge defined in `notes/graph/graph.json`. */
export interface ExternalGraphEdge {
  source: string;
  target: string;
  relation?: "series" | "prerequisite" | "concept" | "method" | "application" | string;
  label?: string;
  weight?: number;
}

/** External graph structure stored in `notes/graph/graph.json`. */
export interface ExternalGraphData {
  version?: number;
  generatedAt?: string;
  sourceDir?: string;
  nodes?: Record<string, ExternalGraphNode>;
  edges?: ExternalGraphEdge[];
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

/**
 * Fetch the optional external graph overlay from `notes/graph/graph.json`.
 * Never throws on 404 or network issues: returns `null` so the caller can
 * fall back cleanly to the foundational frontmatter `#Tag` graph.
 */
export async function fetchExternalGraph(token: string): Promise<ExternalGraphData | null> {
  try {
    const r = await fetch(`${API_BASE}/api/graph`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (r.ok) {
      return (await r.json()) as ExternalGraphData;
    }
  } catch {
    // Ignore and try dev fallback if in local dev mode
  }

  if (import.meta.env.DEV) {
    try {
      const devRes = await fetch("/__dev_notes_graph.json");
      if (devRes.ok) {
        return (await devRes.json()) as ExternalGraphData;
      }
    } catch {
      // Ignore
    }
  }

  return null;
}

/**
 * Fetch all wiki entries' raw markdown from the authenticated Worker.
 * In local dev, falls back to `/__dev_notes_wiki.json` if the Worker endpoint
 * is unavailable.
 */
export async function fetchAllWikiRaw(token: string): Promise<RawPost[]> {
  let lastError: unknown;
  try {
    const r = await fetch(`${API_BASE}/api/wiki`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (r.status === 401 || r.status === 403) throw new Error("unauthorized");
    if (r.ok) {
      return (await r.json()) as RawPost[];
    }
    lastError = new Error(`Wiki API error: ${r.status}`);
  } catch (err) {
    if (err instanceof Error && err.message === "unauthorized") throw err;
    lastError = err;
  }

  if (import.meta.env.DEV) {
    const devRes = await fetch("/__dev_notes_wiki.json");
    if (devRes.ok) {
      return (await devRes.json()) as RawPost[];
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Wiki API error");
}

/**
 * Fetch one wiki entry's raw markdown. Returns null when not found.
 * In local dev, falls back to `/__dev_notes_wiki.json` if the Worker endpoint
 * is unavailable.
 */
export async function fetchWikiMarkdown(
  slug: string,
  token: string,
): Promise<RawPost | null> {
  let lastError: unknown;
  let status404 = false;
  try {
    const r = await fetch(`${API_BASE}/api/wiki/${encodeURIComponent(slug)}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (r.status === 401 || r.status === 403) throw new Error("unauthorized");
    if (r.ok) {
      return (await r.json()) as RawPost;
    }
    if (r.status === 404) {
      status404 = true;
    } else {
      lastError = new Error(`Wiki API error: ${r.status}`);
    }
  } catch (err) {
    if (err instanceof Error && err.message === "unauthorized") throw err;
    lastError = err;
  }

  if (import.meta.env.DEV) {
    try {
      const devRes = await fetch("/__dev_notes_wiki.json");
      if (devRes.ok) {
        const list = (await devRes.json()) as RawPost[];
        return list.find((item) => item.slug === slug) ?? null;
      }
    } catch {
      // Ignore and fall through
    }
  }

  if (status404) return null;
  throw lastError instanceof Error ? lastError : new Error("Wiki API error");
}

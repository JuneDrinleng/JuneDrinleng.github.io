/**
 * Blog content API — gated proxy to a PRIVATE posts repo.
 *
 * This is a reference implementation of the `/api/posts` endpoints the public
 * site calls (see src/app/utils/blogApi.ts). Merge these routes into the
 * existing OAuth Worker deployed at junedrinlengblog.zhuzilan520.workers.dev,
 * or deploy standalone and point VITE_BLOG_API at it.
 *
 * Security model:
 *   - The caller sends `Authorization: Bearer <github-oauth-token>` (the same
 *     token the site obtains via the OAuth popup).
 *   - We verify that token against GitHub /user and require login === OWNER.
 *   - Only then do we read the PRIVATE repo using PRIVATE_REPO_TOKEN, a secret
 *     that NEVER leaves the Worker. The visitor's own token does not need
 *     access to the private repo.
 *
 * Subrequest budget:
 *   - The list endpoint uses ONE GitHub GraphQL call to pull every markdown
 *     file in a folder at once (name + text), so a full list is just
 *     2 subrequests total (verifyOwner + GraphQL) regardless of post count.
 *     This stays well under Cloudflare Workers' 50-subrequest free-plan cap.
 *     (A naive REST fan-out — one read per post — would exceed it once a
 *     folder has ~48+ posts.)
 *
 * Required secrets / vars (wrangler secret put / [vars]):
 *   PRIVATE_REPO_TOKEN  PAT that can READ the PRIVATE repo. A fine-grained PAT
 *                       with Contents:Read + Metadata:Read scoped to the repo,
 *                       or a classic PAT with full `repo` scope. `public_repo`
 *                       is NOT enough for a private repo.
 *   PRIVATE_REPO        e.g. "JuneDrinleng/notes"
 *   PRIVATE_REPO_BRANCH e.g. "main"  (optional, defaults to "main")
 *   ALLOWED_OWNER       e.g. "JuneDrinleng"  (exact canonical login casing)
 *   ALLOWED_ORIGINS     comma-separated, e.g.
 *                       "https://lune.ltd,http://localhost:5173"
 *
 * Repo layout expected in the private repo:
 *   posts/*.md       (zh)
 *   posts-en/*.md    (en)
 */

const GITHUB_API = "https://api.github.com";
const GITHUB_GRAPHQL = "https://api.github.com/graphql";

function dirForLang(lang) {
  return lang === "en" ? "posts-en" : "posts";
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const allow = allowed.includes(origin) ? origin : allowed[0] || "";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(body, status, request, env) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(request, env) },
  });
}

/** Verify the caller's OAuth token and that they are the allowed owner. */
async function verifyOwner(request, env) {
  const auth = request.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) return false;
  const r = await fetch(`${GITHUB_API}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "User-Agent": "lune-blog-worker",
      Accept: "application/vnd.github+json",
    },
  });
  if (!r.ok) return false;
  const user = await r.json();
  return user.login === env.ALLOWED_OWNER;
}

/** Build a Contents API URL with each path segment percent-encoded. */
function contentsUrl(env, dir, filename, branch) {
  const path = `${dir}/${filename}`.split("/").map(encodeURIComponent).join("/");
  return `${GITHUB_API}/repos/${env.PRIVATE_REPO}/contents/${path}?ref=${encodeURIComponent(branch)}`;
}

/** Fetch one file's raw markdown from the private repo (single subrequest). */
async function getMarkdown(env, dir, filename) {
  const branch = env.PRIVATE_REPO_BRANCH || "main";
  const r = await fetch(contentsUrl(env, dir, filename, branch), {
    headers: {
      Authorization: `Bearer ${env.PRIVATE_REPO_TOKEN}`,
      "User-Agent": "lune-blog-worker",
      Accept: "application/vnd.github.raw",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error(`get failed: ${r.status}`);
  return r.text();
}

/**
 * List every .md file in a folder with its content, using ONE GraphQL call.
 * Falls back to a per-file REST read only for blobs GraphQL truncates (rare;
 * keeps the subrequest count at ~2 for normal-sized posts).
 */
async function listAllPosts(env, dir) {
  const branch = env.PRIVATE_REPO_BRANCH || "main";
  const [owner, name] = (env.PRIVATE_REPO || "").split("/");
  const query = `query($owner:String!,$name:String!,$expr:String!){
    repository(owner:$owner,name:$name){
      object(expression:$expr){
        ... on Tree {
          entries { name type object { ... on Blob { text isTruncated } } }
        }
      }
    }
  }`;
  const r = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.PRIVATE_REPO_TOKEN}`,
      "User-Agent": "lune-blog-worker",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { owner, name, expr: `${branch}:${dir}` } }),
  });
  if (!r.ok) throw new Error(`graphql list failed: ${r.status}`);
  const data = await r.json();
  if (data.errors) throw new Error(`graphql errors: ${JSON.stringify(data.errors)}`);
  const entries = data?.data?.repository?.object?.entries || [];
  const mdEntries = entries.filter((e) => e.type === "blob" && e.name.endsWith(".md"));
  return Promise.all(
    mdEntries.map(async (e) => {
      let markdown = e.object?.text;
      if (markdown == null || e.object?.isTruncated) {
        markdown = (await getMarkdown(env, dir, e.name)) || "";
      }
      return { slug: e.name.replace(/\.md$/, ""), markdown };
    }),
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // NOTE: keep your existing /auth OAuth route handling here; this sample
    // only shows the blog API routes.
    if (!url.pathname.startsWith("/api/posts")) {
      return new Response("Not found", { status: 404 });
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(request, env) });
    }
    if (request.method !== "GET") {
      return json({ error: "method_not_allowed" }, 405, request, env);
    }

    if (!(await verifyOwner(request, env))) {
      return json({ error: "forbidden" }, 403, request, env);
    }

    const lang = url.searchParams.get("lang") === "en" ? "en" : "zh";
    const dir = dirForLang(lang);

    // GET /api/posts/:slug  → one post's raw markdown
    const slugMatch = url.pathname.match(/^\/api\/posts\/(.+)$/);
    if (slugMatch) {
      const slug = decodeURIComponent(slugMatch[1]);
      try {
        const markdown = await getMarkdown(env, dir, `${slug}.md`);
        if (markdown == null) return json({ error: "not_found" }, 404, request, env);
        return json({ slug, markdown }, 200, request, env);
      } catch {
        return json({ error: "upstream_error" }, 502, request, env);
      }
    }

    // GET /api/posts  → all posts' raw markdown (single GraphQL call)
    try {
      const posts = await listAllPosts(env, dir);
      return json(posts, 200, request, env);
    } catch {
      return json({ error: "upstream_error" }, 502, request, env);
    }
  },
};

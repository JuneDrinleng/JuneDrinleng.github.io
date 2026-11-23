import type { Post } from "./posts";

export type GraphNodeKind = "note" | "tag";
export type GraphEdgeKind = "wikilink" | "tag" | "shared-tag";

export interface GraphNodeData {
  id: string;
  kind: GraphNodeKind;
  label: string;
  post?: Post;
  tagName?: string;
  degree: number;
}

export interface GraphEdgeData {
  source: string;
  target: string;
  kind: GraphEdgeKind;
  weight: number;
  sharedTags?: string[];
}

export interface ExtractedGraph {
  nodes: GraphNodeData[];
  edges: GraphEdgeData[];
  outgoingMap: Map<string, Post[]>;
  backlinksMap: Map<string, Post[]>;
  explicitLinkCount: number;
}

export interface BuildGraphOptions {
  posts: Post[];
  showWikilinks: boolean;
  showTagHubs: boolean;
  scope: "global" | "local";
  focusId: string | null;
  defaultTagLabel: string;
}

function stripCodeBlocks(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/~~~[\s\S]*?~~~/g, " ")
    .replace(/`[^`]*`/g, " ");
}

function normalizeLookupKey(raw: string): string {
  return raw
    .trim()
    .replace(/^\.\/|^\//, "")
    .replace(/^blog\//i, "")
    .replace(/\.md$/i, "")
    .toLowerCase();
}

/**
 * Extract explicit directional note-to-note links from:
 * 1. Obsidian-style wikilinks: [[slug]], [[slug|alias]], [[Title]], [[slug#heading]]
 * 2. Internal Markdown links: [text](/blog/slug), [text](./slug.md)
 * 3. Optional frontmatter `related: [slug-a, slug-b]`
 */
export function extractExplicitLinks(posts: Post[]): Array<[string, string]> {
  const bySlug = new Map<string, string>();
  const byTitle = new Map<string, string>();

  posts.forEach((p) => {
    bySlug.set(p.slug.toLowerCase(), p.slug);
    byTitle.set(p.metadata.title.trim().toLowerCase(), p.slug);
  });

  const resolveTarget = (rawTarget: string): string | null => {
    const withoutHeading = rawTarget.split("#")[0].split("|")[0].trim();
    if (!withoutHeading) return null;
    const key = normalizeLookupKey(withoutHeading);
    if (bySlug.has(key)) return bySlug.get(key)!;
    const rawLower = withoutHeading.toLowerCase();
    if (byTitle.has(rawLower)) return byTitle.get(rawLower)!;
    return null;
  };

  const pairs: Array<[string, string]> = [];
  const seen = new Set<string>();

  const addPair = (sourceSlug: string, targetSlug: string | null) => {
    if (!targetSlug || targetSlug === sourceSlug) return;
    const key = `${sourceSlug}→${targetSlug}`;
    if (seen.has(key)) return;
    seen.add(key);
    pairs.push([sourceSlug, targetSlug]);
  };

  const wikilinkRe = /\[\[([^\]]+)\]\]/g;
  const mdLinkRe = /(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

  posts.forEach((post) => {
    if (post.metadata.related) {
      post.metadata.related.forEach((rel) => {
        addPair(post.slug, resolveTarget(rel));
      });
    }

    const body = stripCodeBlocks(`${post.excerpt}\n${post.content}`);

    let match: RegExpExecArray | null;
    wikilinkRe.lastIndex = 0;
    while ((match = wikilinkRe.exec(body)) !== null) {
      addPair(post.slug, resolveTarget(match[1]));
    }

    mdLinkRe.lastIndex = 0;
    while ((match = mdLinkRe.exec(body)) !== null) {
      const href = match[1].trim();
      if (/^(https?:|mailto:|tel:|#)/i.test(href)) continue;
      addPair(post.slug, resolveTarget(href));
    }
  });

  return pairs;
}

export function buildKnowledgeGraph({
  posts,
  showWikilinks,
  showTagHubs,
  scope,
  focusId,
  defaultTagLabel,
}: BuildGraphOptions): ExtractedGraph {
  const postBySlug = new Map(posts.map((p) => [p.slug, p]));
  const explicitPairs = extractExplicitLinks(posts);

  const outgoingMap = new Map<string, Post[]>();
  const backlinksMap = new Map<string, Post[]>();

  explicitPairs.forEach(([source, target]) => {
    const srcPost = postBySlug.get(source);
    const tgtPost = postBySlug.get(target);
    if (!srcPost || !tgtPost) return;

    if (!outgoingMap.has(source)) outgoingMap.set(source, []);
    outgoingMap.get(source)!.push(tgtPost);

    if (!backlinksMap.has(target)) backlinksMap.set(target, []);
    backlinksMap.get(target)!.push(srcPost);
  });

  const getPostTags = (post: Post): string[] =>
    post.metadata.tags && post.metadata.tags.length > 0
      ? post.metadata.tags
      : [defaultTagLabel];

  const allTagsSet = new Set<string>();
  posts.forEach((p) => getPostTags(p).forEach((tg) => allTagsSet.add(tg)));

  let allowedIds: Set<string> | null = null;
  if (scope === "local" && focusId) {
    allowedIds = new Set<string>([focusId]);

    if (focusId.startsWith("tag:")) {
      const tagName = focusId.slice(4);
      posts.forEach((p) => {
        if (getPostTags(p).includes(tagName)) {
          allowedIds!.add(p.slug);
        }
      });
    } else {
      const focusPost = postBySlug.get(focusId);
      if (showWikilinks) {
        explicitPairs.forEach(([s, t]) => {
          if (s === focusId) allowedIds!.add(t);
          if (t === focusId) allowedIds!.add(s);
        });
      }
      if (focusPost) {
        const focusTags = getPostTags(focusPost);
        if (showTagHubs) {
          focusTags.forEach((tg) => {
            allowedIds!.add(`tag:${tg}`);
            posts.forEach((other) => {
              if (getPostTags(other).includes(tg)) {
                allowedIds!.add(other.slug);
              }
            });
          });
        } else {
          posts.forEach((other) => {
            if (
              other.slug !== focusId &&
              getPostTags(other).some((tg) => focusTags.includes(tg))
            ) {
              allowedIds!.add(other.slug);
            }
          });
        }
      }
    }
  }

  const nodes: GraphNodeData[] = [];
  const nodeMap = new Map<string, GraphNodeData>();

  posts.forEach((post) => {
    if (allowedIds && !allowedIds.has(post.slug)) return;
    const node: GraphNodeData = {
      id: post.slug,
      kind: "note",
      label: post.metadata.title,
      post,
      degree: 0,
    };
    nodes.push(node);
    nodeMap.set(node.id, node);
  });

  if (showTagHubs) {
    Array.from(allTagsSet)
      .sort((a, b) => a.localeCompare(b))
      .forEach((tagName) => {
        const tid = `tag:${tagName}`;
        if (allowedIds && !allowedIds.has(tid)) return;
        const node: GraphNodeData = {
          id: tid,
          kind: "tag",
          label: `#${tagName}`,
          tagName,
          degree: 0,
        };
        nodes.push(node);
        nodeMap.set(node.id, node);
      });
  }

  const edges: GraphEdgeData[] = [];

  if (showWikilinks) {
    explicitPairs.forEach(([s, t]) => {
      const a = nodeMap.get(s);
      const b = nodeMap.get(t);
      if (!a || !b) return;
      edges.push({ source: s, target: t, kind: "wikilink", weight: 2 });
      a.degree += 1;
      b.degree += 1;
    });
  }

  if (showTagHubs) {
    posts.forEach((post) => {
      const a = nodeMap.get(post.slug);
      if (!a) return;
      getPostTags(post).forEach((tg) => {
        const b = nodeMap.get(`tag:${tg}`);
        if (!b) return;
        edges.push({ source: post.slug, target: b.id, kind: "tag", weight: 1 });
        a.degree += 1;
        b.degree += 1;
      });
    });
  } else {
    const visibleNotes = posts.filter((p) => nodeMap.has(p.slug));
    const minShared =
      showWikilinks && explicitPairs.length >= visibleNotes.length / 2 ? 2 : 1;
    for (let i = 0; i < visibleNotes.length; i++) {
      const a = visibleNotes[i];
      const aTags = getPostTags(a);
      for (let j = i + 1; j < visibleNotes.length; j++) {
        const b = visibleNotes[j];
        const shared = aTags.filter((tg) => getPostTags(b).includes(tg));
        if (shared.length >= minShared) {
          edges.push({
            source: a.slug,
            target: b.slug,
            kind: "shared-tag",
            weight: shared.length,
            sharedTags: shared,
          });
          nodeMap.get(a.slug)!.degree += 1;
          nodeMap.get(b.slug)!.degree += 1;
        }
      }
    }
  }

  return {
    nodes,
    edges,
    outgoingMap,
    backlinksMap,
    explicitLinkCount: explicitPairs.length,
  };
}

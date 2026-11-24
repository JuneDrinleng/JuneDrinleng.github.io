import type { ExternalGraphData } from "./blogApi";
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
  relation?: string;
  label?: string;
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
  externalGraph?: ExternalGraphData | null;
}

export interface ExplicitLink {
  source: string;
  target: string;
  relation?: string;
  label?: string;
  weight: number;
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
 * Resolve all graph tags for a post:
 * - Always includes foundational frontmatter `post.metadata.tags` (or `[defaultTagLabel]`)
 * - Layers any `extraTags` defined for `post.slug` in `notes/graph/graph.json`
 */
export function getPostGraphTags(
  post: Post,
  defaultTagLabel: string,
  externalGraph?: ExternalGraphData | null,
): string[] {
  const baseTags =
    post.metadata.tags && post.metadata.tags.length > 0
      ? post.metadata.tags
      : [defaultTagLabel];
  const extraTags = externalGraph?.nodes?.[post.slug]?.extraTags;
  if (!extraTags || extraTags.length === 0) return baseTags;

  const set = new Set<string>(baseTags);
  for (const tg of extraTags) {
    if (tg) set.add(tg);
  }
  return Array.from(set);
}

/**
 * Extract explicit directional note-to-note links from:
 * 1. Obsidian-style wikilinks: [[slug]], [[slug|alias]], [[Title]], [[slug#heading]]
 * 2. Internal Markdown links: [text](/blog/slug), [text](./slug.md)
 * 3. Optional frontmatter `related: [slug-a, slug-b]`
 * 4. External graph overlay (`notes/graph/graph.json` -> `edges` and `nodes[slug].links`)
 */
export function extractExplicitLinks(
  posts: Post[],
  externalGraph?: ExternalGraphData | null,
): ExplicitLink[] {
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

  const links: ExplicitLink[] = [];
  const seen = new Set<string>();

  const addLink = (
    sourceSlug: string,
    targetSlug: string | null,
    relation?: string,
    label?: string,
    weight = 2,
  ) => {
    if (!targetSlug || targetSlug === sourceSlug) return;
    const key = `${sourceSlug}→${targetSlug}`;
    const reverseKey = `${targetSlug}→${sourceSlug}`;
    if (seen.has(key) || seen.has(reverseKey)) return;
    seen.add(key);
    links.push({ source: sourceSlug, target: targetSlug, relation, label, weight });
  };

  const wikilinkRe = /\[\[([^\]]+)\]\]/g;
  const mdLinkRe = /(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

  posts.forEach((post) => {
    if (post.metadata.related) {
      post.metadata.related.forEach((rel) => {
        addLink(post.slug, resolveTarget(rel), "related");
      });
    }

    const body = stripCodeBlocks(`${post.excerpt}\n${post.content}`);

    let match: RegExpExecArray | null;
    wikilinkRe.lastIndex = 0;
    while ((match = wikilinkRe.exec(body)) !== null) {
      addLink(post.slug, resolveTarget(match[1]), "wikilink");
    }

    mdLinkRe.lastIndex = 0;
    while ((match = mdLinkRe.exec(body)) !== null) {
      const href = match[1].trim();
      if (/^(https?:|mailto:|tel:|#)/i.test(href)) continue;
      addLink(post.slug, resolveTarget(href), "markdown");
    }
  });

  // Layer external graph structure (`notes/graph/graph.json`) on top of inline links
  if (externalGraph) {
    if (Array.isArray(externalGraph.edges)) {
      for (const edge of externalGraph.edges) {
        if (!edge || !edge.source || !edge.target) continue;
        const src = resolveTarget(edge.source);
        const tgt = resolveTarget(edge.target);
        if (src && tgt) {
          addLink(src, tgt, edge.relation, edge.label, edge.weight ?? 2);
        }
      }
    }

    if (externalGraph.nodes) {
      for (const [rawSrc, nodeMeta] of Object.entries(externalGraph.nodes)) {
        if (!nodeMeta || !Array.isArray(nodeMeta.links)) continue;
        const src = resolveTarget(rawSrc);
        if (!src) continue;
        for (const rawTgt of nodeMeta.links) {
          addLink(src, resolveTarget(rawTgt), "concept", undefined, 2);
        }
      }
    }
  }

  return links;
}

export function buildKnowledgeGraph({
  posts,
  showWikilinks,
  showTagHubs,
  scope,
  focusId,
  defaultTagLabel,
  externalGraph,
}: BuildGraphOptions): ExtractedGraph {
  const postBySlug = new Map(posts.map((p) => [p.slug, p]));
  const explicitLinks = extractExplicitLinks(posts, externalGraph);

  const outgoingMap = new Map<string, Post[]>();
  const backlinksMap = new Map<string, Post[]>();
  const nodesWithExplicitLinks = new Set<string>();

  explicitLinks.forEach(({ source, target }) => {
    const srcPost = postBySlug.get(source);
    const tgtPost = postBySlug.get(target);
    if (!srcPost || !tgtPost) return;

    nodesWithExplicitLinks.add(source);
    nodesWithExplicitLinks.add(target);

    if (!outgoingMap.has(source)) outgoingMap.set(source, []);
    outgoingMap.get(source)!.push(tgtPost);

    if (!backlinksMap.has(target)) backlinksMap.set(target, []);
    backlinksMap.get(target)!.push(srcPost);
  });

  const getPostTags = (post: Post): string[] =>
    getPostGraphTags(post, defaultTagLabel, externalGraph);

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
        explicitLinks.forEach(({ source: s, target: t }) => {
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
    explicitLinks.forEach(({ source: s, target: t, relation, label, weight }) => {
      const a = nodeMap.get(s);
      const b = nodeMap.get(t);
      if (!a || !b) return;
      edges.push({
        source: s,
        target: t,
        kind: "wikilink",
        weight,
        relation,
        label,
      });
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
    const denseExplicitGraph =
      showWikilinks && explicitLinks.length >= visibleNotes.length / 2;
    for (let i = 0; i < visibleNotes.length; i++) {
      const a = visibleNotes[i];
      const aTags = getPostTags(a);
      const aHasExplicit = nodesWithExplicitLinks.has(a.slug);
      for (let j = i + 1; j < visibleNotes.length; j++) {
        const b = visibleNotes[j];
        const bHasExplicit = nodesWithExplicitLinks.has(b.slug);
        // Any new post not yet present in `notes/graph/graph.json` still connects
        // via a single shared base tag even when #Tag hubs are hidden.
        const minShared =
          denseExplicitGraph && aHasExplicit && bHasExplicit ? 2 : 1;
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
    explicitLinkCount: explicitLinks.length,
  };
}

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router";
import {
  ArrowUpRight,
  Maximize2,
  Minimize2,
  Minus,
  Plus,
} from "lucide-react";
import type { Post } from "../utils/posts";
import {
  buildKnowledgeGraph,
  type GraphEdgeData,
  type GraphNodeData,
} from "../utils/graph";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface KnowledgeGraphProps {
  posts: Post[];
  searchQuery?: string;
  defaultTagLabel: string;
  onSelectTagFilter?: (tag: string) => void;
}

interface SimNode extends GraphNodeData {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Rect {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface CanvasPalette {
  bg: string;
  fg: string;
  muted: string;
  dot: string;
  nodeIdle: string;
  wikiEdge: string;
  tagEdge: string;
  tagEdgeActive: string;
  dimEdge: string;
}

function rectsOverlap(a: Rect, b: Rect): boolean {
  return !(a.x2 < b.x1 || a.x1 > b.x2 || a.y2 < b.y1 || a.y1 > b.y2);
}

/** Truncate label by visual width (CJK counts as 2 units, ASCII as 1). */
function truncateVisual(text: string, maxUnits: number): string {
  let units = 0;
  let out = "";
  for (const ch of text) {
    const w = /[\u2e80-\u9fff\uac00-\ud7af\uff00-\uffef]/.test(ch) ? 2 : 1;
    if (units + w > maxUnits) {
      return `${out.trimEnd()}…`;
    }
    units += w;
    out += ch;
  }
  return text;
}

function stripExcerpt(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~>]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(rawDate: string): string {
  const m = rawDate.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[1]}.${m[2]}.${m[3]}`;
  return rawDate;
}

function readPalette(isDark: boolean): CanvasPalette {
  const style = getComputedStyle(document.documentElement);
  const get = (k: string, fb: string) => style.getPropertyValue(k).trim() || fb;
  return {
    bg: get("--kb-bg", isDark ? "#111111" : "#ffffff"),
    fg: get("--kb-ink", isDark ? "#f5f5f4" : "#0a0a0a"),
    muted: get("--kb-ink-muted", isDark ? "#999999" : "#666666"),
    dot: isDark ? "rgba(245,245,244,0.09)" : "rgba(10,10,10,0.09)",
    nodeIdle: isDark ? "rgba(245,245,244,0.62)" : "rgba(10,10,10,0.62)",
    wikiEdge: isDark ? "rgba(245,245,244,0.45)" : "rgba(10,10,10,0.42)",
    tagEdge: isDark ? "rgba(245,245,244,0.14)" : "rgba(10,10,10,0.13)",
    tagEdgeActive: isDark ? "rgba(245,245,244,0.48)" : "rgba(10,10,10,0.45)",
    dimEdge: isDark ? "rgba(245,245,244,0.05)" : "rgba(10,10,10,0.05)",
  };
}

export default function KnowledgeGraph({
  posts,
  searchQuery = "",
  defaultTagLabel,
  onSelectTagFilter,
}: KnowledgeGraphProps) {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const [scope, setScope] = useState<"global" | "local">("global");
  const [showWikilinks, setShowWikilinks] = useState(true);
  const [showTagHubs, setShowTagHubs] = useState(true);
  const [labelMode, setLabelMode] = useState<"clean" | "auto">("clean");
  const [isFullscreen, setIsFullscreen] = useState(false);
  // Start calm and unselected (click any node to inspect, click blank space to clear)
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Keep selectedId valid when posts list changes via sidebar Year/Tag filters
  useEffect(() => {
    setSelectedId((prev) => {
      if (!prev) return null;
      if (prev.startsWith("tag:")) {
        const tagName = prev.slice(4);
        const exists = posts.some((p) => {
          const tgs =
            p.metadata.tags && p.metadata.tags.length > 0
              ? p.metadata.tags
              : [defaultTagLabel];
          return tgs.includes(tagName);
        });
        return exists ? prev : null;
      }
      return posts.some((p) => p.slug === prev) ? prev : null;
    });
  }, [posts, defaultTagLabel]);

  // Escape key exits fullscreen
  useEffect(() => {
    if (!isFullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFullscreen]);

  // Ensure local scope always has a valid focus target
  const effectiveFocusId = useMemo(() => {
    if (selectedId) return selectedId;
    if (scope === "local" && posts.length > 0) return posts[0].slug;
    return null;
  }, [selectedId, scope, posts]);

  const extracted = useMemo(
    () =>
      buildKnowledgeGraph({
        posts,
        showWikilinks,
        showTagHubs,
        scope,
        focusId: effectiveFocusId,
        defaultTagLabel,
      }),
    [
      posts,
      showWikilinks,
      showTagHubs,
      scope,
      effectiveFocusId,
      defaultTagLabel,
    ],
  );

  // Canvas & simulation refs (kept outside React state for 60fps zero-jank rendering)
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoomReadoutRef = useRef<HTMLSpanElement>(null);

  const simNodesRef = useRef<SimNode[]>([]);
  const nodeMapRef = useRef<Map<string, SimNode>>(new Map());
  const edgesRef = useRef<GraphEdgeData[]>([]);
  const alphaRef = useRef<number>(0.2);
  const camRef = useRef<{ x: number; y: number; zoom: number }>({
    x: 0,
    y: 0,
    zoom: 1,
  });

  const hoveredIdRef = useRef<string | null>(null);
  const selectedIdRef = useRef<string | null>(selectedId);
  const scopeRef = useRef<"global" | "local">(scope);
  const labelModeRef = useRef<"clean" | "auto">(labelMode);
  const searchQueryRef = useRef<string>(searchQuery);
  const paletteRef = useRef<CanvasPalette>(readPalette(theme === "dark"));

  const draggingNodeRef = useRef<SimNode | null>(null);
  const isPanningRef = useRef(false);
  const panStartRef = useRef({ x: 0, y: 0, camX: 0, camY: 0 });
  const pointerDownRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    selectedIdRef.current = selectedId;
  }, [selectedId]);

  useEffect(() => {
    scopeRef.current = scope;
  }, [scope]);

  useEffect(() => {
    labelModeRef.current = labelMode;
  }, [labelMode]);

  useEffect(() => {
    searchQueryRef.current = searchQuery;
  }, [searchQuery]);

  useEffect(() => {
    paletteRef.current = readPalette(theme === "dark");
  }, [theme]);

  const updateZoomReadout = useCallback(() => {
    if (zoomReadoutRef.current) {
      zoomReadoutRef.current.textContent = `${Math.round(
        camRef.current.zoom * 100,
      )}%`;
    }
  }, []);

  const getNodeRadius = (n: SimNode): number => {
    if (n.kind === "tag") return 4.6;
    return Math.min(8.5, 3.8 + Math.sqrt(n.degree) * 1.45);
  };

  /** Single physics step with pairwise minimum separation to prevent crowding */
  const runPhysicsStep = useCallback((stepAlpha: number) => {
    const simNodes = simNodesRef.current;
    const nodeMap = nodeMapRef.current;
    const edges = edgesRef.current;
    const dragging = draggingNodeRef.current;
    const isLocal = scopeRef.current === "local";
    const selId = selectedIdRef.current;

    const count = simNodes.length;
    if (count === 0) return;

    const kRepel = isLocal ? 5600 : Math.min(8200, 5000 + count * 40);
    const minSep = isLocal ? 80 : 68;
    const centerGravity = isLocal ? 0.016 : 0.009;

    for (let i = 0; i < count; i++) {
      const a = simNodes[i];
      for (let j = i + 1; j < count; j++) {
        const b = simNodes[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let distSq = dx * dx + dy * dy;
        if (distSq < 0.01) {
          dx = (i % 2 === 0 ? 1 : -1) * 0.5;
          dy = (j % 2 === 0 ? 1 : -1) * 0.5;
          distSq = 0.5;
        }
        const dist = Math.sqrt(distSq);
        let force = (kRepel / distSq) * stepAlpha;
        if (dist < minSep) {
          force += ((minSep - dist) / minSep) * 4.2 * stepAlpha;
        }
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        a.vx -= fx;
        a.vy -= fy;
        b.vx += fx;
        b.vy += fy;
      }
    }

    for (let i = 0; i < edges.length; i++) {
      const e = edges[i];
      const a = nodeMap.get(e.source);
      const b = nodeMap.get(e.target);
      if (!a || !b) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const targetDist =
        e.kind === "wikilink" ? 136 : e.kind === "tag" ? 116 : 144;
      const strength = e.kind === "wikilink" ? 0.052 : 0.036;
      const f = (dist - targetDist) * strength * stepAlpha;
      const fx = (dx / dist) * f;
      const fy = (dy / dist) * f;
      a.vx += fx;
      a.vy += fy;
      b.vx -= fx;
      b.vy -= fy;
    }

    for (let i = 0; i < count; i++) {
      const n = simNodes[i];
      if (n === dragging) {
        n.vx = 0;
        n.vy = 0;
        continue;
      }
      if (isLocal && n.id === selId) {
        n.vx += (0 - n.x) * 0.16;
        n.vy += (0 - n.y) * 0.16;
      } else {
        n.vx += (0 - n.x) * centerGravity * stepAlpha;
        n.vy += (0 - n.y) * centerGravity * stepAlpha;
      }
      n.vx *= 0.82;
      n.vy *= 0.82;
      n.x += Math.max(-22, Math.min(22, n.vx));
      n.y += Math.max(-22, Math.min(22, n.vy));
    }
  }, []);

  /** Fit camera cleanly to frame all nodes */
  const fitToView = useCallback(() => {
    const wrap = wrapRef.current;
    const simNodes = simNodesRef.current;
    if (!wrap || simNodes.length === 0) {
      camRef.current = { x: 0, y: 0, zoom: 1 };
      updateZoomReadout();
      return;
    }
    const rect = wrap.getBoundingClientRect();
    const W = Math.max(240, rect.width);
    const H = Math.max(240, rect.height);

    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const n of simNodes) {
      if (n.x < minX) minX = n.x;
      if (n.x > maxX) maxX = n.x;
      if (n.y < minY) minY = n.y;
      if (n.y > maxY) maxY = n.y;
    }

    const spanX = Math.max(180, maxX - minX + 160);
    const spanY = Math.max(160, maxY - minY + 130);
    const zoom = Math.max(0.45, Math.min(1.15, Math.min(W / spanX, H / spanY)));

    camRef.current = {
      x: -(minX + maxX) / 2,
      y: -(minY + maxY) / 2,
      zoom,
    };
    updateZoomReadout();
  }, [updateZoomReadout]);

  // Rebuild simulation whenever graph structure changes + deterministic warm-up
  useEffect(() => {
    const prevPos = new Map<string, { x: number; y: number }>();
    simNodesRef.current.forEach((n) => prevPos.set(n.id, { x: n.x, y: n.y }));

    const goldenAngle = 2.399963229728653;
    const nextNodes: SimNode[] = extracted.nodes.map((node, i) => {
      const prev = prevPos.get(node.id);
      const r = 50 * Math.sqrt(i + 1.5);
      const theta = i * goldenAngle;
      return {
        ...node,
        x: prev ? prev.x : Math.cos(theta) * r,
        y: prev ? prev.y : Math.sin(theta) * r,
        vx: 0,
        vy: 0,
      };
    });

    simNodesRef.current = nextNodes;
    nodeMapRef.current = new Map(nextNodes.map((n) => [n.id, n]));
    edgesRef.current = extracted.edges;

    const warmSteps = prevPos.size === 0 ? 120 : 50;
    let a = 1.0;
    for (let s = 0; s < warmSteps; s++) {
      runPhysicsStep(a);
      a *= 0.975;
    }
    alphaRef.current = 0.2;
    fitToView();
  }, [extracted, runPhysicsStep, fitToView]);

  // Refit smoothly when toggling fullscreen
  useEffect(() => {
    const id = window.setTimeout(() => fitToView(), 60);
    return () => window.clearTimeout(id);
  }, [isFullscreen, fitToView]);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();

    const worldToScreen = (wx: number, wy: number, W: number, H: number) => ({
      x: W / 2 + (wx + camRef.current.x) * camRef.current.zoom,
      y: H / 2 + (wy + camRef.current.y) * camRef.current.zoom,
    });

    const draw = () => {
      const rect = wrap.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      if (W < 10 || H < 10) return;

      const c = paletteRef.current;
      const cam = camRef.current;
      const simNodes = simNodesRef.current;
      const nodeMap = nodeMapRef.current;
      const edges = edgesRef.current;
      const hoveredId = hoveredIdRef.current;
      const selId = selectedIdRef.current;
      const currentLabelMode = labelModeRef.current;
      const q = searchQueryRef.current.trim().toLowerCase();

      ctx.clearRect(0, 0, W, H);

      // 1. Subtle Swiss architectural dot grid
      const gridStep = 22 * Math.max(0.65, Math.min(1.5, cam.zoom));
      const ox = (((W / 2 + cam.x * cam.zoom) % gridStep) + gridStep) % gridStep;
      const oy = (((H / 2 + cam.y * cam.zoom) % gridStep) + gridStep) % gridStep;
      ctx.fillStyle = c.dot;
      for (let gx = ox; gx < W; gx += gridStep) {
        for (let gy = oy; gy < H; gy += gridStep) {
          ctx.fillRect(Math.round(gx), Math.round(gy), 1.1, 1.1);
        }
      }

      const activeFocus = hoveredId || selId;
      const focusNeighbors = new Set<string>();
      if (activeFocus) {
        focusNeighbors.add(activeFocus);
        for (const e of edges) {
          if (e.source === activeFocus) focusNeighbors.add(e.target);
          if (e.target === activeFocus) focusNeighbors.add(e.source);
        }
      }

      const matchesSearch = (n: SimNode): boolean => {
        if (!q) return true;
        if (n.label.toLowerCase().includes(q)) return true;
        if (n.post) {
          if (n.post.excerpt.toLowerCase().includes(q)) return true;
          if (
            n.post.metadata.tags?.some((tg) => tg.toLowerCase().includes(q))
          ) {
            return true;
          }
        }
        return false;
      };

      // 2. Draw Edges (Fine hairlines receding cleanly behind nodes)
      for (const e of edges) {
        const a = nodeMap.get(e.source);
        const b = nodeMap.get(e.target);
        if (!a || !b) continue;
        const p1 = worldToScreen(a.x, a.y, W, H);
        const p2 = worldToScreen(b.x, b.y, W, H);

        const isConnected =
          activeFocus !== null &&
          (e.source === activeFocus || e.target === activeFocus);
        const searchDim = q !== "" && !(matchesSearch(a) || matchesSearch(b));

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        if (e.kind === "wikilink") {
          ctx.setLineDash([]);
          ctx.lineWidth = isConnected ? 1.5 : 0.95;
          ctx.strokeStyle = searchDim
            ? c.dimEdge
            : isConnected
              ? c.fg
              : activeFocus
                ? c.dimEdge
                : c.wikiEdge;
        } else {
          ctx.setLineDash([2.5, 3]);
          ctx.lineWidth = isConnected
            ? 1.05
            : Math.min(1.2, 0.75 + (e.weight - 1) * 0.18);
          ctx.strokeStyle = searchDim
            ? c.dimEdge
            : isConnected
              ? c.tagEdgeActive
              : activeFocus
                ? c.dimEdge
                : c.tagEdge;
        }
        ctx.stroke();

        // Delicate V-shaped directional chevron on focused wikilinks
        if (e.kind === "wikilink" && isConnected && !searchDim) {
          const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
          const rTarget =
            getNodeRadius(b) * Math.max(0.8, Math.min(1.28, cam.zoom)) + 5;
          const ax = p2.x - Math.cos(angle) * rTarget;
          const ay = p2.y - Math.sin(angle) * rTarget;
          ctx.setLineDash([]);
          ctx.lineWidth = 1.3;
          ctx.strokeStyle = c.fg;
          ctx.beginPath();
          ctx.moveTo(
            ax - Math.cos(angle - 0.5) * 5,
            ay - Math.sin(angle - 0.5) * 5,
          );
          ctx.lineTo(ax, ay);
          ctx.lineTo(
            ax - Math.cos(angle + 0.5) * 5,
            ay - Math.sin(angle + 0.5) * 5,
          );
          ctx.stroke();
        }
        ctx.restore();
      }

      // 3. Draw Nodes (Pure Monochrome Consistent Geometry: Circle↔Circle, Diamond↔Diamond)
      const screenCoords = new Map<string, { x: number; y: number; r: number }>();

      for (const n of simNodes) {
        const p = worldToScreen(n.x, n.y, W, H);
        const isSelected = n.id === selId;
        const isHovered = n.id === hoveredId;
        const baseR = getNodeRadius(n) * Math.max(0.82, Math.min(1.28, cam.zoom));
        const r = baseR + (isHovered ? 1.4 : 0);
        screenCoords.set(n.id, { x: p.x, y: p.y, r });

        const isNeighbor = activeFocus ? focusNeighbors.has(n.id) : true;
        const isSearchMatch = matchesSearch(n);

        let opacity = 1;
        if (q && !isSearchMatch) opacity = 0.14;
        else if (activeFocus && !isNeighbor) opacity = 0.18;

        ctx.save();
        ctx.globalAlpha = opacity;

        if (n.kind === "tag") {
          ctx.translate(p.x, p.y);
          ctx.rotate(Math.PI / 4);
          const s = r * 0.9;
          if (isSelected) {
            const outer = s + 3.5;
            ctx.strokeStyle = c.fg;
            ctx.lineWidth = 1.1;
            ctx.strokeRect(-outer, -outer, outer * 2, outer * 2);
          }
          ctx.fillStyle = isSelected || isHovered ? c.fg : c.bg;
          ctx.strokeStyle =
            isSelected || isHovered || isNeighbor ? c.fg : c.muted;
          ctx.lineWidth = isSelected || isHovered ? 1.6 : 1.2;
          ctx.fillRect(-s, -s, s * 2, s * 2);
          ctx.strokeRect(-s, -s, s * 2, s * 2);
        } else {
          if (isSelected) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, r + 4, 0, Math.PI * 2);
            ctx.strokeStyle = c.fg;
            ctx.lineWidth = 1.25;
            ctx.stroke();
          } else if (isHovered) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, r + 3, 0, Math.PI * 2);
            ctx.strokeStyle = c.muted;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle =
            isSelected || isHovered
              ? c.fg
              : activeFocus && isNeighbor
                ? c.fg
                : c.nodeIdle;
          ctx.fill();
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = c.bg;
          ctx.stroke();
        }
        ctx.restore();
      }

      // 4. Restrained, Borderless Zero-Overlap Label Pass
      const ranked = [...simNodes].sort((a, b) => {
        const score = (n: SimNode) => {
          if (n.id === hoveredId) return 10000;
          if (n.id === selId) return 9000;
          if (q && matchesSearch(n)) return 6500 + n.degree;
          if (activeFocus && focusNeighbors.has(n.id)) return 4000 + n.degree;
          if (n.kind === "tag") return 1100 + n.degree;
          return n.degree;
        };
        return score(b) - score(a);
      });

      const placedRects: Rect[] = [
        // Keep HUD corner zones clear
        { x1: 0, y1: 0, x2: 195, y2: 32 },
        { x1: 0, y1: H - 32, x2: 190, y2: H },
        { x1: W - 76, y1: H - 36, x2: W, y2: H },
      ];

      const nodeGlyphBoxes = simNodes.map((n) => {
        const sc = screenCoords.get(n.id)!;
        return {
          id: n.id,
          rect: {
            x1: sc.x - sc.r - 3,
            y1: sc.y - sc.r - 3,
            x2: sc.x + sc.r + 3,
            y2: sc.y + sc.r + 3,
          },
        };
      });

      // Zoom-progressive fade for passive note labels in CLEAN mode
      const zoomRevealAlpha = Math.max(0, Math.min(1, (cam.zoom - 1.15) / 0.45));

      const labelH = 14;
      const padX = 7;
      const padY = 4;

      for (const n of ranked) {
        const sc = screenCoords.get(n.id);
        if (!sc) continue;
        if (sc.x < -40 || sc.x > W + 40 || sc.y < -25 || sc.y > H + 25) continue;

        const isHovered = n.id === hoveredId;
        const isSelected = n.id === selId;
        const isPrimary = isHovered || isSelected;
        const isNeighbor = activeFocus ? focusNeighbors.has(n.id) : false;
        const isSearchMatch = q ? matchesSearch(n) : false;

        let labelAlpha = 1;
        if (q) {
          if (!isSearchMatch && !isPrimary) continue;
        } else if (activeFocus) {
          if (!isNeighbor) continue;
          labelAlpha = isPrimary ? 1 : 0.78;
        } else if (scopeRef.current === "local") {
          labelAlpha = isPrimary ? 1 : 0.85;
        } else if (currentLabelMode === "clean") {
          if (n.kind === "tag") {
            labelAlpha = 0.65;
          } else {
            if (zoomRevealAlpha <= 0.05) continue;
            labelAlpha = zoomRevealAlpha * 0.85;
          }
        } else {
          labelAlpha = n.kind === "tag" ? 0.7 : 0.82;
        }

        const maxVisualUnits = isPrimary ? 34 : cam.zoom >= 1.35 ? 24 : 16;
        const text = truncateVisual(n.label, maxVisualUnits);

        ctx.save();
        ctx.font =
          n.kind === "tag"
            ? `${isPrimary ? "600" : "500"} 10.5px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`
            : `${isPrimary ? "600" : "400"} ${isPrimary ? "11.5px" : "10.5px"} "Inter", "Noto Sans SC", system-ui, sans-serif`;

        const tw = ctx.measureText(text).width;
        const gap = isSelected ? 9 : 6;
        const candidates = [sc.y + sc.r + gap, sc.y - sc.r - labelH - gap];

        let chosenY: number | null = null;
        for (const cy of candidates) {
          const rectCand: Rect = {
            x1: sc.x - tw / 2 - padX,
            y1: cy - padY,
            x2: sc.x + tw / 2 + padX,
            y2: cy + labelH + padY,
          };

          const inside =
            rectCand.x1 >= 6 &&
            rectCand.x2 <= W - 6 &&
            rectCand.y1 >= 6 &&
            rectCand.y2 <= H - 6;
          if (!inside && !isPrimary) continue;

          const hitsLabel = placedRects.some((r) => rectsOverlap(rectCand, r));
          const hitsOtherNode =
            !isPrimary &&
            nodeGlyphBoxes.some(
              (g) => g.id !== n.id && rectsOverlap(rectCand, g.rect),
            );

          if (!hitsLabel && !hitsOtherNode) {
            chosenY = cy;
            placedRects.push(rectCand);
            break;
          }
        }

        if (chosenY === null && isHovered) {
          chosenY = candidates[0];
          placedRects.push({
            x1: sc.x - tw / 2 - padX,
            y1: chosenY - padY,
            x2: sc.x + tw / 2 + padX,
            y2: chosenY + labelH + padY,
          });
        }

        if (chosenY === null) {
          ctx.restore();
          continue;
        }

        // Pure borderless editorial typography with clean background halo
        const tx = Math.max(tw / 2 + 8, Math.min(W - tw / 2 - 8, sc.x));
        ctx.globalAlpha = labelAlpha;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.lineJoin = "round";
        ctx.lineWidth = isPrimary ? 5 : 4;
        ctx.strokeStyle = c.bg;
        ctx.strokeText(text, tx, chosenY);
        ctx.fillStyle = isPrimary ? c.fg : n.kind === "tag" ? c.muted : c.fg;
        ctx.fillText(text, tx, chosenY);
        ctx.restore();
      }
    };

    const tick = () => {
      if (alphaRef.current > 0.004 || draggingNodeRef.current) {
        runPhysicsStep(Math.max(0.05, alphaRef.current));
        alphaRef.current *= 0.982;
      }
      draw();
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [runPhysicsStep]);

  const hitTest = useCallback((sx: number, sy: number): SimNode | null => {
    const wrap = wrapRef.current;
    if (!wrap) return null;
    const rect = wrap.getBoundingClientRect();
    const cam = camRef.current;
    const simNodes = simNodesRef.current;

    for (let i = simNodes.length - 1; i >= 0; i--) {
      const n = simNodes[i];
      const px = rect.width / 2 + (n.x + cam.x) * cam.zoom;
      const py = rect.height / 2 + (n.y + cam.y) * cam.zoom;
      const r = Math.max(12, getNodeRadius(n) * cam.zoom + 6);
      const dx = sx - px;
      const dy = sy - py;
      if (dx * dx + dy * dy <= r * r) return n;
    }
    return null;
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;
    pointerDownRef.current = { x: sx, y: sy };

    const hit = hitTest(sx, sy);
    if (hit) {
      draggingNodeRef.current = hit;
      alphaRef.current = Math.max(alphaRef.current, 0.28);
    } else {
      isPanningRef.current = true;
      panStartRef.current = {
        x: sx,
        y: sy,
        camX: camRef.current.x,
        camY: camRef.current.y,
      };
    }
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;

    if (draggingNodeRef.current) {
      const cam = camRef.current;
      draggingNodeRef.current.x = (sx - rect.width / 2) / cam.zoom - cam.x;
      draggingNodeRef.current.y = (sy - rect.height / 2) / cam.zoom - cam.y;
      alphaRef.current = Math.max(alphaRef.current, 0.2);
      return;
    }

    if (isPanningRef.current) {
      const cam = camRef.current;
      cam.x = panStartRef.current.camX + (sx - panStartRef.current.x) / cam.zoom;
      cam.y = panStartRef.current.camY + (sy - panStartRef.current.y) / cam.zoom;
      return;
    }

    const hit = hitTest(sx, sy);
    hoveredIdRef.current = hit ? hit.id : null;
    e.currentTarget.style.cursor = hit ? "pointer" : "grab";
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;
    const moved = Math.hypot(
      sx - pointerDownRef.current.x,
      sy - pointerDownRef.current.y,
    );

    if (moved < 5) {
      if (draggingNodeRef.current) {
        setSelectedId(draggingNodeRef.current.id);
      } else if (scope === "global" && selectedId !== null) {
        // Click empty space -> deselect cleanly
        setSelectedId(null);
      }
    }
    draggingNodeRef.current = null;
    isPanningRef.current = false;
  };

  const handleDoubleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const hit = hitTest(e.clientX - rect.left, e.clientY - rect.top);
    if (!hit) return;
    setSelectedId(hit.id);
    setScope((prev) => (prev === "local" ? "global" : "local"));
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.12 : 0.89;
    camRef.current.zoom = Math.max(
      0.38,
      Math.min(2.8, camRef.current.zoom * factor),
    );
    updateZoomReadout();
  };

  const selectedNode = useMemo(
    () =>
      selectedId
        ? extracted.nodes.find((n) => n.id === selectedId) ?? null
        : null,
    [extracted.nodes, selectedId],
  );

  const noteCount = extracted.nodes.filter((n) => n.kind === "note").length;
  const tagCount = extracted.nodes.filter((n) => n.kind === "tag").length;

  const topHubNotes = useMemo(
    () =>
      [...extracted.nodes]
        .filter((n) => n.kind === "note")
        .sort((a, b) => b.degree - a.degree)
        .slice(0, 6),
    [extracted.nodes],
  );

  const relatedByTags = useMemo(() => {
    if (!selectedNode?.post) return [];
    const cur = selectedNode.post;
    const curTags =
      cur.metadata.tags && cur.metadata.tags.length > 0
        ? cur.metadata.tags
        : [defaultTagLabel];
    return posts
      .filter((p) => p.slug !== cur.slug)
      .map((p) => {
        const pTags =
          p.metadata.tags && p.metadata.tags.length > 0
            ? p.metadata.tags
            : [defaultTagLabel];
        const shared = pTags.filter((tg) => curTags.includes(tg));
        return { post: p, shared };
      })
      .filter((item) => item.shared.length > 0)
      .sort((a, b) => b.shared.length - a.shared.length)
      .slice(0, 6);
  }, [selectedNode, posts, defaultTagLabel]);

  const taggedPostsForSelectedTag = useMemo(() => {
    if (!selectedNode || selectedNode.kind !== "tag" || !selectedNode.tagName)
      return [];
    const targetTag = selectedNode.tagName;
    return posts.filter((p) => {
      const tgs =
        p.metadata.tags && p.metadata.tags.length > 0
          ? p.metadata.tags
          : [defaultTagLabel];
      return tgs.includes(targetTag);
    });
  }, [selectedNode, posts, defaultTagLabel]);

  const jumpToNode = (id: string) => {
    if (id.startsWith("tag:") && !showTagHubs) {
      setShowTagHubs(true);
    }
    setSelectedId(id);
  };

  const handleToggleLocal = () => {
    if (scope === "local") {
      setScope("global");
      return;
    }
    if (!selectedId && topHubNotes.length > 0) {
      setSelectedId(topHubNotes[0].id);
    }
    setScope("local");
  };

  const handleResetView = () => {
    setSelectedId(null);
    setScope("global");
    fitToView();
  };

  const containerClass = isFullscreen
    ? "fixed inset-0 z-50 flex flex-col p-4 sm:p-6"
    : "anim-stream-switch flex flex-col";

  const canvasHeightClass = isFullscreen
    ? "flex-1 min-h-0"
    : "h-[460px] lg:h-[540px]";

  return (
    <section
      className={containerClass}
      style={{ backgroundColor: "var(--kb-bg)", color: "var(--kb-ink)" }}
    >
      {/* Minimal Swiss Command Toolbar */}
      <div
        className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b-2"
        style={{ borderColor: "var(--kb-border)" }}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          {/* Global / Local Switch */}
          <div
            className="inline-flex border font-mono-kb text-xs font-bold uppercase"
            style={{ borderColor: "var(--kb-border)" }}
          >
            <button
              type="button"
              onClick={() => setScope("global")}
              className="px-2.5 py-1 cursor-pointer transition-colors"
              style={{
                backgroundColor:
                  scope === "global" ? "var(--kb-inv-bg)" : "transparent",
                color:
                  scope === "global" ? "var(--kb-inv-ink)" : "var(--kb-ink)",
              }}
            >
              {t("全局", "GLOBAL")}
            </button>
            <button
              type="button"
              onClick={handleToggleLocal}
              className="px-2.5 py-1 border-l cursor-pointer transition-colors"
              style={{
                borderColor: "var(--kb-border)",
                backgroundColor:
                  scope === "local" ? "var(--kb-inv-bg)" : "transparent",
                color:
                  scope === "local" ? "var(--kb-inv-ink)" : "var(--kb-ink)",
              }}
            >
              {t("局部", "LOCAL")}
            </button>
          </div>

          {/* Explicit Links Toggle */}
          <button
            type="button"
            onClick={() => setShowWikilinks((v) => !v)}
            className="px-2.5 py-1 border inline-flex items-center gap-1.5 font-mono-kb text-xs cursor-pointer transition-colors"
            style={{
              borderColor: "var(--kb-border)",
              backgroundColor: showWikilinks
                ? "var(--kb-inv-bg)"
                : "transparent",
              color: showWikilinks ? "var(--kb-inv-ink)" : "var(--kb-ink)",
            }}
            title={t(
              "显式引用 [[Links]] / Markdown 内链 / related",
              "Toggle explicit [[wikilinks]], internal links & related",
            )}
          >
            <span className="inline-block w-2.5 h-[1.5px] bg-current" />
            <span>Links</span>
          </button>

          {/* #Tag Hubs Toggle */}
          <button
            type="button"
            onClick={() => setShowTagHubs((v) => !v)}
            className="px-2.5 py-1 border inline-flex items-center gap-1.5 font-mono-kb text-xs cursor-pointer transition-colors"
            style={{
              borderColor: "var(--kb-border)",
              backgroundColor: showTagHubs
                ? "var(--kb-inv-bg)"
                : "transparent",
              color: showTagHubs ? "var(--kb-inv-ink)" : "var(--kb-ink)",
            }}
            title={t("显示 #Tag 主题枢纽节点", "Toggle #Tag hub nodes")}
          >
            <span className="inline-block w-1.5 h-1.5 border border-current rotate-45" />
            <span>#Tags</span>
          </button>

          {/* Clean vs Auto Label Density Toggle */}
          <button
            type="button"
            onClick={() =>
              setLabelMode((m) => (m === "clean" ? "auto" : "clean"))
            }
            className="px-2.5 py-1 border font-mono-kb text-xs cursor-pointer transition-colors"
            style={{
              borderColor: "var(--kb-border-mid)",
              color: "var(--kb-ink-muted)",
            }}
            title={t(
              "切换文字显示：极简（悬停/放大显示） vs 自动避让",
              "Toggle text density: Clean (hover/zoom reveal) vs Auto collision-free",
            )}
          >
            {labelMode === "clean"
              ? t("文字: 极简", "TEXT: CLEAN")
              : t("文字: 自动", "TEXT: AUTO")}
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleResetView}
            className="px-2.5 py-1 border font-mono-kb text-xs uppercase cursor-pointer transition-colors hover:opacity-75"
            style={{
              borderColor: "var(--kb-border-mid)",
              color: "var(--kb-ink-muted)",
            }}
            title={t("重置视角并取消选中", "Reset view and clear selection")}
          >
            {t("居中", "FIT")}
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen((v) => !v)}
            className="px-2.5 py-1 border inline-flex items-center gap-1.5 font-mono-kb text-xs uppercase cursor-pointer transition-colors hover:opacity-75"
            style={{
              borderColor: "var(--kb-border)",
              color: "var(--kb-ink)",
            }}
            title={
              isFullscreen
                ? t("退出全屏 (Esc)", "Exit fullscreen (Esc)")
                : t("全屏展开图谱", "Expand fullscreen")
            }
          >
            {isFullscreen ? (
              <Minimize2 className="w-3.5 h-3.5" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">
              {isFullscreen ? t("退出", "EXIT") : t("全屏", "EXPAND")}
            </span>
          </button>
        </div>
      </div>

      {/* Main Split Frame: Canvas + Swiss Inspector */}
      <div
        className={`grid grid-cols-1 xl:grid-cols-[1fr_268px] border-2 ${
          isFullscreen ? "flex-1 min-h-0" : ""
        }`}
        style={{ borderColor: "var(--kb-border)" }}
      >
        {/* Interactive Graph Canvas */}
        <div
          ref={wrapRef}
          className={`relative overflow-hidden ${canvasHeightClass}`}
          style={{ backgroundColor: "var(--kb-bg)" }}
        >
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onDoubleClick={handleDoubleClick}
            onWheel={handleWheel}
            className="w-full h-full block touch-none select-none cursor-grab active:cursor-grabbing"
          />

          {/* Minimal Top-Left Counter */}
          <div
            className="pointer-events-none absolute top-3 left-3.5 font-mono-kb text-xs tabular-nums"
            style={{ color: "var(--kb-ink-muted)" }}
          >
            {showTagHubs
              ? `${String(noteCount).padStart(2, "0")} ${t("笔记", "NOTES")} · ${String(tagCount).padStart(2, "0")} ${t("标签", "TAGS")}`
              : `${String(noteCount).padStart(2, "0")} ${t("笔记", "NOTES")} · ${extracted.edges.length} ${t("连线", "LINKS")}`}
          </div>

          {/* Minimal Bottom-Left Legend */}
          <div
            className="pointer-events-none absolute bottom-3 left-3.5 font-mono-kb text-xs flex items-center gap-3"
            style={{ color: "var(--kb-ink-muted)" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: "var(--kb-ink)" }}
              />
              {t("笔记", "Note")}
            </span>
            {showTagHubs && (
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 border rotate-45 inline-block"
                  style={{ borderColor: "var(--kb-ink)" }}
                />
                Tag
              </span>
            )}
            <span
              ref={zoomReadoutRef}
              className="tabular-nums opacity-60"
            >
              100%
            </span>
          </div>

          {/* Minimal Bottom-Right Zoom Controls */}
          <div
            className="absolute bottom-3 right-3 inline-flex border font-mono-kb"
            style={{
              borderColor: "var(--kb-border-mid)",
              backgroundColor: "var(--kb-bg)",
            }}
          >
            <button
              type="button"
              onClick={() => {
                camRef.current.zoom = Math.max(0.38, camRef.current.zoom / 1.2);
                updateZoomReadout();
              }}
              className="w-7 h-7 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Zoom out"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => {
                camRef.current.zoom = Math.min(2.8, camRef.current.zoom * 1.2);
                updateZoomReadout();
              }}
              className="w-7 h-7 border-l flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
              style={{ borderColor: "var(--kb-border-mid)" }}
              aria-label="Zoom in"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Swiss Inspector */}
        <aside
          className={`border-t-2 xl:border-t-0 xl:border-l-2 flex flex-col justify-between p-4 overflow-y-auto ${
            isFullscreen ? "min-h-0" : "max-h-[340px] xl:max-h-[540px]"
          }`}
          style={{
            borderColor: "var(--kb-border)",
            backgroundColor: "var(--kb-bg-subtle)",
          }}
        >
          {!selectedNode ? (
            /* Calm Overview State when nothing is selected */
            <div className="space-y-3">
              <div
                className="font-mono-kb text-xs uppercase tracking-wider"
                style={{ color: "var(--kb-ink-muted)" }}
              >
                {t("图谱概览", "GRAPH OVERVIEW")}
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--kb-ink-muted)" }}
              >
                {t(
                  "悬停节点查看关联脉络，点击任意节点检查详情，点击画布空白处取消选中。滚轮放大可渐显更多标题。",
                  "Hover any node to reveal neighbors, click to inspect details, or click empty space to clear. Scroll to zoom in for more titles.",
                )}
              </p>

              {topHubNotes.length > 0 && (
                <div
                  className="pt-2.5 border-t space-y-1.5"
                  style={{ borderColor: "var(--kb-border-soft)" }}
                >
                  <div
                    className="font-mono-kb text-xs uppercase"
                    style={{ color: "var(--kb-ink-faint)" }}
                  >
                    {t("核心枢纽笔记", "TOP HUB NOTES")}
                  </div>
                  <div className="space-y-1">
                    {topHubNotes.map((n) => (
                      <button
                        key={n.id}
                        type="button"
                        onClick={() => jumpToNode(n.id)}
                        className="w-full text-left text-xs py-1.5 px-2 border flex items-center justify-between gap-2 cursor-pointer transition-colors hover:opacity-80"
                        style={{
                          borderColor: "var(--kb-border-soft)",
                          backgroundColor: "var(--kb-bg-surface)",
                        }}
                      >
                        <span className="truncate">{n.label}</span>
                        <span className="font-mono-kb text-xs opacity-50 tabular-nums shrink-0">
                          {n.degree}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : selectedNode.kind === "tag" ? (
            <div className="space-y-3">
              <div
                className="font-mono-kb text-xs uppercase tracking-wider flex items-center justify-between"
                style={{ color: "var(--kb-ink-muted)" }}
              >
                <span>{t("主题", "TOPIC")}</span>
                <span className="tabular-nums">
                  {String(taggedPostsForSelectedTag.length).padStart(2, "0")}{" "}
                  {t("篇", "NOTES")}
                </span>
              </div>
              <h3 className="font-mono-kb text-lg font-bold tracking-tight">
                {selectedNode.label}
              </h3>

              <div
                className="pt-2 border-t space-y-1 max-h-64 overflow-y-auto pr-0.5"
                style={{ borderColor: "var(--kb-border-soft)" }}
              >
                {taggedPostsForSelectedTag.map((p) => (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => jumpToNode(p.slug)}
                    className="w-full text-left text-xs py-1.5 px-2 border transition-colors cursor-pointer truncate block hover:opacity-80"
                    style={{
                      borderColor: "var(--kb-border-soft)",
                      backgroundColor: "var(--kb-bg-surface)",
                    }}
                  >
                    → {p.metadata.title}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            (() => {
              const post = selectedNode.post!;
              const outgoing = extracted.outgoingMap.get(post.slug) ?? [];
              const backlinks = extracted.backlinksMap.get(post.slug) ?? [];
              const plainExcerpt = stripExcerpt(post.excerpt);

              return (
                <div className="space-y-3">
                  <div
                    className="font-mono-kb text-xs tabular-nums flex items-center justify-between"
                    style={{ color: "var(--kb-ink-muted)" }}
                  >
                    <span>{formatDate(post.metadata.date)}</span>
                    <span>
                      {t(
                        `约 ${post.readingTimeMin} 分钟`,
                        `${post.readingTimeMin} MIN`,
                      )}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold leading-snug tracking-tight">
                    {post.metadata.title}
                  </h3>

                  {plainExcerpt && (
                    <p
                      className="text-xs leading-relaxed line-clamp-3"
                      style={{ color: "var(--kb-ink-muted)" }}
                    >
                      {plainExcerpt}
                    </p>
                  )}

                  {post.metadata.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {post.metadata.tags.map((tg) => (
                        <button
                          key={tg}
                          type="button"
                          onClick={() => jumpToNode(`tag:${tg}`)}
                          className="font-mono-kb text-xs px-1.5 py-0.5 border cursor-pointer transition-colors hover:opacity-80"
                          style={{
                            borderColor: "var(--kb-border-soft)",
                            backgroundColor: "var(--kb-bg-surface)",
                            color: "var(--kb-ink-muted)",
                          }}
                        >
                          #{tg}
                        </button>
                      ))}
                    </div>
                  )}

                  {(outgoing.length > 0 || backlinks.length > 0) && (
                    <div
                      className="pt-2.5 border-t space-y-2"
                      style={{ borderColor: "var(--kb-border-soft)" }}
                    >
                      {outgoing.length > 0 && (
                        <div className="space-y-1">
                          <div
                            className="font-mono-kb text-xs flex justify-between"
                            style={{ color: "var(--kb-ink-faint)" }}
                          >
                            <span>{t("引用出链", "OUTGOING")}</span>
                            <span className="tabular-nums">
                              {outgoing.length}
                            </span>
                          </div>
                          {outgoing.map((target) => (
                            <button
                              key={target.slug}
                              type="button"
                              onClick={() => jumpToNode(target.slug)}
                              className="w-full text-left text-xs py-1 px-2 border truncate block cursor-pointer hover:opacity-80"
                              style={{
                                borderColor: "var(--kb-border-soft)",
                                backgroundColor: "var(--kb-bg-surface)",
                              }}
                            >
                              ↗ {target.metadata.title}
                            </button>
                          ))}
                        </div>
                      )}

                      {backlinks.length > 0 && (
                        <div className="space-y-1">
                          <div
                            className="font-mono-kb text-xs flex justify-between"
                            style={{ color: "var(--kb-ink-faint)" }}
                          >
                            <span>{t("反向链接", "BACKLINKS")}</span>
                            <span className="tabular-nums">
                              {backlinks.length}
                            </span>
                          </div>
                          {backlinks.map((src) => (
                            <button
                              key={src.slug}
                              type="button"
                              onClick={() => jumpToNode(src.slug)}
                              className="w-full text-left text-xs py-1 px-2 border truncate block cursor-pointer hover:opacity-80"
                              style={{
                                borderColor: "var(--kb-border-soft)",
                                backgroundColor: "var(--kb-bg-surface)",
                              }}
                            >
                              ↙ {src.metadata.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {relatedByTags.length > 0 && (
                    <div
                      className="pt-2.5 border-t space-y-1.5"
                      style={{ borderColor: "var(--kb-border-soft)" }}
                    >
                      <div
                        className="font-mono-kb text-xs flex justify-between"
                        style={{ color: "var(--kb-ink-faint)" }}
                      >
                        <span>{t("同主题关联", "SHARED TOPICS")}</span>
                        <span className="tabular-nums">
                          {relatedByTags.length}
                        </span>
                      </div>
                      <div className="space-y-1">
                        {relatedByTags.map(({ post: peer, shared }) => (
                          <button
                            key={peer.slug}
                            type="button"
                            onClick={() => jumpToNode(peer.slug)}
                            className="w-full text-left text-xs py-1 px-2 border flex items-center justify-between gap-2 cursor-pointer hover:opacity-80"
                            style={{
                              borderColor: "var(--kb-border-soft)",
                              backgroundColor: "var(--kb-bg-surface)",
                            }}
                          >
                            <span className="truncate">
                              {peer.metadata.title}
                            </span>
                            <span
                              className="font-mono-kb text-xs shrink-0 opacity-55"
                              title={shared.map((s) => `#${s}`).join(" ")}
                            >
                              ×{shared.length}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()
          )}

          {/* Inspector Footer Actions (Only shown when a node is selected) */}
          {selectedNode && (
            <div
              className="pt-3 mt-4 border-t flex items-center gap-2"
              style={{ borderColor: "var(--kb-border-soft)" }}
            >
              <button
                type="button"
                onClick={() =>
                  setScope((s) => (s === "local" ? "global" : "local"))
                }
                className="kb-btn-solid flex-1 py-1.5 px-2.5 font-mono-kb text-xs font-bold uppercase cursor-pointer text-center"
              >
                {scope === "local"
                  ? t("全局", "GLOBAL")
                  : t("局部", "LOCAL")}
              </button>

              {selectedNode.kind === "note" && selectedNode.post ? (
                <button
                  type="button"
                  onClick={() => navigate(`/blog/${selectedNode.post!.slug}`)}
                  className="kb-btn-outline py-1.5 px-2.5 inline-flex items-center gap-1 font-mono-kb text-xs font-bold uppercase cursor-pointer"
                >
                  <span>{t("阅读", "OPEN")}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                selectedNode.tagName &&
                onSelectTagFilter && (
                  <button
                    type="button"
                    onClick={() => onSelectTagFilter(selectedNode.tagName!)}
                    className="kb-btn-outline py-1.5 px-2.5 font-mono-kb text-xs font-bold uppercase cursor-pointer"
                  >
                    {t("筛选", "FILTER")}
                  </button>
                )
              )}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

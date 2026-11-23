import {
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  ArrowUpRight,
  AlignJustify,
  Rows2,
  Search,
  X,
} from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router";
import {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
} from "react";
import { getAllPosts, type Post } from "../utils/posts";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import YearPicker from "../components/YearPicker";
import KnowledgeGraph from "../components/KnowledgeGraph";
import Footer from "../components/Footer";

const POSTS_PER_PAGE = 12;

type ViewMode = "index" | "year" | "tag" | "graph";
type Density = "editorial" | "compact";
type SortOrder = "desc" | "asc";

function stripExcerptMarkdown(md: string): string {
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

function formatCatalogDate(rawDate: string): string {
  const m = rawDate.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[1]}.${m[2]}.${m[3]}`;
  const d = new Date(rawDate);
  if (Number.isNaN(d.getTime())) return rawDate;
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${mo}.${day}`;
}

function getPostYear(rawDate: string): number | null {
  const m = rawDate.match(/^(\d{4})/);
  if (m) return Number(m[1]);
  const d = new Date(rawDate);
  return Number.isNaN(d.getTime()) ? null : d.getFullYear();
}

export default function Blog() {
  const { language, t } = useLanguage();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [viewMode, setViewMode] = useState<ViewMode>("index");
  const [density, setDensity] = useState<Density>("editorial");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [selectedTag, setSelectedTag] = useState<string | null>(
    () => searchParams.get("tag") || null,
  );
  const [selectedYear, setSelectedYear] = useState<number | null>(() => {
    const raw = searchParams.get("year");
    return raw && /^\d{4}$/.test(raw) ? Number(raw) : null;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // Incrementing streamKey triggers staggered Swiss entrance ONLY on intentional
  // view/filter/page switches — never while typing in search.
  const [streamKey, setStreamKey] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const defaultTag = t("未分类", "Uncategorized");

  // Sync URL ?tag= / ?year= if navigated from BlogPost tag click
  useEffect(() => {
    const urlTag = searchParams.get("tag") || null;
    const urlYearRaw = searchParams.get("year");
    const urlYear =
      urlYearRaw && /^\d{4}$/.test(urlYearRaw) ? Number(urlYearRaw) : null;
    setSelectedTag(urlTag);
    setSelectedYear(urlYear);
  }, [searchParams]);

  // Fetch posts for authenticated owner
  const loadPosts = useCallback(() => {
    if (!token) return;
    let cancelled = false;
    setLoading(true);
    setError(false);
    getAllPosts(language, token)
      .then((posts) => {
        if (cancelled) return;
        setAllPosts(posts.filter((p) => !p.metadata.draft));
        setLoading(false);
        setStreamKey((k) => k + 1);
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [language, token]);

  useEffect(() => {
    return loadPosts();
  }, [loadPosts]);

  // Keyboard shortcut "/" focuses search
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Derived tag & year counts across all published posts
  const allTags = useMemo(() => {
    const map = new Map<string, number>();
    allPosts.forEach((p) => {
      const tags =
        p.metadata.tags && p.metadata.tags.length > 0
          ? p.metadata.tags
          : [defaultTag];
      tags.forEach((tg) => map.set(tg, (map.get(tg) || 0) + 1));
    });
    return Array.from(map.entries()).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
    );
  }, [allPosts, defaultTag]);

  const yearCounts = useMemo(() => {
    const map = new Map<number, number>();
    allPosts.forEach((p) => {
      const y = getPostYear(p.metadata.date);
      if (y !== null) map.set(y, (map.get(y) || 0) + 1);
    });
    return map;
  }, [allPosts]);

  const yearSpanLabel = useMemo(() => {
    const years = Array.from(yearCounts.keys()).sort((a, b) => a - b);
    if (years.length === 0) return "—";
    if (years.length === 1) return String(years[0]);
    return `${String(years[0]).slice(-2)}–${String(years[years.length - 1]).slice(-2)}`;
  }, [yearCounts]);

  // Year & Tag filtered pool (used by Graph view so search highlights live without rebuilding layout)
  const yearTagFilteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      if (selectedTag) {
        const postTags =
          post.metadata.tags && post.metadata.tags.length > 0
            ? post.metadata.tags
            : [defaultTag];
        if (!postTags.includes(selectedTag)) return false;
      }
      if (selectedYear !== null) {
        if (getPostYear(post.metadata.date) !== selectedYear) return false;
      }
      return true;
    });
  }, [allPosts, selectedTag, selectedYear, defaultTag]);

  // Combined filtering & sorting
  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = yearTagFilteredPosts.filter((post) => {
      if (!q) return true;
      const titleMatch = post.metadata.title.toLowerCase().includes(q);
      const excerptMatch = post.excerpt.toLowerCase().includes(q);
      const tagsMatch = post.metadata.tags?.some((tag) =>
        tag.toLowerCase().includes(q),
      );
      return titleMatch || excerptMatch || tagsMatch;
    });
    return sortOrder === "desc" ? list : [...list].reverse();
  }, [yearTagFilteredPosts, searchQuery, sortOrder]);

  const hasActiveFilters = Boolean(
    searchQuery.trim() || selectedTag !== null || selectedYear !== null,
  );

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );
  const safePage = Math.min(currentPage, totalPages);
  const startIdx = (safePage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIdx,
    startIdx + POSTS_PER_PAGE,
  );

  // Year & Tag groupings
  const postsByYear = useMemo(() => {
    const map: Record<string, Post[]> = {};
    filteredPosts.forEach((post) => {
      const y = getPostYear(post.metadata.date);
      const key = y !== null ? String(y) : t("其他", "Other");
      if (!map[key]) map[key] = [];
      map[key].push(post);
    });
    return Object.entries(map).sort(([a], [b]) =>
      sortOrder === "desc" ? Number(b) - Number(a) : Number(a) - Number(b),
    );
  }, [filteredPosts, sortOrder, t]);

  const postsByTag = useMemo(() => {
    const map: Record<string, Post[]> = {};
    filteredPosts.forEach((post) => {
      const tags =
        post.metadata.tags && post.metadata.tags.length > 0
          ? post.metadata.tags
          : [defaultTag];
      tags.forEach((tg) => {
        if (!map[tg]) map[tg] = [];
        map[tg].push(post);
      });
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredPosts, defaultTag]);

  const syncUrlFilters = useCallback(
    (nextTag: string | null, nextYear: number | null) => {
      const params = new URLSearchParams();
      if (nextTag) params.set("tag", nextTag);
      if (nextYear !== null) params.set("year", String(nextYear));
      setSearchParams(params, { replace: true });
    },
    [setSearchParams],
  );

  const handleToggleTag = (tag: string) => {
    const next = selectedTag === tag ? null : tag;
    setSelectedTag(next);
    setCurrentPage(1);
    setStreamKey((k) => k + 1);
    syncUrlFilters(next, selectedYear);
  };

  const handleSelectYear = (year: number | null) => {
    setSelectedYear(year);
    setCurrentPage(1);
    setStreamKey((k) => k + 1);
    syncUrlFilters(selectedTag, year);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedTag(null);
    setSelectedYear(null);
    setCurrentPage(1);
    setStreamKey((k) => k + 1);
    syncUrlFilters(null, null);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    if (mode === viewMode) return;
    setViewMode(mode);
    setCurrentPage(1);
    setStreamKey((k) => k + 1);
  };

  const handleDensityChange = (next: Density) => {
    if (next === density) return;
    setDensity(next);
    setStreamKey((k) => k + 1);
  };

  const handleToggleSort = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    setCurrentPage(1);
    setStreamKey((k) => k + 1);
  };

  const handlePageChange = (page: number) => {
    if (page === safePage) return;
    setCurrentPage(page);
    setStreamKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showFeatured =
    !loading &&
    !error &&
    viewMode === "index" &&
    density === "editorial" &&
    sortOrder === "desc" &&
    !hasActiveFilters &&
    safePage === 1 &&
    paginatedPosts.length > 0;

  const renderCatalogRow = (post: Post, numStr: string, rowIdx: number) => {
    const dateStr = formatCatalogDate(post.metadata.date);
    const plainExcerpt = stripExcerptMarkdown(post.excerpt);
    const staggerStyle = {
      "--stagger": `${Math.min(rowIdx, 10) * 24}ms`,
    } as CSSProperties;

    if (density === "compact") {
      return (
        <article
          key={`${streamKey}-${post.slug}`}
          onClick={() => navigate(`/blog/${post.slug}`)}
          style={staggerStyle}
          className="swiss-row anim-row-stagger py-3 px-3 sm:px-4 grid grid-cols-[36px_1fr_auto] sm:grid-cols-[44px_102px_1fr_auto] gap-3 items-center cursor-pointer"
        >
          <span
            className="font-mono-kb text-xs tabular-nums"
            style={{ color: "var(--kb-ink-faint)" }}
          >
            {numStr}
          </span>
          <time
            dateTime={post.metadata.date}
            className="hidden sm:block font-mono-kb text-xs tabular-nums"
            style={{ color: "var(--kb-ink-muted)" }}
          >
            {dateStr}
          </time>
          <div className="min-w-0 flex items-center gap-2.5">
            <Link
              to={`/blog/${post.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="text-sm sm:text-base font-bold tracking-tight truncate hover:underline underline-offset-4"
            >
              {post.metadata.title}
            </Link>
            {post.metadata.tags.length > 0 && (
              <div className="hidden xl:flex items-center gap-1 shrink-0">
                {post.metadata.tags.slice(0, 2).map((tg) => (
                  <span
                    key={tg}
                    className="font-mono-kb text-xs px-1.5 py-0.5 border"
                    style={{
                      borderColor: "var(--kb-border-soft)",
                      color: "var(--kb-ink-faint)",
                    }}
                  >
                    {tg}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div
            className="flex items-center gap-3 font-mono-kb text-xs shrink-0"
            style={{ color: "var(--kb-ink-faint)" }}
          >
            <span className="sm:hidden">{dateStr.slice(2)}</span>
            <span className="hidden sm:inline">{post.readingTimeMin}M</span>
            <ArrowRight
              className="w-4 h-4 swiss-arrow opacity-40 transition-all"
              style={{ color: "var(--kb-ink)" }}
            />
          </div>
        </article>
      );
    }

    return (
      <article
        key={`${streamKey}-${post.slug}`}
        onClick={() => navigate(`/blog/${post.slug}`)}
        style={staggerStyle}
        className="swiss-row anim-row-stagger py-5 px-3 sm:px-5 grid grid-cols-1 md:grid-cols-[126px_1fr_24px] gap-2 md:gap-5 items-start cursor-pointer"
      >
        {/* Left Coordinate Column */}
        <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 font-mono-kb text-xs pt-0.5">
          <div className="flex items-center gap-2">
            <span
              className="tabular-nums font-bold"
              style={{ color: "var(--kb-ink-faint)" }}
            >
              {numStr}
            </span>
            <span style={{ color: "var(--kb-border-mid)" }}>/</span>
            <time
              dateTime={post.metadata.date}
              className="tabular-nums font-medium"
              style={{ color: "var(--kb-ink)" }}
            >
              {dateStr}
            </time>
          </div>
          <span
            className="tabular-nums"
            style={{ color: "var(--kb-ink-faint)" }}
          >
            {t(
              `约 ${post.readingTimeMin} 分钟`,
              `${post.readingTimeMin} MIN READ`,
            )}
          </span>
        </div>

        {/* Center Editorial Content */}
        <div className="min-w-0">
          <Link
            to={`/blog/${post.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="block"
          >
            <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight leading-snug mb-1.5">
              {post.metadata.title}
            </h2>
          </Link>
          {plainExcerpt && (
            <p
              className="text-sm leading-relaxed mb-3 line-clamp-2"
              style={{ color: "var(--kb-ink-muted)" }}
            >
              {plainExcerpt}
            </p>
          )}
          {post.metadata.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              {post.metadata.tags.map((tg) => {
                const active = selectedTag === tg;
                return (
                  <button
                    key={tg}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleTag(tg);
                    }}
                    className="font-mono-kb text-xs px-2 py-0.5 border transition-colors cursor-pointer"
                    style={{
                      borderColor: active
                        ? "var(--kb-border)"
                        : "var(--kb-border-soft)",
                      backgroundColor: active
                        ? "var(--kb-inv-bg)"
                        : "transparent",
                      color: active
                        ? "var(--kb-inv-ink)"
                        : "var(--kb-ink-muted)",
                    }}
                  >
                    #{tg}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Directional Arrow */}
        <div
          className="hidden md:flex justify-end pt-1 swiss-arrow opacity-35 transition-all"
          style={{ color: "var(--kb-ink)" }}
        >
          <ArrowRight className="w-4 h-4" />
        </div>
      </article>
    );
  };

  return (
    <div
      className="min-h-[calc(100vh-3rem)] flex flex-col"
      style={{ backgroundColor: "var(--kb-bg)", color: "var(--kb-ink)" }}
    >
      {/* Compact Swiss Structural Masthead */}
      <header
        className="border-b-4"
        style={{ borderColor: "var(--kb-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-7 sm:py-9 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div
              className="flex items-center gap-2 font-mono-kb text-xs uppercase tracking-widest mb-2"
              style={{ color: "var(--kb-ink-muted)" }}
            >
              <span
                className="w-2 h-2 inline-block"
                style={{ backgroundColor: "var(--kb-ok)" }}
              />
              <span>
                LUNE.LTD // {t("私人知识库索引", "PRIVATE KNOWLEDGE INDEX")}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              {t("知识库", "Knowledge Base")}
            </h1>
          </div>

          {/* 3-Cell Swiss Telemetry Strip */}
          <div
            className="hidden md:grid grid-cols-3 border-2 font-mono-kb text-xs"
            style={{ borderColor: "var(--kb-border)" }}
          >
            <div
              className="px-4 py-2.5 border-r"
              style={{ borderColor: "var(--kb-border-soft)" }}
            >
              <div className="text-xs opacity-55 mb-0.5">
                {t("条目", "NOTES")}
              </div>
              <div className="text-base font-bold tabular-nums">
                {loading ? "—" : String(allPosts.length).padStart(2, "0")}
              </div>
            </div>
            <div
              className="px-4 py-2.5 border-r"
              style={{ borderColor: "var(--kb-border-soft)" }}
            >
              <div className="text-xs opacity-55 mb-0.5">
                {t("跨度", "SPAN")}
              </div>
              <div className="text-base font-bold tabular-nums">
                {loading ? "—" : yearSpanLabel}
              </div>
            </div>
            <div className="px-4 py-2.5">
              <div className="text-xs opacity-55 mb-0.5">
                {t("主题", "TOPICS")}
              </div>
              <div className="text-base font-bold tabular-nums">
                {loading ? "—" : String(allTags.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Asymmetric 2-Column Swiss Grid (stretches full height to footer) */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[248px_1fr] lg:gap-10 min-h-full">
          {/* LEFT COLUMN: full grid height so vertical border runs seamlessly top-to-bottom */}
          <aside
            className="lg:border-r lg:pr-8"
            style={{ borderColor: "var(--kb-border-mid)" }}
          >
            <div className="py-5 lg:py-8 lg:sticky lg:top-12 space-y-6">
              {/* 1. View Mode Stack */}
              <div>
                <div
                  className="font-mono-kb text-xs uppercase tracking-widest mb-2.5 font-bold"
                  style={{ color: "var(--kb-ink-faint)" }}
                >
                  {t("视图模式", "VIEW MODE")}
                </div>
                <div
                  className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 border-2"
                  style={{ borderColor: "var(--kb-border)" }}
                >
                  {(
                    [
                      ["index", "01", t("目录索引", "Index")],
                      ["year", "02", t("年份归档", "Archive")],
                      ["tag", "03", t("主题分类", "Topics")],
                      ["graph", "04", t("知识图谱", "Graph")],
                    ] as const
                  ).map(([mode, num, label], idx) => {
                    const active = viewMode === mode;
                    const borderCls =
                      idx === 0
                        ? ""
                        : idx === 1
                          ? "border-l-2 lg:border-l-0 lg:border-t-2"
                          : idx === 2
                            ? "border-t-2 sm:border-t-0 sm:border-l-2 lg:border-l-0 lg:border-t-2"
                            : "border-t-2 border-l-2 sm:border-t-0 lg:border-l-0 lg:border-t-2";
                    return (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => handleViewModeChange(mode)}
                        className={`px-3 py-2 flex items-center justify-between font-mono-kb text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${borderCls}`}
                        style={{
                          borderColor: "var(--kb-border)",
                          backgroundColor: active
                            ? "var(--kb-inv-bg)"
                            : "transparent",
                          color: active
                            ? "var(--kb-inv-ink)"
                            : "var(--kb-ink)",
                        }}
                      >
                        <span>{label}</span>
                        <span className="opacity-60 hidden lg:inline">
                          {num}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Scalable Swiss Year Picker */}
              <YearPicker
                yearCounts={yearCounts}
                totalCount={allPosts.length}
                selectedYear={selectedYear}
                onSelectYear={handleSelectYear}
              />

              {/* 3. Vertical Topics Directory */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="font-mono-kb text-xs uppercase tracking-widest font-bold"
                    style={{ color: "var(--kb-ink-faint)" }}
                  >
                    {t("主题索引", "TOPICS")}
                  </span>
                  {selectedTag && (
                    <button
                      type="button"
                      onClick={() => handleToggleTag(selectedTag)}
                      className="font-mono-kb text-xs underline cursor-pointer"
                    >
                      {t("全部", "All")}
                    </button>
                  )}
                </div>
                <div
                  className="flex lg:flex-col flex-wrap gap-1.5 lg:gap-0 lg:border-t lg:max-h-[42vh] lg:overflow-y-auto"
                  style={{ borderColor: "var(--kb-border-soft)" }}
                >
                  {allTags.map(([tg, cnt]) => {
                    const active = selectedTag === tg;
                    return (
                      <button
                        key={tg}
                        type="button"
                        onClick={() => handleToggleTag(tg)}
                        className="lg:w-full px-2.5 py-1.5 lg:px-2 lg:py-2 flex items-center justify-between gap-2 font-mono-kb text-xs border lg:border-0 lg:border-b transition-colors cursor-pointer"
                        style={{
                          borderColor: active
                            ? "var(--kb-border)"
                            : "var(--kb-border-soft)",
                          backgroundColor: active
                            ? "var(--kb-inv-bg)"
                            : "transparent",
                          color: active
                            ? "var(--kb-inv-ink)"
                            : "var(--kb-ink)",
                        }}
                      >
                        <span className="truncate">#{tg}</span>
                        <span className="tabular-nums opacity-60">
                          {String(cnt).padStart(2, "0")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT MAIN CATALOG STREAM */}
          <main className="py-5 lg:py-8 lg:pb-12 min-w-0">
            {/* Command Strip: Search + Sort + Density */}
            <div className="mb-6 space-y-3">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-45 pointer-events-none" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder={
                      viewMode === "graph"
                        ? t(
                            "在图谱中高亮检索笔记或标签…",
                            "Highlight notes or tags in graph…",
                          )
                        : t(
                            "检索标题、摘要或标签…",
                            "Search title, excerpt, or tag…",
                          )
                    }
                    className="w-full border-2 pl-10 pr-10 py-2.5 text-sm focus:outline-none"
                    style={{
                      borderColor: "var(--kb-border)",
                      backgroundColor: "var(--kb-bg)",
                      color: "var(--kb-ink)",
                    }}
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setCurrentPage(1);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 cursor-pointer"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  ) : (
                    <kbd
                      className="hidden sm:inline-block absolute right-3 top-1/2 -translate-y-1/2 font-mono-kb text-xs px-1.5 py-0.5 border opacity-45"
                      style={{ borderColor: "var(--kb-border-soft)" }}
                    >
                      /
                    </kbd>
                  )}
                </div>

                {viewMode !== "graph" && (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handleToggleSort}
                      className="h-full px-3 py-2 border-2 inline-flex items-center gap-1.5 font-mono-kb text-xs font-bold uppercase cursor-pointer hover:opacity-75 transition-opacity"
                      style={{ borderColor: "var(--kb-border)" }}
                      title={t("切换排序方向", "Toggle sort order")}
                    >
                      <ArrowUpDown className="w-3.5 h-3.5" />
                      <span>
                        {sortOrder === "desc"
                          ? t("最新", "NEWEST")
                          : t("最早", "OLDEST")}
                      </span>
                    </button>

                    <div
                      className="inline-flex border-2 h-full"
                      style={{ borderColor: "var(--kb-border)" }}
                    >
                      <button
                        type="button"
                        onClick={() => handleDensityChange("editorial")}
                        className="px-2.5 py-2 inline-flex items-center cursor-pointer transition-colors"
                        style={{
                          backgroundColor:
                            density === "editorial"
                              ? "var(--kb-inv-bg)"
                              : "transparent",
                          color:
                            density === "editorial"
                              ? "var(--kb-inv-ink)"
                              : "var(--kb-ink)",
                        }}
                        title={t("标准视图（含摘要）", "Editorial view")}
                        aria-label={t("标准视图", "Editorial view")}
                      >
                        <Rows2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDensityChange("compact")}
                        className="px-2.5 py-2 border-l-2 inline-flex items-center cursor-pointer transition-colors"
                        style={{
                          borderColor: "var(--kb-border)",
                          backgroundColor:
                            density === "compact"
                              ? "var(--kb-inv-bg)"
                              : "transparent",
                          color:
                            density === "compact"
                              ? "var(--kb-inv-ink)"
                              : "var(--kb-ink)",
                        }}
                        title={t("紧凑索引（快速扫读）", "Compact index")}
                        aria-label={t("紧凑索引", "Compact index")}
                      >
                        <AlignJustify className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Active Filter Chips Bar */}
              {hasActiveFilters && (
                <div
                  className="anim-popover flex flex-wrap items-center justify-between gap-2 px-3 py-2 border font-mono-kb text-xs"
                  style={{
                    borderColor: "var(--kb-border-soft)",
                    backgroundColor: "var(--kb-bg-subtle)",
                  }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span style={{ color: "var(--kb-ink-muted)" }}>
                      {t(
                        `匹配 ${filteredPosts.length} 篇`,
                        `${filteredPosts.length} MATCHED`,
                      )}
                      :
                    </span>
                    {selectedYear !== null && (
                      <button
                        type="button"
                        onClick={() => handleSelectYear(null)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 border cursor-pointer"
                        style={{
                          borderColor: "var(--kb-border)",
                          backgroundColor: "var(--kb-inv-bg)",
                          color: "var(--kb-inv-ink)",
                        }}
                      >
                        <span>{selectedYear}</span>
                        <X className="w-3 h-3" />
                      </button>
                    )}
                    {selectedTag && (
                      <button
                        type="button"
                        onClick={() => handleToggleTag(selectedTag)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 border cursor-pointer"
                        style={{
                          borderColor: "var(--kb-border)",
                          backgroundColor: "var(--kb-inv-bg)",
                          color: "var(--kb-inv-ink)",
                        }}
                      >
                        <span>#{selectedTag}</span>
                        <X className="w-3 h-3" />
                      </button>
                    )}
                    {searchQuery.trim() && (
                      <span
                        className="px-2 py-0.5 border"
                        style={{ borderColor: "var(--kb-border)" }}
                      >
                        "{searchQuery.trim()}"
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="underline uppercase cursor-pointer"
                  >
                    {t("全部清除", "CLEAR ALL")}
                  </button>
                </div>
              )}
            </div>

            {/* Loading Skeleton */}
            {loading && (
              <div
                className="border-t-2"
                style={{ borderColor: "var(--kb-border)" }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="py-5 px-4 border-b grid grid-cols-1 md:grid-cols-[126px_1fr] gap-4"
                    style={{ borderColor: "var(--kb-border-soft)" }}
                  >
                    <div className="space-y-2">
                      <div className="h-3.5 w-24 kb-skel" />
                      <div className="h-3 w-16 kb-skel" />
                    </div>
                    <div className="space-y-2.5">
                      <div className="h-5 w-3/4 kb-skel" />
                      <div className="h-3.5 w-full kb-skel" />
                      <div className="flex gap-1.5">
                        <div className="h-5 w-16 kb-skel" />
                        <div className="h-5 w-14 kb-skel" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error State */}
            {!loading && error && (
              <div
                className="py-16 px-6 text-center border-2"
                style={{
                  borderColor: "var(--kb-border)",
                  backgroundColor: "var(--kb-bg-subtle)",
                }}
              >
                <p
                  className="font-mono-kb text-sm uppercase tracking-wider mb-4"
                  style={{ color: "var(--kb-ink-muted)" }}
                >
                  {t(
                    "无法加载知识库条目，请检查网络或重新登录。",
                    "Failed to load notes from the private proxy.",
                  )}
                </p>
                <button
                  type="button"
                  onClick={loadPosts}
                  className="kb-btn-outline px-4 py-2 text-xs font-mono-kb font-bold uppercase tracking-wider cursor-pointer"
                >
                  {t("重试加载", "RETRY")}
                </button>
              </div>
            )}

            {/* Empty State */}
            {!loading &&
              !error &&
              (viewMode === "graph"
                ? yearTagFilteredPosts.length === 0
                : filteredPosts.length === 0) && (
              <div
                className="py-16 px-6 text-center border-2 border-dashed anim-stream-switch"
                style={{ borderColor: "var(--kb-border-mid)" }}
              >
                <p
                  className="font-mono-kb text-sm uppercase tracking-wider mb-3"
                  style={{ color: "var(--kb-ink-muted)" }}
                >
                  {t("未找到匹配的知识条目", "NO MATCHING ENTRIES")}
                </p>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="kb-btn-outline px-4 py-2 text-xs font-mono-kb font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {t("重置全部筛选", "RESET ALL FILTERS")}
                  </button>
                )}
              </div>
            )}

            {/* 01. Index View */}
            {!loading &&
              !error &&
              filteredPosts.length > 0 &&
              viewMode === "index" && (
                <div>
                  {/* Latest Entry Featured Card */}
                  {showFeatured && (() => {
                    const latest = paginatedPosts[0];
                    const plainExcerpt = stripExcerptMarkdown(latest.excerpt);
                    return (
                      <article
                        key={`featured-${streamKey}`}
                        onClick={() => navigate(`/blog/${latest.slug}`)}
                        className="swiss-featured anim-stream-switch p-5 sm:p-6 mb-6 cursor-pointer"
                      >
                        <div
                          className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b font-mono-kb text-xs"
                          style={{ borderColor: "var(--kb-border-soft)" }}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="px-2 py-0.5 font-bold uppercase tracking-wider"
                              style={{
                                backgroundColor: "var(--kb-inv-bg)",
                                color: "var(--kb-inv-ink)",
                              }}
                            >
                              {t("最新条目", "LATEST")}
                            </span>
                            <span style={{ color: "var(--kb-ink-muted)" }}>
                              NO. 01
                            </span>
                          </div>
                          <div
                            className="flex items-center gap-2"
                            style={{ color: "var(--kb-ink-muted)" }}
                          >
                            <time
                              dateTime={latest.metadata.date}
                              className="tabular-nums"
                            >
                              {formatCatalogDate(latest.metadata.date)}
                            </time>
                            <span>·</span>
                            <span>
                              {t(
                                `约 ${latest.readingTimeMin} 分钟`,
                                `${latest.readingTimeMin} MIN`,
                              )}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <Link
                              to={`/blog/${latest.slug}`}
                              onClick={(e) => e.stopPropagation()}
                              className="block"
                            >
                              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight leading-snug mb-2">
                                {latest.metadata.title}
                              </h2>
                            </Link>
                            {plainExcerpt && (
                              <p
                                className="text-sm leading-relaxed mb-4 max-w-2xl line-clamp-3"
                                style={{ color: "var(--kb-ink-muted)" }}
                              >
                                {plainExcerpt}
                              </p>
                            )}
                            {latest.metadata.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1.5">
                                {latest.metadata.tags.map((tg) => (
                                  <button
                                    key={tg}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleToggleTag(tg);
                                    }}
                                    className="font-mono-kb text-xs px-2 py-0.5 border cursor-pointer"
                                    style={{
                                      borderColor: "var(--kb-border)",
                                      color: "var(--kb-ink)",
                                    }}
                                  >
                                    #{tg}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                          <div
                            className="hidden sm:flex items-center justify-center w-10 h-10 border-2 shrink-0 swiss-arrow transition-transform"
                            style={{ borderColor: "var(--kb-border)" }}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </article>
                    );
                  })()}

                  {/* Catalog Header */}
                  {(!showFeatured || paginatedPosts.length > 1) && (
                    <>
                      <div
                        className="px-3 sm:px-5 py-2 border-y-2 flex items-center justify-between font-mono-kb text-xs uppercase tracking-wider"
                        style={{
                          borderColor: "var(--kb-border)",
                          backgroundColor: "var(--kb-bg-subtle)",
                          color: "var(--kb-ink-muted)",
                        }}
                      >
                        <span>
                          {showFeatured
                            ? t("索引目录 · 其余条目", "CATALOG STREAM")
                            : t("索引目录", "CATALOG INDEX")}
                        </span>
                        <span className="tabular-nums">
                          {filteredPosts.length} {t("条", "ITEMS")}
                        </span>
                      </div>

                      <div>
                        {(showFeatured
                          ? paginatedPosts.slice(1)
                          : paginatedPosts
                        ).map((post, i) => {
                          const globalNum =
                            startIdx + (showFeatured ? i + 2 : i + 1);
                          return renderCatalogRow(
                            post,
                            String(globalNum).padStart(2, "0"),
                            i,
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* Swiss Square Pagination */}
                  {totalPages > 1 && (
                    <nav className="mt-8 flex items-center justify-between gap-2 font-mono-kb text-xs">
                      <button
                        type="button"
                        onClick={() => handlePageChange(safePage - 1)}
                        disabled={safePage <= 1}
                        className="kb-btn-outline px-3 py-2 inline-flex items-center gap-1.5 font-bold uppercase cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">
                          {t("上一页", "PREV")}
                        </span>
                      </button>

                      <div className="flex items-center gap-1.5 flex-wrap justify-center">
                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1,
                        ).map((pNum) => (
                          <button
                            key={pNum}
                            type="button"
                            onClick={() => handlePageChange(pNum)}
                            className="w-9 h-9 border-2 font-bold tabular-nums transition-colors cursor-pointer"
                            style={{
                              borderColor: "var(--kb-border)",
                              backgroundColor:
                                pNum === safePage
                                  ? "var(--kb-inv-bg)"
                                  : "transparent",
                              color:
                                pNum === safePage
                                  ? "var(--kb-inv-ink)"
                                  : "var(--kb-ink)",
                            }}
                          >
                            {String(pNum).padStart(2, "0")}
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => handlePageChange(safePage + 1)}
                        disabled={safePage >= totalPages}
                        className="kb-btn-outline px-3 py-2 inline-flex items-center gap-1.5 font-bold uppercase cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <span className="hidden sm:inline">
                          {t("下一页", "NEXT")}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </nav>
                  )}
                </div>
              )}

            {/* 02. Year Archive View */}
            {!loading &&
              !error &&
              filteredPosts.length > 0 &&
              viewMode === "year" && (
                <div
                  key={`year-${streamKey}`}
                  className="space-y-10 anim-stream-switch"
                >
                  {postsByYear.map(([year, posts]) => (
                    <section
                      key={year}
                      className="border-t-2 pt-5"
                      style={{ borderColor: "var(--kb-border)" }}
                    >
                      <div className="flex items-baseline justify-between mb-4 px-1">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight tabular-nums">
                          {year}
                        </h2>
                        <span
                          className="font-mono-kb text-xs uppercase tracking-wider"
                          style={{ color: "var(--kb-ink-muted)" }}
                        >
                          {String(posts.length).padStart(2, "0")}{" "}
                          {t("篇归档", "ENTRIES")}
                        </span>
                      </div>
                      <div
                        className="border-t"
                        style={{ borderColor: "var(--kb-border-soft)" }}
                      >
                        {posts.map((post, i) =>
                          renderCatalogRow(
                            post,
                            String(i + 1).padStart(2, "0"),
                            i,
                          ),
                        )}
                      </div>
                    </section>
                  ))}
                </div>
              )}

            {/* 03. Topics View */}
            {!loading &&
              !error &&
              filteredPosts.length > 0 &&
              viewMode === "tag" && (
                <div
                  key={`tag-${streamKey}`}
                  className="space-y-10 anim-stream-switch"
                >
                  {postsByTag.map(([tag, posts]) => (
                    <section
                      key={tag}
                      className="border-t-2 pt-4"
                      style={{ borderColor: "var(--kb-border)" }}
                    >
                      <div className="flex items-center justify-between mb-3 px-1">
                        <h2 className="font-mono-kb text-lg font-bold uppercase tracking-wider">
                          #{tag}
                        </h2>
                        <span
                          className="font-mono-kb text-xs"
                          style={{ color: "var(--kb-ink-muted)" }}
                        >
                          {String(posts.length).padStart(2, "0")}{" "}
                          {t("篇", "NOTES")}
                        </span>
                      </div>
                      <div
                        className="border-t"
                        style={{ borderColor: "var(--kb-border-soft)" }}
                      >
                        {posts.map((post, i) =>
                          renderCatalogRow(
                            post,
                            String(i + 1).padStart(2, "0"),
                            i,
                          ),
                        )}
                      </div>
                    </section>
                  ))}
                </div>
              )}

            {/* 04. Knowledge Graph View */}
            {!loading &&
              !error &&
              yearTagFilteredPosts.length > 0 &&
              viewMode === "graph" && (
                <KnowledgeGraph
                  posts={yearTagFilteredPosts}
                  searchQuery={searchQuery}
                  defaultTagLabel={defaultTag}
                  onSelectTagFilter={handleToggleTag}
                />
              )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

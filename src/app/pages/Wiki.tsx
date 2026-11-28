import {
  ArrowLeft,
  ArrowRight,
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
import {
  getAllWiki,
  type WikiCategory,
  type WikiEntry,
} from "../utils/wiki";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../components/Footer";

const CATEGORY_ORDER: WikiCategory[] = ["term", "technique", "solution"];

function formatWikiDate(rawDate: string): string {
  const m = rawDate.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[1]}.${m[2]}.${m[3]}`;
  return rawDate;
}

export default function Wiki() {
  const { t } = useLanguage();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [entries, setEntries] = useState<WikiEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<WikiCategory | "all">(
    () => {
      const cat = searchParams.get("category");
      return cat === "term" || cat === "technique" || cat === "solution"
        ? cat
        : "all";
    },
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(
    () => searchParams.get("tag") || null,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [streamKey, setStreamKey] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categoryLabel = useCallback(
    (cat: WikiCategory) => {
      switch (cat) {
        case "term":
          return t("术语", "Term");
        case "technique":
          return t("技术", "Technique");
        case "solution":
          return t("方案", "Solution");
      }
    },
    [t],
  );

  useEffect(() => {
    const cat = searchParams.get("category");
    setSelectedCategory(
      cat === "term" || cat === "technique" || cat === "solution" ? cat : "all",
    );
    setSelectedTag(searchParams.get("tag") || null);
  }, [searchParams]);

  const loadWiki = useCallback(() => {
    if (!token) return;
    let cancelled = false;
    setLoading(true);
    setError(false);

    getAllWiki(token)
      .then((data) => {
        if (cancelled) return;
        setEntries(data);
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
  }, [token]);

  useEffect(() => {
    return loadWiki();
  }, [loadWiki]);

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

  const categoryCounts = useMemo(() => {
    const counts: Record<WikiCategory, number> = {
      term: 0,
      technique: 0,
      solution: 0,
    };
    entries.forEach((e) => {
      counts[e.category] += 1;
    });
    return counts;
  }, [entries]);

  const activeCategoriesCount = useMemo(
    () => CATEGORY_ORDER.filter((c) => categoryCounts[c] > 0).length,
    [categoryCounts],
  );

  const latestUpdated = useMemo(() => {
    const dates = entries
      .map((e) => e.updated)
      .filter(Boolean)
      .sort((a, b) => b.localeCompare(a));
    return dates[0] ? formatWikiDate(dates[0]) : "—";
  }, [entries]);

  const allTags = useMemo(() => {
    const map = new Map<string, number>();
    entries.forEach((entry) => {
      entry.tags.forEach((tg) => map.set(tg, (map.get(tg) || 0) + 1));
    });
    return Array.from(map.entries()).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
    );
  }, [entries]);

  const filteredEntries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return entries.filter((entry) => {
      if (selectedCategory !== "all" && entry.category !== selectedCategory) {
        return false;
      }
      if (selectedTag && !entry.tags.includes(selectedTag)) {
        return false;
      }
      if (!q) return true;
      return (
        entry.title.toLowerCase().includes(q) ||
        entry.aliases.some((a) => a.toLowerCase().includes(q)) ||
        entry.tags.some((tg) => tg.toLowerCase().includes(q)) ||
        entry.summary.toLowerCase().includes(q) ||
        entry.content.toLowerCase().includes(q)
      );
    });
  }, [entries, selectedCategory, selectedTag, searchQuery]);

  const groupedEntries = useMemo(() => {
    return CATEGORY_ORDER.map((cat) => ({
      category: cat,
      items: filteredEntries.filter((e) => e.category === cat),
    })).filter((g) => g.items.length > 0);
  }, [filteredEntries]);

  const hasActiveFilters = Boolean(
    searchQuery.trim() || selectedCategory !== "all" || selectedTag !== null,
  );

  const syncUrlFilters = useCallback(
    (nextCat: WikiCategory | "all", nextTag: string | null) => {
      const params = new URLSearchParams();
      if (nextCat !== "all") params.set("category", nextCat);
      if (nextTag) params.set("tag", nextTag);
      setSearchParams(params, { replace: true });
    },
    [setSearchParams],
  );

  const handleSelectCategory = (cat: WikiCategory | "all") => {
    if (cat === selectedCategory) return;
    setSelectedCategory(cat);
    setStreamKey((k) => k + 1);
    syncUrlFilters(cat, selectedTag);
  };

  const handleToggleTag = (tag: string) => {
    const next = selectedTag === tag ? null : tag;
    setSelectedTag(next);
    setStreamKey((k) => k + 1);
    syncUrlFilters(selectedCategory, next);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedTag(null);
    setStreamKey((k) => k + 1);
    syncUrlFilters("all", null);
  };

  return (
    <div
      className="min-h-[calc(100vh-3rem)] flex flex-col"
      style={{ backgroundColor: "var(--kb-bg)", color: "var(--kb-ink)" }}
    >
      {/* Swiss Structural Masthead */}
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
                LUNE.LTD // {t("术语与方案百科", "TERMS & METHODS WIKI")}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              Wiki
            </h1>
          </div>

          <div className="flex items-end gap-3">
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
                  {t("词条", "ENTRIES")}
                </div>
                <div className="text-base font-bold tabular-nums">
                  {loading ? "—" : String(entries.length).padStart(2, "0")}
                </div>
              </div>
              <div
                className="px-4 py-2.5 border-r"
                style={{ borderColor: "var(--kb-border-soft)" }}
              >
                <div className="text-xs opacity-55 mb-0.5">
                  {t("分类", "CATEGORIES")}
                </div>
                <div className="text-base font-bold tabular-nums">
                  {loading
                    ? "—"
                    : String(activeCategoriesCount).padStart(2, "0")}
                </div>
              </div>
              <div className="px-4 py-2.5">
                <div className="text-xs opacity-55 mb-0.5">
                  {t("更新", "UPDATED")}
                </div>
                <div className="text-base font-bold tabular-nums">
                  {loading ? "—" : latestUpdated}
                </div>
              </div>
            </div>

            <Link
              to="/"
              className="kb-btn-outline px-4 py-2.5 inline-flex items-center gap-2 font-mono-kb text-xs font-bold uppercase tracking-wider shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("返回知识库", "Knowledge Base")}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Asymmetric 2-Column Swiss Grid */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[248px_1fr] lg:gap-10 min-h-full">
          {/* LEFT COLUMN */}
          <aside
            className="lg:border-r lg:pr-8"
            style={{ borderColor: "var(--kb-border-mid)" }}
          >
            <div className="py-5 lg:py-8 lg:sticky lg:top-12 space-y-6">
              {/* Category Stack */}
              <div>
                <div
                  className="font-mono-kb text-xs uppercase tracking-widest mb-2.5 font-bold"
                  style={{ color: "var(--kb-ink-faint)" }}
                >
                  {t("词条分类", "CATEGORIES")}
                </div>
                <div
                  className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 border-2"
                  style={{ borderColor: "var(--kb-border)" }}
                >
                  {(
                    [
                      ["all", "00", t("全部词条", "All"), entries.length],
                      ["term", "01", t("术语 Term", "Term"), categoryCounts.term],
                      [
                        "technique",
                        "02",
                        t("技术 Technique", "Technique"),
                        categoryCounts.technique,
                      ],
                      [
                        "solution",
                        "03",
                        t("方案 Solution", "Solution"),
                        categoryCounts.solution,
                      ],
                    ] as const
                  ).map(([cat, num, label, count], idx) => {
                    const active = selectedCategory === cat;
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
                        key={cat}
                        type="button"
                        onClick={() => handleSelectCategory(cat)}
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
                        <span className="truncate">{label}</span>
                        <span className="tabular-nums opacity-60">
                          {loading ? num : String(count).padStart(2, "0")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tags Directory */}
              {allTags.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-mono-kb text-xs uppercase tracking-widest font-bold"
                      style={{ color: "var(--kb-ink-faint)" }}
                    >
                      {t("标签索引", "TAGS")}
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
              )}
            </div>
          </aside>

          {/* RIGHT MAIN STREAM */}
          <main className="py-5 lg:py-8 lg:pb-12 min-w-0">
            {/* Search & Active Filter Chips */}
            <div className="mb-6 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-45 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t(
                    "检索词条、别名、摘要或正文…",
                    "Search title, aliases, summary, or content…",
                  )}
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
                    onClick={() => setSearchQuery("")}
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
                        `匹配 ${filteredEntries.length} 条`,
                        `${filteredEntries.length} MATCHED`,
                      )}
                      :
                    </span>
                    {selectedCategory !== "all" && (
                      <button
                        type="button"
                        onClick={() => handleSelectCategory("all")}
                        className="inline-flex items-center gap-1 px-2 py-0.5 border cursor-pointer"
                        style={{
                          borderColor: "var(--kb-border)",
                          backgroundColor: "var(--kb-inv-bg)",
                          color: "var(--kb-inv-ink)",
                        }}
                      >
                        <span>{categoryLabel(selectedCategory)}</span>
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
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="py-5 px-4 border-b space-y-2.5"
                    style={{ borderColor: "var(--kb-border-soft)" }}
                  >
                    <div className="flex gap-2">
                      <div className="h-4 w-16 kb-skel" />
                      <div className="h-4 w-48 kb-skel" />
                    </div>
                    <div className="h-5 w-2/3 kb-skel" />
                    <div className="h-3.5 w-full kb-skel" />
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
                    "无法加载 Wiki 词条，请检查网络、Worker 路由或重新登录。",
                    "Failed to load wiki entries from the private proxy.",
                  )}
                </p>
                <button
                  type="button"
                  onClick={loadWiki}
                  className="kb-btn-outline px-4 py-2 text-xs font-mono-kb font-bold uppercase tracking-wider cursor-pointer"
                >
                  {t("重试加载", "RETRY")}
                </button>
              </div>
            )}

            {/* Empty Repository State */}
            {!loading && !error && entries.length === 0 && (
              <div
                className="py-16 px-6 text-center border-2 border-dashed anim-stream-switch"
                style={{ borderColor: "var(--kb-border-mid)" }}
              >
                <p
                  className="font-mono-kb text-sm uppercase tracking-wider mb-2"
                  style={{ color: "var(--kb-ink)" }}
                >
                  {t("暂无 Wiki 词条", "NO WIKI ENTRIES YET")}
                </p>
                <p
                  className="text-sm max-w-md mx-auto"
                  style={{ color: "var(--kb-ink-muted)" }}
                >
                  {t(
                    "请在 notes 仓库的 wiki/ 目录中添加 .md 词条文件（格式说明见 notes/wiki/README.md）。",
                    "Add .md entry files inside notes/wiki/ in your private notes repository (see notes/wiki/README.md).",
                  )}
                </p>
              </div>
            )}

            {/* Filtered Empty State */}
            {!loading &&
              !error &&
              entries.length > 0 &&
              filteredEntries.length === 0 && (
                <div
                  className="py-16 px-6 text-center border-2 border-dashed anim-stream-switch"
                  style={{ borderColor: "var(--kb-border-mid)" }}
                >
                  <p
                    className="font-mono-kb text-sm uppercase tracking-wider mb-3"
                    style={{ color: "var(--kb-ink-muted)" }}
                  >
                    {t("未找到匹配的 Wiki 词条", "NO MATCHING WIKI ENTRIES")}
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

            {/* Grouped Entries by Category */}
            {!loading && !error && groupedEntries.length > 0 && (
              <div
                key={`wiki-${streamKey}`}
                className="space-y-10 anim-stream-switch"
              >
                {groupedEntries.map(({ category, items }) => (
                  <section
                    key={category}
                    className="border-t-2 pt-5"
                    style={{ borderColor: "var(--kb-border)" }}
                  >
                    <div className="flex items-baseline justify-between mb-4 px-1">
                      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                        {categoryLabel(category)}
                      </h2>
                      <span
                        className="font-mono-kb text-xs uppercase tracking-wider tabular-nums"
                        style={{ color: "var(--kb-ink-muted)" }}
                      >
                        {String(items.length).padStart(2, "0")}{" "}
                        {t("条", "ENTRIES")}
                      </span>
                    </div>

                    <div
                      className="border-t"
                      style={{ borderColor: "var(--kb-border-soft)" }}
                    >
                      {items.map((entry, idx) => {
                        const staggerStyle = {
                          "--stagger": `${Math.min(idx, 10) * 24}ms`,
                        } as CSSProperties;
                        return (
                          <article
                            key={entry.slug}
                            onClick={() => navigate(`/wiki/${entry.slug}`)}
                            style={staggerStyle}
                            className="swiss-row anim-row-stagger py-5 px-3 sm:px-5 grid grid-cols-1 md:grid-cols-[1fr_24px] gap-3 items-start cursor-pointer"
                          >
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <span
                                  className="font-mono-kb text-xs uppercase tracking-wider px-2 py-0.5 border font-bold"
                                  style={{
                                    borderColor: "var(--kb-border)",
                                    color: "var(--kb-ink)",
                                  }}
                                >
                                  {categoryLabel(entry.category)}
                                </span>
                                {entry.aliases.length > 0 && (
                                  <span
                                    className="font-mono-kb text-xs truncate"
                                    style={{ color: "var(--kb-ink-muted)" }}
                                  >
                                    {entry.aliases.join(" · ")}
                                  </span>
                                )}
                                {entry.updated && (
                                  <span
                                    className="font-mono-kb text-xs tabular-nums ml-auto"
                                    style={{ color: "var(--kb-ink-faint)" }}
                                  >
                                    {formatWikiDate(entry.updated)}
                                  </span>
                                )}
                              </div>

                              <Link
                                to={`/wiki/${entry.slug}`}
                                onClick={(e) => e.stopPropagation()}
                                className="block"
                              >
                                <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight leading-snug mb-1.5">
                                  {entry.title}
                                </h3>
                              </Link>

                              {entry.summary && (
                                <p
                                  className="text-sm leading-relaxed mb-3 line-clamp-2"
                                  style={{ color: "var(--kb-ink-muted)" }}
                                >
                                  {entry.summary}
                                </p>
                              )}

                              {entry.tags.length > 0 && (
                                <div className="flex flex-wrap items-center gap-1.5">
                                  {entry.tags.map((tg) => {
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

                            <div
                              className="hidden md:flex justify-end pt-1 swiss-arrow opacity-35 transition-all"
                              style={{ color: "var(--kb-ink)" }}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

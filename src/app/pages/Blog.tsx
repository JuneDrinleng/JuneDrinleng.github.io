import {
  ArrowLeft,
  Calendar,
  Tag,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Bookmark,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router";
import { useState, useMemo, useCallback } from "react";
import { getAllPosts, Post } from "../utils/posts";
import { useLanguage } from "../contexts/LanguageContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const POSTS_PER_PAGE = 12;
const GRID_CLASSES =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6";

type ViewMode = "timeline" | "tag" | "year";

export default function Blog() {
  const { language, t } = useLanguage();
  const allPosts = getAllPosts(language);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("timeline");
  const defaultTag = t("未分类", "Uncategorized");

  // 搜索过滤
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return allPosts;

    const query = searchQuery.toLowerCase();
    return allPosts.filter((post) => {
      const titleMatch = post.metadata.title.toLowerCase().includes(query);
      const excerptMatch = post.excerpt.toLowerCase().includes(query);
      const tagsMatch = post.metadata.tags?.some((tag) =>
        tag.toLowerCase().includes(query),
      );
      return titleMatch || excerptMatch || tagsMatch;
    });
  }, [searchQuery, allPosts]);

  // 分页
  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE,
  );

  // 按标签分组
  const postsByTag = useMemo(() => {
    const tagMap: Record<string, typeof filteredPosts> = {};
    filteredPosts.forEach((post) => {
      const tags =
        post.metadata.tags && post.metadata.tags.length > 0
          ? post.metadata.tags
          : [defaultTag];
      tags.forEach((tag) => {
        if (!tagMap[tag]) tagMap[tag] = [];
        tagMap[tag].push(post);
      });
    });
    return Object.entries(tagMap).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredPosts, defaultTag]);

  // 按年分组
  const postsByYear = useMemo(() => {
    const yearMap: Record<string, typeof filteredPosts> = {};
    filteredPosts.forEach((post) => {
      const year = new Date(post.metadata.date).getFullYear().toString();
      if (!yearMap[year]) yearMap[year] = [];
      yearMap[year].push(post);
    });
    return Object.entries(yearMap).sort(([a], [b]) => Number(b) - Number(a));
  }, [filteredPosts]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    if (mode === viewMode) return;
    setViewMode(mode);
    setCurrentPage(1);
  };

  const dateLocale = language === "zh" ? "zh-CN" : "en-US";

  const renderPostCard = useCallback(
    (post: Post, headingLevel: "h2" | "h3" = "h2", showTags = true) => {
      const HeadingTag = headingLevel;
      return (
        <article
          key={post.slug}
          className="border-2 border-black dark:border-neutral-100 p-4 sm:p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all flex flex-col"
        >
          <div className="mb-3">
            <Link to={`/blog/${post.slug}`}>
              <HeadingTag className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-2 hover:opacity-60 transition-opacity line-clamp-2">
                {post.metadata.title}
              </HeadingTag>
            </Link>
            <div className="flex flex-wrap items-center gap-2 text-xs opacity-60">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={post.metadata.date}>
                  {new Date(post.metadata.date).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              {showTags &&
                post.metadata.tags &&
                post.metadata.tags.length > 0 && (
                  <div className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    <div className="flex gap-1 flex-wrap">
                      {post.metadata.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-black dark:border-neutral-100 px-1.5 py-0.5 text-xs uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
          <div className="prose prose-sm dark:prose-invert mb-4 opacity-80 leading-relaxed line-clamp-4 flex-grow">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.excerpt}
            </ReactMarkdown>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 border-2 border-black dark:border-neutral-100 px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase tracking-wider text-xs font-bold mt-auto self-start"
          >
            {t("阅读全文 →", "Read More →")}
          </Link>
        </article>
      );
    },
    [dateLocale, t],
  );

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-neutral-100">
      {/* Header */}
      <header className="border-b-4 border-black dark:border-neutral-100">
        <div className="max-w-6xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">
              {t("返回导航", "Back to Home")}
            </span>
          </Link>
          <div className="text-center mt-6 sm:mt-8">
            <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight mb-2">
              {t("博客", "Blog")}
            </h1>
            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-60">
              Technical Writing & Thoughts
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-6 sm:mt-8 relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
              <input
                type="text"
                placeholder={t(
                  "搜索文章标题、内容或标签...",
                  "Search titles, content or tags...",
                )}
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full border-2 border-black dark:border-neutral-100 bg-white dark:bg-neutral-800 px-12 py-3 text-sm sm:text-base focus:outline-none focus:bg-gray-50 dark:focus:bg-neutral-700"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-60 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm mt-2 opacity-60">
                {t(
                  `找到 ${filteredPosts.length} 篇相关文章`,
                  `Found ${filteredPosts.length} related articles`,
                )}
              </p>
            )}
          </div>
          {/* View Mode Buttons */}
          <div className="max-w-2xl mx-auto mt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => handleViewModeChange("timeline")}
              className={`inline-flex items-center gap-1.5 border-2 border-black dark:border-neutral-100 px-3 sm:px-4 py-1.5 sm:py-2 uppercase tracking-wider text-xs sm:text-sm font-bold transition-colors ${
                viewMode === "timeline"
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              }`}
            >
              <Clock className="w-4 h-4" />
              {t("时间线", "Timeline")}
            </button>
            <button
              onClick={() => handleViewModeChange("tag")}
              className={`inline-flex items-center gap-1.5 border-2 border-black dark:border-neutral-100 px-3 sm:px-4 py-1.5 sm:py-2 uppercase tracking-wider text-xs sm:text-sm font-bold transition-colors ${
                viewMode === "tag"
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              }`}
            >
              <Bookmark className="w-4 h-4" />
              {t("按标签", "Tag")}
            </button>
            <button
              onClick={() => handleViewModeChange("year")}
              className={`inline-flex items-center gap-1.5 border-2 border-black dark:border-neutral-100 px-3 sm:px-4 py-1.5 sm:py-2 uppercase tracking-wider text-xs sm:text-sm font-bold transition-colors ${
                viewMode === "year"
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              }`}
            >
              <CalendarDays className="w-4 h-4" />
              {t("按年份", "Year")}
            </button>
          </div>
        </div>
      </header>

      {/* Blog Posts List */}
      <main className="max-w-6xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        {/* Timeline View */}
        {viewMode === "timeline" && (
          <div className="blog-view-transition">
            <div className={GRID_CLASSES}>
              {paginatedPosts.map((post) => renderPostCard(post))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="mt-8 sm:mt-12 flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
                <button
                  onClick={() => handlePageChange(safePage - 1)}
                  disabled={safePage <= 1}
                  className="inline-flex items-center gap-1 border-2 border-black dark:border-neutral-100 px-3 sm:px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase tracking-wider text-xs sm:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {t("上一页", "Prev")}
                  </span>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`border-2 border-black dark:border-neutral-100 w-10 h-10 text-sm font-bold transition-colors ${
                        page === safePage
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
                <button
                  onClick={() => handlePageChange(safePage + 1)}
                  disabled={safePage >= totalPages}
                  className="inline-flex items-center gap-1 border-2 border-black dark:border-neutral-100 px-3 sm:px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase tracking-wider text-xs sm:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current"
                >
                  <span className="hidden sm:inline">
                    {t("下一页", "Next")}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </nav>
            )}
          </div>
        )}

        {/* Tag View */}
        {viewMode === "tag" && (
          <div className="blog-view-transition space-y-8 sm:space-y-10">
            {postsByTag.map(([tag, posts]) => (
              <section key={tag}>
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-4 sm:mb-6 border-b-2 border-black dark:border-neutral-100 pb-2 inline-flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  {tag}
                  <span className="text-sm font-normal opacity-60">
                    ({posts.length})
                  </span>
                </h2>
                <div className={GRID_CLASSES}>
                  {posts.map((post) => renderPostCard(post, "h3", false))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Year View */}
        {viewMode === "year" && (
          <div className="blog-view-transition space-y-8 sm:space-y-10">
            {postsByYear.map(([year, posts]) => (
              <section key={year}>
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-4 sm:mb-6 border-b-2 border-black dark:border-neutral-100 pb-2 inline-flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  {year}
                  <span className="text-sm font-normal opacity-60">
                    ({posts.length})
                  </span>
                </h2>
                <div className={GRID_CLASSES}>
                  {posts.map((post) => renderPostCard(post, "h3"))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black dark:border-neutral-100 mt-8 sm:mt-12">
        <div className="max-w-6xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
            © 2023 LUNE. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

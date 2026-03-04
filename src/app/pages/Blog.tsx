import { ArrowLeft, Calendar, Tag, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { useState, useMemo } from 'react';
import { getAllPosts } from '../utils/posts';
import { useLanguage } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const POSTS_PER_PAGE = 10;

export default function Blog() {
  const { language, t } = useLanguage();
  const allPosts = getAllPosts(language);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // 搜索过滤
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return allPosts;

    const query = searchQuery.toLowerCase();
    return allPosts.filter(post => {
      const titleMatch = post.metadata.title.toLowerCase().includes(query);
      const excerptMatch = post.excerpt.toLowerCase().includes(query);
      const tagsMatch = post.metadata.tags?.some(tag => tag.toLowerCase().includes(query));
      return titleMatch || excerptMatch || tagsMatch;
    });
  }, [searchQuery, allPosts]);

  // 分页
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const dateLocale = language === 'zh' ? 'zh-CN' : 'en-US';

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-neutral-100">
      {/* Header */}
      <header className="border-b-4 border-black dark:border-neutral-100">
        <div className="max-w-6xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
          <Link to="/" className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity mb-6 sm:mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">{t('返回导航', 'Back to Home')}</span>
          </Link>
          <div className="text-center mt-6 sm:mt-8">
            <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight mb-2">{t('博客', 'Blog')}</h1>
            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-60">Technical Writing & Thoughts</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-6 sm:mt-8 relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
              <input
                type="text"
                placeholder={t('搜索文章标题、内容或标签...', 'Search titles, content or tags...')}
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full border-2 border-black dark:border-neutral-100 bg-white dark:bg-neutral-800 px-12 py-3 text-sm sm:text-base focus:outline-none focus:bg-gray-50 dark:focus:bg-neutral-700"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-60 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm mt-2 opacity-60">
                {t(`找到 ${filteredPosts.length} 篇相关文章`, `Found ${filteredPosts.length} related articles`)}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Blog Posts List */}
      <main className="max-w-6xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div className="space-y-6 sm:space-y-8">
          {paginatedPosts.map((post) => (
            <article key={post.slug} className="border-2 border-black dark:border-neutral-100 p-4 sm:p-8 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all">
              <div className="mb-4">
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-tight mb-3 hover:opacity-60 transition-opacity">
                    {post.metadata.title}
                  </h2>
                </Link>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm opacity-60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.metadata.date}>
                      {new Date(post.metadata.date).toLocaleDateString(dateLocale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      <div className="flex gap-2">
                        {post.metadata.tags.map((tag) => (
                          <span key={tag} className="border border-black dark:border-neutral-100 px-2 py-0.5 text-xs uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="prose prose-sm sm:prose-lg dark:prose-invert mb-4 sm:mb-6 opacity-80 leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.excerpt}</ReactMarkdown>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 border-2 border-black dark:border-neutral-100 px-4 sm:px-6 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase tracking-wider text-xs sm:text-sm font-bold"
              >
                {t('阅读全文 →', 'Read More →')}
              </Link>
            </article>
          ))}
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
              <span className="hidden sm:inline">{t('上一页', 'Prev')}</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`border-2 border-black dark:border-neutral-100 w-10 h-10 text-sm font-bold transition-colors ${
                  page === safePage
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(safePage + 1)}
              disabled={safePage >= totalPages}
              className="inline-flex items-center gap-1 border-2 border-black dark:border-neutral-100 px-3 sm:px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase tracking-wider text-xs sm:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current"
            >
              <span className="hidden sm:inline">{t('下一页', 'Next')}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black dark:border-neutral-100 mt-8 sm:mt-12">
        <div className="max-w-6xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
            © 2025 LUNE. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

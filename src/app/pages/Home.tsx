import { Search, X } from "lucide-react";
import { Link } from "react-router";
import { useState, useMemo } from "react";
import { getAllPosts } from "../utils/posts";
import { useLanguage } from "../contexts/LanguageContext";
import BlogSchematic from "../components/BlogSchematic";
import VisualSPTMiniSchematic from "../components/VisualSPTMiniSchematic";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { language, t } = useLanguage();
  const allPosts = getAllPosts(language);

  const featuredProducts = [
    {
      title: "Blog",
      url: "/blog",
      description: t(
        "分享技术见解、产品思考与创作心得，记录成长与探索的旅程",
        "Sharing technical insights, product thinking and creative experiences, documenting growth and exploration",
      ),
      schematic: <BlogSchematic />,
    },
    {
      title: "visualSPT",
      url: "/visualspt",
      description: t(
        "强大的桌面端可视化工具，提升工作效率，优化数据展示体验",
        "Powerful desktop visualization tool to boost productivity and optimize data presentation",
      ),
      schematic: <VisualSPTMiniSchematic />,
    },
  ];

  // 搜索逻辑
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

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

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-neutral-100">
      {/* Header */}
      <header className="border-b-4 border-black dark:border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
          <Link to="/" className="block text-center mb-6">
            <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight mb-2">
              LUNE
            </h1>
            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-60">
              SPTer's Home
            </p>
          </Link>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
              <input
                type="text"
                placeholder={t("搜索博客/标签...", "Search blog/tag...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-2 border-black dark:border-neutral-100 bg-white dark:bg-neutral-800 px-12 py-3 text-sm sm:text-base focus:outline-none focus:bg-gray-50 dark:focus:bg-neutral-700"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-60 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 border-2 border-black dark:border-neutral-100 bg-white dark:bg-neutral-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] max-h-96 overflow-y-auto z-50">
                {searchResults.length > 0 ? (
                  <div className="divide-y-2 divide-black dark:divide-neutral-100">
                    {searchResults.map((post) => (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className="block p-4 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                        onClick={() => setSearchQuery("")}
                      >
                        <h3 className="font-bold uppercase tracking-tight mb-1">
                          {post.metadata.title}
                        </h3>
                        <p className="text-sm opacity-60 mb-2 line-clamp-2">
                          {post.excerpt}
                        </p>
                        {post.metadata.tags &&
                          post.metadata.tags.length > 0 && (
                            <div className="flex gap-2 flex-wrap">
                              {post.metadata.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="border border-black dark:border-neutral-100 px-2 py-0.5 text-xs uppercase"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center opacity-60">
                    <p className="uppercase tracking-wider text-sm">
                      {t("未找到结果", "No results found")}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Featured Products Section */}
      <section className="bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-2">
              {t("探索", "Explore")}
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
              {t("选择你的需要", "Select Your Need")}
            </p>
          </div>

          {/* 产品卡片布局：Blog 和 visualSPT 并排等大 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.title}
                to={product.url}
                className="block group"
              >
                <div className="border-2 border-black dark:border-neutral-100 overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-200 h-full flex flex-col">
                  <div className="relative overflow-hidden bg-gray-100 dark:bg-neutral-800 h-48 sm:h-64">
                    {product.schematic}
                  </div>
                  <div className="p-4 sm:p-6 bg-white dark:bg-neutral-900 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2 sm:mb-3">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed opacity-70 flex-1">
                      {product.description}
                    </p>
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t-2 border-black dark:border-neutral-100">
                      <span className="text-xs uppercase tracking-wider font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                        {t("了解更多 →", "Learn More →")}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black dark:border-neutral-100 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
            © 2023 LUNE. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

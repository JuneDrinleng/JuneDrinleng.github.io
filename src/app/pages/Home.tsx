import { Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState, useMemo } from "react";
import { getAllPosts } from "../utils/posts";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const allPosts = getAllPosts();

  const featuredProducts = [
    {
      title: "Blog",
      url: "/blog",
      description: "分享技术见解、产品思考与创作心得，记录成长与探索的旅程",
      imageUrl:
        "https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img6d4c5c7ddb0aa6fa7442f18bef159325.png",
    },
    {
      title: "visualSPT",
      url: "/visualspt",
      description: "强大的桌面端可视化工具，提升工作效率，优化数据展示体验",
      imageUrl:
        "https://images.unsplash.com/photo-1764557222706-a8b967702853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwc29mdHdhcmUlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzI1MTY4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Poop",
      url: "/focus-timer",
      description:
        "专为移动端设计的专注打卡应用，帮助你养成良好习惯，提升专注力",
      imageUrl:
        "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2N1cyUyMHRpbWVyJTIwcHJvZHVjdGl2aXR5JTIwbW9iaWxlfGVufDF8fHx8MTc3MjUxNjg3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
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
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link to="/" className="block text-center mb-6">
            <h1 className="text-5xl font-bold uppercase tracking-tight mb-2">
              June's Navigator
            </h1>
            <p className="text-sm uppercase tracking-widest opacity-60">
              Homepage Navigator
            </p>
          </Link>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
              <input
                type="text"
                placeholder="searching the blog/tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-2 border-black px-12 py-3 focus:outline-none focus:bg-gray-50"
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
              <div className="absolute top-full left-0 right-0 mt-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-h-96 overflow-y-auto z-50">
                {searchResults.length > 0 ? (
                  <div className="divide-y-2 divide-black">
                    {searchResults.map((post) => (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className="block p-4 hover:bg-gray-50 transition-colors"
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
                                  className="border border-black px-2 py-0.5 text-xs uppercase"
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
                      Failed to find
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Featured Products Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">
              Featured Products
            </h2>
            <p className="text-sm uppercase tracking-wider opacity-60">
              Select Your Need
            </p>
          </div>

          {/* 优化后的产品卡片布局：左博客，右上visualSPT，右下Poop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 左侧 Blog 卡片 - 占满整列高度 */}
            <Link to={featuredProducts[0].url} className="block group">
              <div className="border-2 border-black overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full flex flex-col">
                <div className="relative overflow-hidden bg-gray-100 flex-1 min-h-64">
                  <img
                    src={featuredProducts[0].imageUrl}
                    alt={featuredProducts[0].title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white flex flex-col">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">
                    {featuredProducts[0].title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-70">
                    {featuredProducts[0].description}
                  </p>
                  <div className="mt-4 pt-4 border-t-2 border-black">
                    <span className="text-xs uppercase tracking-wider font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                      了解更多 →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* 右侧两个卡片 */}
            <div className="flex flex-col gap-6">
              {/* 右上 visualSPT */}
              <Link to={featuredProducts[1].url} className="block group flex-1">
                <div className="border-2 border-black overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full flex flex-col">
                  <div className="relative overflow-hidden bg-gray-100 h-48">
                    <img
                      src={featuredProducts[1].imageUrl}
                      alt={featuredProducts[1].title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">
                      {featuredProducts[1].title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-70 flex-1">
                      {featuredProducts[1].description}
                    </p>
                    <div className="mt-4 pt-4 border-t-2 border-black">
                      <span className="text-xs uppercase tracking-wider font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                        了解更多 →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* 右下 Poop */}
              <Link to={featuredProducts[2].url} className="block group flex-1">
                <div className="border-2 border-black overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full flex flex-col">
                  <div className="relative overflow-hidden bg-gray-100 h-48">
                    <img
                      src={featuredProducts[2].imageUrl}
                      alt={featuredProducts[2].title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">
                      {featuredProducts[2].title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-70 flex-1">
                      {featuredProducts[2].description}
                    </p>
                    <div className="mt-4 pt-4 border-t-2 border-black">
                      <span className="text-xs uppercase tracking-wider font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                        了解更多 →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm uppercase tracking-wider opacity-60">
            © 2023 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

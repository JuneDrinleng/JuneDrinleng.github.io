import {
  ArrowLeft,
  Calendar,
  Tag,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { useRef, useMemo } from "react";
import { getPostBySlug, getAdjacentPosts } from "../utils/posts";
import { useLanguage } from "../contexts/LanguageContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import GiscusComments from "../components/GiscusComments";
import TableOfContents, {
  extractHeadings,
  slugify,
} from "../components/TableOfContents";
import { useMediaQuery } from "../hooks/useMediaQuery";

function getChildrenText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getChildrenText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return getChildrenText(
      (children as React.ReactElement<{ children?: React.ReactNode }>).props
        .children,
    );
  }
  return "";
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const post = slug ? getPostBySlug(slug, language) : undefined;
  const { prev, next } = slug
    ? getAdjacentPosts(slug, language)
    : { prev: undefined, next: undefined };
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const contentRef = useRef<HTMLDivElement>(null);

  const dateLocale = language === "zh" ? "zh-CN" : "en-US";

  const headings = useMemo(() => {
    if (!post) return [];
    return extractHeadings(post.content);
  }, [post]);

  const showComments = !!(post?.metadata.comments && slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-neutral-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {t("文章未找到", "Post Not Found")}
          </h1>
          <Link
            to="/blog"
            className="border-2 border-black dark:border-neutral-100 px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            {t("返回博客列表", "Back to Blog")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:min-h-0 lg:h-[calc(100vh-3rem)] bg-white dark:bg-neutral-900 text-black dark:text-neutral-100 lg:flex lg:flex-col">
      {/* Header */}
      <header className="border-b-4 border-black dark:border-neutral-100 shrink-0">
        <div className="max-w-4xl lg:max-w-none mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">
              {t("返回博客", "Back to Blog")}
            </span>
          </Link>
        </div>
      </header>

      {/* Content area: 3-column on desktop, single column on mobile */}
      <div className="lg:flex lg:flex-1 lg:min-h-0">
        {/* TOC Sidebar - desktop only */}
        {isDesktop && (
          <aside className="w-72 shrink-0 overflow-y-auto border-r border-black/10 dark:border-neutral-100/10 bg-gray-50/50 dark:bg-neutral-800/30">
            <TableOfContents headings={headings} contentRef={contentRef} />
          </aside>
        )}

        {/* Main content - scrollable on desktop */}
        <main ref={contentRef} className="flex-1 lg:overflow-y-auto">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            {/* Article Header */}
            <header className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b-2 border-black dark:border-neutral-100">
              <h1 className="text-2xl sm:text-5xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
                {post.metadata.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm">
                <div className="flex items-center gap-2 opacity-60">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.metadata.date}>
                    {new Date(post.metadata.date).toLocaleDateString(
                      dateLocale,
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </time>
                </div>

                {post.metadata.author && (
                  <div className="flex items-center gap-2 opacity-60">
                    <User className="w-4 h-4" />
                    <span>{post.metadata.author}</span>
                  </div>
                )}

                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 opacity-60" />
                    <div className="flex gap-2">
                      {post.metadata.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-black dark:border-neutral-100 px-3 py-1 text-xs uppercase font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  h2: ({ children }) => {
                    const id = slugify(getChildrenText(children));
                    return (
                      <h2
                        id={id}
                        className="text-3xl font-bold uppercase tracking-tight mt-12 mb-6 pb-3 border-b-2 border-black dark:border-neutral-100"
                      >
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children }) => {
                    const id = slugify(getChildrenText(children));
                    return (
                      <h3
                        id={id}
                        className="text-2xl font-bold uppercase tracking-tight mt-8 mb-4"
                      >
                        {children}
                      </h3>
                    );
                  },
                  h4: ({ children }) => {
                    const id = slugify(getChildrenText(children));
                    return (
                      <h4
                        id={id}
                        className="text-xl font-bold uppercase tracking-tight mt-6 mb-3"
                      >
                        {children}
                      </h4>
                    );
                  },
                  p: ({ children }) => (
                    <p className="mb-6 leading-relaxed text-lg opacity-90">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-6 space-y-2 list-none">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-6 space-y-2 list-decimal list-inside">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-black dark:bg-neutral-100 mt-2.5 flex-shrink-0"></span>
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  code: ({ className, children, ...props }) => {
                    const isInline = !className;
                    if (isInline) {
                      return (
                        <code
                          className="bg-gray-100 dark:bg-neutral-800 border border-black dark:border-neutral-600 px-2 py-1 text-sm font-mono"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="bg-gray-50 dark:bg-neutral-800 border-2 border-black dark:border-neutral-600 p-6 overflow-x-auto mb-6 font-mono text-sm">
                      {children}
                    </pre>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-black dark:border-neutral-100 pl-6 my-6 italic opacity-80">
                      {children}
                    </blockquote>
                  ),
                  img: ({ src, alt }) => (
                    <img
                      src={src}
                      alt={alt || ""}
                      loading="lazy"
                      className="border-2 border-black dark:border-neutral-600 my-8 max-w-full"
                    />
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="border-b-2 border-black dark:border-neutral-100 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Previous / Next Post Navigation */}
            <nav className="mt-12 pt-8 border-t-2 border-black dark:border-neutral-100">
              <h2 className="text-lg font-bold uppercase tracking-tight mb-6 opacity-60">
                {t("继续阅读", "Continue Reading")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prev ? (
                  <Link
                    to={`/blog/${prev.slug}`}
                    className="group border-2 border-black dark:border-neutral-100 p-4 sm:p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider opacity-60 group-hover:opacity-80">
                      <ChevronLeft className="w-4 h-4" />
                      <span>{t("上一篇", "Previous")}</span>
                    </div>
                    <p className="font-bold text-sm sm:text-base line-clamp-2">
                      {prev.metadata.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    to={`/blog/${next.slug}`}
                    className="group border-2 border-black dark:border-neutral-100 p-4 sm:p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-right"
                  >
                    <div className="flex items-center justify-end gap-2 mb-2 text-xs uppercase tracking-wider opacity-60 group-hover:opacity-80">
                      <span>{t("下一篇", "Next")}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <p className="font-bold text-sm sm:text-base line-clamp-2">
                      {next.metadata.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </nav>

            {/* Comments Section - mobile only (inline) */}
            {!isDesktop && showComments && <GiscusComments slug={slug!} />}
          </article>

          {/* Footer */}
          <footer className="border-t-2 border-black dark:border-neutral-100 mt-8 sm:mt-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
              <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60">
                © 2023 LUNE. All Rights Reserved
              </p>
            </div>
          </footer>
        </main>

        {/* Comments Sidebar - desktop only */}
        {isDesktop && showComments && (
          <aside className="w-96 shrink-0 overflow-y-auto border-l border-black/10 dark:border-neutral-100/10 bg-gray-50/50 dark:bg-neutral-800/30">
            <div className="p-6">
              <GiscusComments slug={slug!} sidebar />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

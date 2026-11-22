import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Github,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import {
  useRef,
  useMemo,
  useEffect,
  useState,
  isValidElement,
  type ReactNode,
  type ReactElement,
} from "react";
import { getPostAndAdjacent, type Post } from "../utils/posts";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import GiscusComments from "../components/GiscusComments";
import TableOfContents, {
  createSlugger,
  extractHeadings,
} from "../components/TableOfContents";
import Footer from "../components/Footer";
import { useMediaQuery } from "../hooks/useMediaQuery";

function getChildrenText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getChildrenText).join("");
  if (isValidElement<{ children?: ReactNode }>(children)) {
    return getChildrenText(children.props.children);
  }
  return "";
}

function SwissCodeBlock({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const codeEl = isValidElement<{ className?: string; children?: ReactNode }>(
    children,
  )
    ? (children as ReactElement<{ className?: string; children?: ReactNode }>)
    : null;

  const className = codeEl?.props.className || "";
  const langMatch = className.match(/language-([\w-]+)/);
  const lang = langMatch ? langMatch[1] : "code";
  const rawCode = getChildrenText(codeEl?.props.children ?? children).replace(
    /\n$/,
    "",
  );

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard
      .writeText(rawCode)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});
  };

  return (
    <div
      className="my-6 border-2 overflow-hidden"
      style={{ borderColor: "var(--kb-border)" }}
    >
      <div
        className="px-4 py-2 border-b flex items-center justify-between font-mono-kb text-xs"
        style={{
          backgroundColor: "var(--kb-code-head)",
          borderColor: "var(--kb-border-soft)",
        }}
      >
        <span
          className="uppercase font-bold tracking-wider"
          style={{ color: "var(--kb-ink-muted)" }}
        >
          {lang}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2 py-0.5 border text-xs transition-opacity hover:opacity-75 cursor-pointer"
          style={{
            borderColor: "var(--kb-border-soft)",
            backgroundColor: "var(--kb-bg)",
            color: "var(--kb-ink)",
          }}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          <span>{copied ? t("已复制", "Copied") : t("复制代码", "Copy")}</span>
        </button>
      </div>
      <pre
        className="p-4 sm:p-5 overflow-x-auto font-mono-kb text-xs sm:text-sm leading-relaxed m-0"
        style={{
          backgroundColor: "var(--kb-code-bg)",
          color: "var(--kb-ink)",
        }}
      >
        {children}
      </pre>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | undefined>(undefined);
  const [prev, setPrev] = useState<Post | undefined>(undefined);
  const [next, setNext] = useState<Post | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [showCommentsSidebar, setShowCommentsSidebar] = useState(true);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const contentRef = useRef<HTMLDivElement>(null);

  // Single cached fetch resolves both current post and adjacent prev/next posts
  useEffect(() => {
    if (!slug || !token) return;
    let cancelled = false;
    setLoading(true);
    setReadProgress(0);
    setMobileTocOpen(false);

    getPostAndAdjacent(slug, language, token)
      .then(({ post: p, prev: pr, next: nx }) => {
        if (cancelled) return;
        setPost(p);
        setPrev(pr);
        setNext(nx);
        setLoading(false);
        if (contentRef.current) contentRef.current.scrollTop = 0;
      })
      .catch(() => {
        if (cancelled) return;
        setPost(undefined);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug, language, token]);

  useEffect(() => {
    if (post && post.metadata.draft) navigate("/", { replace: true });
  }, [post, navigate]);

  // Lock html/body scroll on desktop so the 3 columns scroll independently
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const lock = (matches: boolean) => {
      const val = matches ? "hidden" : "";
      document.documentElement.style.overflow = val;
      document.body.style.overflow = val;
    };
    lock(mq.matches);
    const handler = (e: MediaQueryListEvent) => lock(e.matches);
    mq.addEventListener("change", handler);
    return () => {
      mq.removeEventListener("change", handler);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Track mobile reading progress on window scroll
  useEffect(() => {
    if (isDesktop) return;
    const onWindowScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0;
      setReadProgress(pct);
    };
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, [isDesktop]);

  const handleDesktopScroll = (e: React.UIEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const max = el.scrollHeight - el.clientHeight;
    const pct = max > 0 ? Math.min(100, Math.round((el.scrollTop / max) * 100)) : 0;
    setReadProgress(pct);
  };

  const headings = useMemo(() => {
    if (!post) return [];
    return extractHeadings(post.content);
  }, [post]);

  const showComments = !!(post?.metadata.comments && slug);

  // Per-render deduplicated heading slugger matching extractHeadings()
  const nextHeadingId = createSlugger();

  if (loading) {
    return (
      <div
        className="min-h-[calc(100vh-3rem)] max-w-3xl mx-auto px-4 sm:px-8 py-12 space-y-6"
        style={{ backgroundColor: "var(--kb-bg)", color: "var(--kb-ink)" }}
      >
        <div className="h-4 w-32 kb-skel" />
        <div className="h-10 w-4/5 kb-skel" />
        <div className="h-4 w-56 kb-skel" />
        <div
          className="pt-6 border-t-2 space-y-4"
          style={{ borderColor: "var(--kb-border-soft)" }}
        >
          <div className="h-4 w-full kb-skel" />
          <div className="h-4 w-11/12 kb-skel" />
          <div className="h-4 w-5/6 kb-skel" />
          <div className="h-28 w-full kb-skel" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div
        className="min-h-[calc(100vh-3rem)] flex items-center justify-center px-4"
        style={{ backgroundColor: "var(--kb-bg)", color: "var(--kb-ink)" }}
      >
        <div className="text-center">
          <p
            className="font-mono-kb text-xs uppercase tracking-widest mb-2"
            style={{ color: "var(--kb-ink-faint)" }}
          >
            404 // NOT FOUND
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            {t("文章未找到", "Note Not Found")}
          </h1>
          <Link
            to="/"
            className="kb-btn-outline inline-block px-6 py-3 font-mono-kb text-xs font-bold uppercase tracking-wider"
          >
            {t("返回知识库", "Back to Knowledge Base")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-[calc(100vh-3rem)] lg:min-h-0 lg:h-[calc(100vh-3rem)] lg:overflow-hidden lg:flex lg:flex-col"
      style={{ backgroundColor: "var(--kb-bg)", color: "var(--kb-ink)" }}
    >
      {/* Subheader + 2px Reading Progress Bar */}
      <header
        className="border-b-2 shrink-0 sticky top-12 lg:static z-30"
        style={{
          borderColor: "var(--kb-border)",
          backgroundColor: "var(--kb-bg)",
        }}
      >
        <div className="px-4 sm:px-6 lg:px-10 h-12 flex items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono-kb text-xs uppercase tracking-wider hover:opacity-65 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("返回知识库", "Back to Index")}</span>
          </Link>

          <div className="flex items-center gap-3">
            <span
              className="font-mono-kb text-xs hidden sm:inline tabular-nums"
              style={{ color: "var(--kb-ink-muted)" }}
            >
              {post.metadata.date} ·{" "}
              {t(
                `约 ${post.readingTimeMin} 分钟阅读`,
                `${post.readingTimeMin} min read`,
              )}
            </span>

            {isDesktop && showComments && (
              <button
                type="button"
                onClick={() => setShowCommentsSidebar((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 border font-mono-kb text-xs cursor-pointer transition-colors"
                style={{
                  borderColor: showCommentsSidebar
                    ? "var(--kb-border)"
                    : "var(--kb-border-soft)",
                  backgroundColor: showCommentsSidebar
                    ? "var(--kb-inv-bg)"
                    : "transparent",
                  color: showCommentsSidebar
                    ? "var(--kb-inv-ink)"
                    : "var(--kb-ink)",
                }}
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t("讨论区", "Discussions")}</span>
              </button>
            )}
          </div>
        </div>

        {/* 2px Reading Progress Indicator */}
        <div
          className="h-0.5 w-full"
          style={{ backgroundColor: "var(--kb-border-soft)" }}
        >
          <div
            className="h-full transition-all duration-100"
            style={{
              width: `${readProgress}%`,
              backgroundColor: "var(--kb-ink)",
            }}
          />
        </div>
      </header>

      {/* 3-Column Desktop / Single-Column Mobile */}
      <div className="lg:flex lg:flex-1 lg:min-h-0">
        {/* Left TOC Sidebar (Desktop) */}
        {isDesktop && (
          <aside
            className="w-60 xl:w-64 shrink-0 overflow-y-auto border-r"
            style={{
              borderColor: "var(--kb-border-soft)",
              backgroundColor: "var(--kb-bg-subtle)",
            }}
          >
            <TableOfContents headings={headings} contentRef={contentRef} />
          </aside>
        )}

        {/* Main Reading Column */}
        <main
          ref={contentRef}
          onScroll={isDesktop ? handleDesktopScroll : undefined}
          className="flex-1 min-h-0 lg:overflow-y-auto"
        >
          <article className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-11">
            {/* Mobile Collapsible TOC */}
            {!isDesktop && headings.length > 0 && (
              <div
                className="mb-6 border-2"
                style={{
                  borderColor: "var(--kb-border)",
                  backgroundColor: "var(--kb-bg-subtle)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setMobileTocOpen((o) => !o)}
                  className="w-full px-4 py-2.5 flex items-center justify-between font-mono-kb text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    {t("文章目录", "Table of Contents")} ({headings.length})
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-150 ${
                      mobileTocOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileTocOpen && (
                  <div
                    className="anim-popover px-4 pb-3 pt-2 border-t"
                    style={{ borderColor: "var(--kb-border-soft)" }}
                  >
                    <TableOfContents
                      headings={headings}
                      compact
                      onSelect={() => setMobileTocOpen(false)}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Article Header — natural casing for technical accuracy */}
            <header
              className="pb-7 mb-8 border-b-2"
              style={{ borderColor: "var(--kb-border)" }}
            >
              {post.metadata.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  {post.metadata.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/?tag=${encodeURIComponent(tag)}`}
                      className="font-mono-kb text-xs px-2.5 py-0.5 border hover:opacity-75 transition-opacity"
                      style={{
                        borderColor: "var(--kb-border)",
                        color: "var(--kb-ink)",
                      }}
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}

              <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
                {post.metadata.title}
              </h1>

              <div
                className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-kb text-xs tabular-nums"
                style={{ color: "var(--kb-ink-muted)" }}
              >
                <time dateTime={post.metadata.date}>{post.metadata.date}</time>
                {post.metadata.author && (
                  <>
                    <span>·</span>
                    <span>@{post.metadata.author}</span>
                  </>
                )}
                <span>·</span>
                <span>
                  {t(
                    `预计阅读 ${post.readingTimeMin} 分钟`,
                    `${post.readingTimeMin} min read`,
                  )}
                </span>
              </div>
            </header>

            {/* Markdown Body */}
            <div className="max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  h2: ({ children }) => {
                    const id = nextHeadingId(getChildrenText(children));
                    return (
                      <h2
                        id={id}
                        className="font-display text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-5 pb-2.5 border-b-2 scroll-mt-6"
                        style={{ borderColor: "var(--kb-border)" }}
                      >
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children }) => {
                    const id = nextHeadingId(getChildrenText(children));
                    return (
                      <h3
                        id={id}
                        className="font-display text-xl sm:text-2xl font-bold tracking-tight mt-8 mb-3.5 scroll-mt-6"
                      >
                        {children}
                      </h3>
                    );
                  },
                  h4: ({ children }) => {
                    const id = nextHeadingId(getChildrenText(children));
                    return (
                      <h4
                        id={id}
                        className="font-display text-lg font-bold tracking-tight mt-6 mb-2.5 scroll-mt-6"
                      >
                        {children}
                      </h4>
                    );
                  },
                  p: ({ children }) => (
                    <p
                      className="mb-5 leading-[1.85] text-base sm:text-[17px]"
                      style={{ color: "var(--kb-ink)", opacity: 0.92 }}
                    >
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-6 space-y-2 list-none pl-0 [&>li]:relative [&>li]:pl-5 [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:left-0.5 [&>li]:before:top-[0.7rem] [&>li]:before:w-1.5 [&>li]:before:h-1.5 [&>li]:before:bg-current">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-6 space-y-2 list-decimal pl-6 marker:font-mono-kb marker:font-bold marker:text-sm">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-[1.8] text-base">{children}</li>
                  ),
                  code: ({ className, children, ...props }) => {
                    const isInline =
                      !className && !String(children).includes("\n");
                    if (isInline) {
                      return (
                        <code
                          className="font-mono-kb text-[0.85em] px-1.5 py-0.5 border"
                          style={{
                            backgroundColor: "var(--kb-code-bg)",
                            borderColor: "var(--kb-border-soft)",
                          }}
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
                    <SwissCodeBlock>{children}</SwissCodeBlock>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote
                      className="border-l-4 pl-5 pr-4 py-3 my-6 italic"
                      style={{
                        borderColor: "var(--kb-border)",
                        backgroundColor: "var(--kb-bg-subtle)",
                        color: "var(--kb-ink-muted)",
                      }}
                    >
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="my-6 overflow-x-auto">
                      <table
                        className="w-full border-collapse text-sm border-2"
                        style={{ borderColor: "var(--kb-border)" }}
                      >
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead style={{ backgroundColor: "var(--kb-bg-subtle)" }}>
                      {children}
                    </thead>
                  ),
                  th: ({ children }) => (
                    <th
                      className="text-left px-3.5 py-2.5 border-b-2 border-r font-mono-kb text-xs uppercase tracking-wider font-bold"
                      style={{
                        borderBottomColor: "var(--kb-border)",
                        borderRightColor: "var(--kb-border-soft)",
                      }}
                    >
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td
                      className="px-3.5 py-2.5 border-b border-r"
                      style={{ borderColor: "var(--kb-border-soft)" }}
                    >
                      {children}
                    </td>
                  ),
                  hr: () => (
                    <hr
                      className="my-8 border-t-2"
                      style={{ borderColor: "var(--kb-border-soft)" }}
                    />
                  ),
                  img: ({ src, alt }) => (
                    <img
                      src={src}
                      alt={alt || ""}
                      loading="lazy"
                      className="border-2 my-8 max-w-full"
                      style={{ borderColor: "var(--kb-border)" }}
                    />
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href?.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="border-b-2 transition-colors hover:opacity-70"
                      style={{ borderColor: "var(--kb-border)" }}
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
            <nav
              className="mt-12 pt-8 border-t-2"
              style={{ borderColor: "var(--kb-border)" }}
            >
              <h2
                className="font-mono-kb text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: "var(--kb-ink-muted)" }}
              >
                {t("继续阅读", "Continue Reading")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prev ? (
                  <Link
                    to={`/blog/${prev.slug}`}
                    className="kb-btn-outline group p-4 sm:p-5 block"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5 font-mono-kb text-xs uppercase tracking-wider opacity-65">
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
                    className="kb-btn-outline group p-4 sm:p-5 block text-right"
                  >
                    <div className="flex items-center justify-end gap-1.5 mb-1.5 font-mono-kb text-xs uppercase tracking-wider opacity-65">
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

            {/* Comments Section - mobile/tablet inline */}
            {!isDesktop && showComments && <GiscusComments slug={slug!} />}
          </article>

          <Footer compact />
        </main>

        {/* Right Comments Sidebar (Desktop) */}
        {isDesktop && showComments && showCommentsSidebar && (
          <aside
            className="anim-popover w-80 xl:w-96 shrink-0 overflow-y-auto border-l"
            style={{
              borderColor: "var(--kb-border-soft)",
              backgroundColor: "var(--kb-bg-subtle)",
            }}
          >
            <div className="p-5">
              <GiscusComments slug={slug!} sidebar />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

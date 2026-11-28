import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  FileText,
  Link2,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  expandWikiLinks,
  getAllWiki,
  getBacklinks,
  getWikiEntry,
  type WikiCategory,
  type WikiEntry as WikiEntryType,
} from "../utils/wiki";
import { getAllPosts, type Post } from "../utils/posts";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import MarkdownBody from "../components/MarkdownBody";
import TableOfContents, { extractHeadings } from "../components/TableOfContents";
import Footer from "../components/Footer";
import { useMediaQuery } from "../hooks/useMediaQuery";

function renderSourceWithLinks(text: string): ReactNode {
  const urlRegex = /(https?:\/\/\S+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, idx) => {
    if (/^https?:\/\/\S+$/.test(part)) {
      return (
        <a
          key={idx}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 underline underline-offset-4 break-all hover:opacity-70"
        >
          <span>{part}</span>
          <ArrowUpRight className="w-3 h-3 shrink-0" />
        </a>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export default function WikiEntry() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const { token } = useAuth();

  const [entry, setEntry] = useState<WikiEntryType | undefined>(undefined);
  const [allWiki, setAllWiki] = useState<WikiEntryType[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const contentRef = useRef<HTMLDivElement>(null);

  const categoryLabel = (cat: WikiCategory) => {
    switch (cat) {
      case "term":
        return t("术语", "Term");
      case "technique":
        return t("技术", "Technique");
      case "solution":
        return t("方案", "Solution");
    }
  };

  useEffect(() => {
    if (!slug || !token) return;
    let cancelled = false;
    setLoading(true);
    setReadProgress(0);
    setMobileTocOpen(false);

    Promise.all([
      getWikiEntry(slug, token),
      getAllWiki(token).catch(() => [] as WikiEntryType[]),
      getAllPosts(language, token).catch(() => [] as Post[]),
    ])
      .then(([current, wikiList, postsList]) => {
        if (cancelled) return;
        setEntry(current);
        setAllWiki(wikiList);
        setAllPosts(postsList);
        setLoading(false);
        if (contentRef.current) contentRef.current.scrollTop = 0;
      })
      .catch(() => {
        if (cancelled) return;
        setEntry(undefined);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug, language, token]);

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
      const pct =
        max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0;
      setReadProgress(pct);
    };
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, [isDesktop]);

  const handleDesktopScroll = (e: React.UIEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const max = el.scrollHeight - el.clientHeight;
    const pct =
      max > 0 ? Math.min(100, Math.round((el.scrollTop / max) * 100)) : 0;
    setReadProgress(pct);
  };

  const expandedContent = useMemo(
    () => (entry ? expandWikiLinks(entry.content) : ""),
    [entry],
  );

  const headings = useMemo(() => {
    if (!expandedContent) return [];
    return extractHeadings(expandedContent);
  }, [expandedContent]);

  const postTitleMap = useMemo(() => {
    const map = new Map<string, string>();
    allPosts.forEach((p) => map.set(p.slug, p.metadata.title));
    return map;
  }, [allPosts]);

  const wikiTitleMap = useMemo(() => {
    const map = new Map<string, string>();
    allWiki.forEach((w) => map.set(w.slug, w.title));
    return map;
  }, [allWiki]);

  const backlinks = useMemo(() => {
    if (!entry) return [];
    return getBacklinks(allWiki, entry.slug);
  }, [allWiki, entry]);

  const hasRelatedPanel = Boolean(
    entry &&
      (entry.relatedNotes.length > 0 ||
        entry.relatedWiki.length > 0 ||
        backlinks.length > 0 ||
        entry.sources.length > 0),
  );

  const renderRelatedSections = () => {
    if (!entry) return null;

    if (!hasRelatedPanel) {
      return (
        <p
          className="font-mono-kb text-xs uppercase tracking-wider"
          style={{ color: "var(--kb-ink-faint)" }}
        >
          {t("暂无关联或参考来源", "No related links or sources")}
        </p>
      );
    }

    return (
      <div className="space-y-6">
        {entry.relatedNotes.length > 0 && (
          <section>
            <h3
              className="font-mono-kb text-xs font-bold uppercase tracking-widest mb-2.5 pb-2 border-b flex items-center gap-1.5"
              style={{
                borderColor: "var(--kb-border-soft)",
                color: "var(--kb-ink-muted)",
              }}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t("相关笔记", "Related Notes")}</span>
            </h3>
            <ul className="space-y-1.5">
              {entry.relatedNotes.map((noteSlug) => (
                <li key={noteSlug}>
                  <Link
                    to={`/blog/${noteSlug}`}
                    className="block py-1.5 px-2.5 border text-xs leading-snug hover:opacity-75 transition-opacity"
                    style={{
                      borderColor: "var(--kb-border-soft)",
                      backgroundColor: "var(--kb-bg)",
                    }}
                  >
                    <div className="font-bold">
                      {postTitleMap.get(noteSlug) || noteSlug}
                    </div>
                    {postTitleMap.has(noteSlug) && (
                      <div
                        className="font-mono-kb text-[11px] truncate mt-0.5"
                        style={{ color: "var(--kb-ink-faint)" }}
                      >
                        {noteSlug}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {entry.relatedWiki.length > 0 && (
          <section>
            <h3
              className="font-mono-kb text-xs font-bold uppercase tracking-widest mb-2.5 pb-2 border-b flex items-center gap-1.5"
              style={{
                borderColor: "var(--kb-border-soft)",
                color: "var(--kb-ink-muted)",
              }}
            >
              <Link2 className="w-3.5 h-3.5" />
              <span>{t("相关词条", "Related Wiki")}</span>
            </h3>
            <ul className="space-y-1.5">
              {entry.relatedWiki.map((wikiSlug) => (
                <li key={wikiSlug}>
                  <Link
                    to={`/wiki/${wikiSlug}`}
                    className="block py-1.5 px-2.5 border text-xs font-bold leading-snug hover:opacity-75 transition-opacity"
                    style={{
                      borderColor: "var(--kb-border-soft)",
                      backgroundColor: "var(--kb-bg)",
                    }}
                  >
                    {wikiTitleMap.get(wikiSlug) || wikiSlug}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {backlinks.length > 0 && (
          <section>
            <h3
              className="font-mono-kb text-xs font-bold uppercase tracking-widest mb-2.5 pb-2 border-b"
              style={{
                borderColor: "var(--kb-border-soft)",
                color: "var(--kb-ink-muted)",
              }}
            >
              {t("反向链接", "Backlinks")}
            </h3>
            <ul className="space-y-1.5">
              {backlinks.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/wiki/${item.slug}`}
                    className="block py-1.5 px-2.5 border text-xs font-bold leading-snug hover:opacity-75 transition-opacity"
                    style={{
                      borderColor: "var(--kb-border-soft)",
                      backgroundColor: "var(--kb-bg)",
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {entry.sources.length > 0 && (
          <section>
            <h3
              className="font-mono-kb text-xs font-bold uppercase tracking-widest mb-2.5 pb-2 border-b"
              style={{
                borderColor: "var(--kb-border-soft)",
                color: "var(--kb-ink-muted)",
              }}
            >
              {t("参考来源", "Sources")}
            </h3>
            <ol className="space-y-2.5 list-decimal pl-5 marker:font-mono-kb marker:font-bold marker:text-xs text-xs leading-relaxed">
              {entry.sources.map((src, i) => (
                <li key={i} style={{ color: "var(--kb-ink-muted)" }}>
                  {renderSourceWithLinks(src)}
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>
    );
  };

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

  if (!entry) {
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
            {t("词条未找到", "Wiki Entry Not Found")}
          </h1>
          <Link
            to="/wiki"
            className="kb-btn-outline inline-block px-6 py-3 font-mono-kb text-xs font-bold uppercase tracking-wider"
          >
            {t("返回 Wiki", "Back to Wiki")}
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
            to="/wiki"
            className="inline-flex items-center gap-2 font-mono-kb text-xs uppercase tracking-wider hover:opacity-65 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("返回 Wiki", "Back to Wiki")}</span>
          </Link>

          <div className="flex items-center gap-3">
            <span
              className="font-mono-kb text-xs hidden sm:inline tabular-nums"
              style={{ color: "var(--kb-ink-muted)" }}
            >
              {entry.updated ? `${entry.updated} · ` : ""}
              {t(
                `约 ${entry.readingTimeMin} 分钟阅读`,
                `${entry.readingTimeMin} min read`,
              )}
            </span>
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
                    {t("词条目录", "Table of Contents")} ({headings.length})
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

            {/* Entry Header */}
            <header
              className="pb-7 mb-8 border-b-2"
              style={{ borderColor: "var(--kb-border)" }}
            >
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                <Link
                  to={`/wiki?category=${entry.category}`}
                  className="font-mono-kb text-xs px-2.5 py-0.5 border font-bold uppercase tracking-wider hover:opacity-75 transition-opacity"
                  style={{
                    borderColor: "var(--kb-border)",
                    backgroundColor: "var(--kb-inv-bg)",
                    color: "var(--kb-inv-ink)",
                  }}
                >
                  {categoryLabel(entry.category)}
                </Link>
                {entry.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/wiki?tag=${encodeURIComponent(tag)}`}
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

              <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight leading-tight mb-3">
                {entry.title}
              </h1>

              {entry.aliases.length > 0 && (
                <p
                  className="font-mono-kb text-xs sm:text-sm mb-3"
                  style={{ color: "var(--kb-ink-muted)" }}
                >
                  {t("别名", "AKA")}: {entry.aliases.join(" · ")}
                </p>
              )}

              <div
                className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-kb text-xs tabular-nums"
                style={{ color: "var(--kb-ink-muted)" }}
              >
                {entry.updated && (
                  <>
                    <span>
                      {t("更新于", "Updated")} {entry.updated}
                    </span>
                    <span>·</span>
                  </>
                )}
                <span>
                  {t(
                    `预计阅读 ${entry.readingTimeMin} 分钟`,
                    `${entry.readingTimeMin} min read`,
                  )}
                </span>
              </div>

              {entry.summary && (
                <div
                  className="mt-5 p-4 border-2 text-sm sm:text-base leading-relaxed"
                  style={{
                    borderColor: "var(--kb-border)",
                    backgroundColor: "var(--kb-bg-subtle)",
                    color: "var(--kb-ink)",
                  }}
                >
                  {entry.summary}
                </div>
              )}
            </header>

            {/* Markdown Body */}
            <MarkdownBody content={expandedContent} />

            {/* Related Panel (Mobile / Tablet inline) */}
            {!isDesktop && hasRelatedPanel && (
              <section
                className="mt-12 pt-8 border-t-2"
                style={{ borderColor: "var(--kb-border)" }}
              >
                <h2
                  className="font-mono-kb text-xs font-bold uppercase tracking-widest mb-5"
                  style={{ color: "var(--kb-ink-muted)" }}
                >
                  {t("关联与参考", "Related & Sources")}
                </h2>
                {renderRelatedSections()}
              </section>
            )}
          </article>

          <Footer compact />
        </main>

        {/* Right Related Panel (Desktop) */}
        {isDesktop && (
          <aside
            className="w-80 shrink-0 overflow-y-auto border-l"
            style={{
              borderColor: "var(--kb-border-soft)",
              backgroundColor: "var(--kb-bg-subtle)",
            }}
          >
            <div className="p-5 pt-6">
              <h2
                className="font-mono-kb text-xs font-bold uppercase tracking-widest mb-4 pb-3 border-b"
                style={{
                  borderColor: "var(--kb-border-soft)",
                  color: "var(--kb-ink-muted)",
                }}
              >
                {t("关联", "Related")}
              </h2>
              {renderRelatedSections()}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

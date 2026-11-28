import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  expandWikiLinks,
  getAllWiki,
  getBacklinks,
  getWikiEntry,
  type WikiEntry as WikiEntryType,
} from "../utils/wiki";
import { getAllPosts, type Post } from "../utils/posts";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { extractHeadings } from "../components/TableOfContents";
import WikiMarkdownBody from "../components/wiki/WikiMarkdownBody";
import {
  GP_ICONS,
  WikiFooter,
  WikiHeader,
  WikiStarfield,
  categoryText,
  getBookVisual,
  parseWikiSource,
  useWikiRootOverflowClip,
} from "../components/wiki/wikiVisuals";

/**
 * Remove trailing Markdown `## 参考来源` / `## References` section when
 * structured frontmatter `sources` are rendered in Grokipedia's 2-column
 * `#sec-refs` footer block, preventing duplicate references.
 */
function stripTrailingReferencesSection(markdown: string): string {
  return markdown
    .replace(/\n##\s+(?:参考来源|References)\s*\n[\s\S]*$/i, "")
    .trim();
}

export default function WikiEntry() {
  const { slug } = useParams<{ slug: string }>();
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const { token } = useAuth();
  const navigate = useNavigate();

  useWikiRootOverflowClip();

  const [entry, setEntry] = useState<WikiEntryType | undefined>(undefined);
  const [allWiki, setAllWiki] = useState<WikiEntryType[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState("");

  useEffect(() => {
    if (!slug || !token) return;
    let cancelled = false;
    setLoading(true);
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
        setAllPosts(postsList.filter((p) => !p.metadata.draft));
        setLoading(false);
        window.scrollTo({ top: 0 });
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

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const expandedBody = useMemo(() => {
    if (!entry) return "";
    const expanded = expandWikiLinks(entry.content);
    return entry.sources.length > 0 ? stripTrailingReferencesSection(expanded) : expanded;
  }, [entry]);

  const headings = useMemo(() => {
    if (!entry) return [];
    const list = extractHeadings(expandedBody);
    if (entry.sources.length > 0) {
      list.push({ id: "sec-refs", text: t("参考来源", "References"), level: 2 });
    }
    return list;
  }, [entry, expandedBody, t]);

  // Scroll-spy for active heading on Grokipedia's 224px left TOC rail
  useEffect(() => {
    if (headings.length === 0) {
      setActiveHeadingId("");
      return;
    }
    setActiveHeadingId(headings[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const item of entries) {
          if (item.isIntersecting) {
            setActiveHeadingId(item.target.id);
          }
        }
      },
      { rootMargin: "-72px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const postTitleMap = useMemo(() => {
    const map = new Map<string, string>();
    allPosts.forEach((p) => map.set(p.slug, p.metadata.title));
    return map;
  }, [allPosts]);

  const wikiMap = useMemo(() => {
    return new Map(allWiki.map((w) => [w.slug, w]));
  }, [allWiki]);

  const backlinks = useMemo(() => {
    if (!entry) return [];
    return getBacklinks(allWiki, entry.slug);
  }, [allWiki, entry]);

  const handleCopyUrl = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopiedLink(true);
        window.setTimeout(() => setCopiedLink(false), 1200);
      })
      .catch(() => {});
  };

  const handleRandom = () => {
    if (allWiki.length === 0) return;
    const pool = allWiki.filter((w) => w.slug !== entry?.slug);
    const list = pool.length > 0 ? pool : allWiki;
    const pick = list[Math.floor(Math.random() * list.length)];
    navigate(`/wiki/${pick.slug}`);
  };

  const scrollToHeading = (id: string) => {
    setActiveHeadingId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (loading) {
    return (
      <div className="gp-scope" data-gp-theme={theme}>
        <WikiStarfield />
        <div className="relative z-10">
          <WikiHeader isArticle entries={allWiki} currentSlug={slug} />
          <main className="mx-auto w-full max-w-[1440px] px-4 pt-24 pb-20 sm:px-6">
            <div className="max-w-[1040px] mx-auto space-y-5">
              <div className="h-9 w-2/3 rounded animate-pulse" style={{ backgroundColor: "var(--surface-l2)" }} />
              <div className="h-4 w-72 rounded animate-pulse" style={{ backgroundColor: "var(--surface-l2)" }} />
              <div className="h-64 w-full rounded-[12px] animate-pulse" style={{ backgroundColor: "var(--surface-l2)" }} />
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="gp-scope flex flex-col min-h-[100svh]" data-gp-theme={theme}>
        <WikiStarfield />
        <WikiHeader isArticle entries={allWiki} currentSlug={slug} />
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 pt-14">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--fg-tertiary)" }}>
              404 // NOT FOUND
            </p>
            <h1 className="gp-serif text-3xl sm:text-4xl font-medium mb-6">
              {t("词条未找到", "Wiki Entry Not Found")}
            </h1>
            <Link
              to="/wiki"
              className="inline-flex h-9 items-center px-5 rounded-full text-sm font-medium"
              style={{ backgroundColor: "var(--fg-primary)", color: "var(--surface-base)" }}
            >
              {t("返回 Lunepedia", "Back to Lunepedia")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const vis = getBookVisual(entry);

  return (
    <div className="gp-scope" data-gp-theme={theme}>
      <WikiStarfield />

      <div className="relative z-10">
        <WikiHeader isArticle entries={allWiki} currentSlug={entry.slug} />

        <main className="relative mx-auto w-full max-w-[1440px] px-4 pt-14 sm:px-6 xl:flex xl:items-start xl:gap-12">
          {/* Left Sticky 224px TOC Rail (>=1280px, 1px rail + 2px active indicator) */}
          <aside className="hidden xl:flex sticky top-14 h-[calc(100vh-3.5rem)] w-[224px] shrink-0 flex-col pt-9 overflow-y-auto gp-no-scrollbar">
            <div className="pb-2.5 pl-4 text-[13px] font-medium" style={{ color: "var(--fg-secondary)" }}>
              {t("目录", "Contents")}
            </div>
            <nav className="relative pl-0.5 pb-10">
              <div
                className="absolute left-0 top-1 bottom-1 w-px"
                style={{ backgroundColor: "var(--border-l1)" }}
              />
              <ul className="space-y-0.5">
                {headings.map((sec) => {
                  const active = activeHeadingId === sec.id;
                  const indent = Math.max(0, sec.level - 2) * 10;
                  return (
                    <li key={sec.id} className="relative">
                      {active && (
                        <div
                          className="absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-full"
                          style={{ backgroundColor: "var(--fg-primary)" }}
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => scrollToHeading(sec.id)}
                        style={{
                          paddingLeft: `${14 + indent}px`,
                          color: active ? "var(--fg-primary)" : "var(--fg-secondary)",
                          fontWeight: active ? 500 : 400,
                        }}
                        className="w-full text-left py-1 pr-2 text-[13px] leading-[1.35] cursor-pointer transition-colors hover:opacity-100"
                      >
                        {sec.text}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Main Article Column (flow-root allows right-floated Infobox) */}
          <div className="min-w-0 flex-1 pb-20 pt-7 md:pt-9">
            <article className="flow-root max-w-[1040px]">
              {/* Article Header */}
              <header className="mb-6">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h1
                    className="gp-serif text-[30px] sm:text-[36px] font-medium leading-[1.08] tracking-[-0.018em]"
                    style={{ color: "var(--fg-primary)" }}
                  >
                    {entry.title}
                  </h1>
                  <div className="ml-auto flex items-center gap-0.5">
                    <button
                      type="button"
                      onClick={handleCopyUrl}
                      className="w-8 h-8 rounded-full inline-flex items-center justify-center cursor-pointer transition-colors hover:opacity-75"
                      style={{ color: "var(--fg-secondary)" }}
                      title={t("复制链接", "Copy link")}
                    >
                      {copiedLink ? GP_ICONS.check : GP_ICONS.copy}
                    </button>
                    <button
                      type="button"
                      onClick={handleRandom}
                      className="w-8 h-8 rounded-full inline-flex items-center justify-center cursor-pointer transition-colors hover:opacity-75"
                      style={{ color: "var(--fg-secondary)" }}
                      title={t("随机词条", "Random entry")}
                    >
                      {GP_ICONS.shuffle}
                    </button>
                  </div>
                </div>
                <div
                  className="mt-2 flex flex-wrap items-center gap-2 border-b pb-3 text-[13px]"
                  style={{ borderColor: "var(--border-l1)", color: "var(--fg-tertiary)" }}
                >
                  <span style={{ color: "var(--fg-secondary)" }}>{GP_ICONS.spark}</span>
                  <span>
                    {t("已对照权威文献核验", "Fact-checked against primary sources")}
                    {entry.updated ? ` · ${t("更新于", "Updated")} ${entry.updated}` : ""} ·{" "}
                    {t(`约 ${entry.readingTimeMin} 分钟阅读`, `${entry.readingTimeMin} min read`)}
                  </span>
                </div>
              </header>

              {/* Right-Floated Minimalist Infobox (240px md, 300px lg+, full width <md) */}
              <aside
                className="mb-7 w-full overflow-hidden rounded-[12px] md:float-right md:mb-6 md:ml-6 md:w-[240px] lg:ml-8 lg:w-[300px]"
                style={{
                  border: "1px solid var(--border-l2)",
                  backgroundColor: "var(--surface-l1)",
                }}
              >
                <div
                  className="px-3 py-2.5 text-center text-[14.5px] font-medium border-b"
                  style={{
                    backgroundColor: "var(--surface-l2)",
                    borderColor: "var(--border-l1)",
                    color: "var(--fg-primary)",
                  }}
                >
                  {vis.shortTitle}
                </div>

                {entry.summary && (
                  <div
                    className="px-3.5 py-3 text-xs leading-relaxed border-b"
                    style={{
                      backgroundColor: "var(--surface-base)",
                      borderColor: "var(--border-l1)",
                      color: "var(--fg-secondary)",
                    }}
                  >
                    {entry.summary}
                  </div>
                )}

                <dl className="text-[12.5px] leading-[1.45]">
                  <div className="grid grid-cols-[80px_1fr] gap-x-3 px-3 py-2">
                    <dt className="font-medium" style={{ color: "var(--fg-primary)" }}>
                      {t("分类", "Category")}
                    </dt>
                    <dd>
                      <Link
                        to={`/wiki?category=${entry.category}`}
                        className="underline"
                        style={{ color: "var(--link)", textDecorationColor: "var(--link-soft)" }}
                      >
                        {categoryText(entry.category, t)}
                      </Link>
                    </dd>
                  </div>

                  {entry.aliases.length > 0 && (
                    <div
                      className="grid grid-cols-[80px_1fr] gap-x-3 px-3 py-2 border-t"
                      style={{ borderColor: "var(--border-l1)" }}
                    >
                      <dt className="font-medium" style={{ color: "var(--fg-primary)" }}>
                        {t("别名", "Aliases")}
                      </dt>
                      <dd style={{ color: "var(--fg-secondary)" }}>{entry.aliases.join(", ")}</dd>
                    </div>
                  )}

                  {entry.tags.length > 0 && (
                    <div
                      className="grid grid-cols-[80px_1fr] gap-x-3 px-3 py-2 border-t"
                      style={{ borderColor: "var(--border-l1)" }}
                    >
                      <dt className="font-medium" style={{ color: "var(--fg-primary)" }}>
                        {t("领域标签", "Topics")}
                      </dt>
                      <dd className="flex flex-wrap gap-1">
                        {entry.tags.map((tg) => (
                          <Link
                            key={tg}
                            to={`/wiki?tag=${encodeURIComponent(tg)}`}
                            className="px-1.5 py-0.5 rounded text-xs hover:opacity-80"
                            style={{
                              backgroundColor: "var(--surface-l2)",
                              color: "var(--fg-secondary)",
                            }}
                          >
                            #{tg}
                          </Link>
                        ))}
                      </dd>
                    </div>
                  )}

                  {entry.relatedNotes.length > 0 && (
                    <div
                      className="grid grid-cols-[80px_1fr] gap-x-3 px-3 py-2 border-t"
                      style={{ borderColor: "var(--border-l1)" }}
                    >
                      <dt className="font-medium" style={{ color: "var(--fg-primary)" }}>
                        {t("关联笔记", "Notes")}
                      </dt>
                      <dd className="space-y-1 min-w-0">
                        {entry.relatedNotes.map((ns) => (
                          <Link
                            key={ns}
                            to={`/blog/${ns}`}
                            className="block truncate underline hover:opacity-80"
                            style={{
                              color: "var(--link)",
                              textDecorationColor: "var(--link-soft)",
                            }}
                            title={postTitleMap.get(ns) || ns}
                          >
                            {postTitleMap.get(ns) || ns}
                          </Link>
                        ))}
                      </dd>
                    </div>
                  )}

                  {entry.relatedWiki.length > 0 && (
                    <div
                      className="grid grid-cols-[80px_1fr] gap-x-3 px-3 py-2 border-t"
                      style={{ borderColor: "var(--border-l1)" }}
                    >
                      <dt className="font-medium" style={{ color: "var(--fg-primary)" }}>
                        {t("关联词条", "Related")}
                      </dt>
                      <dd className="flex flex-wrap gap-x-2 gap-y-1">
                        {entry.relatedWiki.map((ws) => {
                          const tw = wikiMap.get(ws);
                          return (
                            <Link
                              key={ws}
                              to={`/wiki/${ws}`}
                              className="underline text-left"
                              style={{
                                color: "var(--link)",
                                textDecorationColor: "var(--link-soft)",
                              }}
                            >
                              {tw ? getBookVisual(tw).shortTitle : ws}
                            </Link>
                          );
                        })}
                      </dd>
                    </div>
                  )}

                  {backlinks.length > 0 && (
                    <div
                      className="grid grid-cols-[80px_1fr] gap-x-3 px-3 py-2 border-t"
                      style={{ borderColor: "var(--border-l1)" }}
                    >
                      <dt className="font-medium" style={{ color: "var(--fg-primary)" }}>
                        {t("反向引用", "Cited by")}
                      </dt>
                      <dd className="flex flex-wrap gap-x-2 gap-y-1">
                        {backlinks.map((b) => (
                          <Link
                            key={b.slug}
                            to={`/wiki/${b.slug}`}
                            className="underline text-left"
                            style={{
                              color: "var(--link)",
                              textDecorationColor: "var(--link-soft)",
                            }}
                          >
                            {getBookVisual(b).shortTitle}
                          </Link>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              </aside>

              {/* Grokipedia-Styled Markdown Body */}
              <WikiMarkdownBody
                content={expandedBody}
                wikiMap={wikiMap}
                postTitleMap={postTitleMap}
              />

              {/* Bottom 2-Column References (Grokipedia #references) */}
              {entry.sources.length > 0 && (
                <section id="sec-refs" className="clear-both mt-14 scroll-mt-20">
                  <div
                    className="flex items-baseline justify-between border-b pb-3"
                    style={{ borderColor: "var(--border-l1)" }}
                  >
                    <h2 className="gp-serif text-[26px] font-medium" style={{ color: "var(--fg-primary)" }}>
                      References
                    </h2>
                    <span className="gp-tnum text-xs" style={{ color: "var(--fg-tertiary)" }}>
                      {entry.sources.length} {t("条来源", "sources")}
                    </span>
                  </div>
                  <ol className="mt-4 columns-1 gap-x-10 md:columns-2">
                    {entry.sources.map((src, i) => {
                      const p = parseWikiSource(src);
                      return (
                        <li
                          key={i}
                          id={`ref-row-${i}`}
                          className="grid break-inside-avoid grid-cols-[28px_1fr] gap-2 border-b py-2.5 text-[13.5px] leading-[1.45]"
                          style={{ borderColor: "var(--border-l1)" }}
                        >
                          <span className="gp-tnum text-xs pt-0.5" style={{ color: "var(--fg-tertiary)" }}>
                            {i + 1}.
                          </span>
                          <div>
                            {p.url ? (
                              <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-[3px] break-words hover:opacity-80"
                                style={{
                                  color: "var(--fg-secondary)",
                                  textDecorationColor: "var(--border-l3)",
                                }}
                              >
                                {p.text}
                              </a>
                            ) : (
                              <span style={{ color: "var(--fg-secondary)" }}>{p.text}</span>
                            )}
                            {p.domain && (
                              <span className="ml-1.5 text-xs" style={{ color: "var(--fg-tertiary)" }}>
                                {p.domain}
                              </span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </section>
              )}
            </article>
          </div>
        </main>

        {/* Floating Bottom-Left Contents Pill (<1280px, matching Grokipedia xl:hidden) */}
        {headings.length > 0 && (
          <button
            type="button"
            onClick={() => setMobileTocOpen(true)}
            className="xl:hidden fixed bottom-5 left-5 z-40 h-10 px-3.5 rounded-full inline-flex items-center gap-2 text-[13px] font-medium cursor-pointer transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--surface-elevated)",
              border: "1px solid var(--border-l1)",
              boxShadow: "var(--elev-menu)",
              color: "var(--fg-primary)",
            }}
          >
            {GP_ICONS.list}
            <span>{t("目录", "Contents")}</span>
          </button>
        )}

        {/* Tablet / Mobile Slide-Over TOC Drawer (<1280px) */}
        {mobileTocOpen && (
          <div className="xl:hidden fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px]"
              onClick={() => setMobileTocOpen(false)}
            />
            <aside
              className="relative z-10 h-full w-[82vw] max-w-xs overflow-y-auto p-6 flex flex-col"
              style={{
                backgroundColor: "var(--surface-elevated)",
                borderRight: "1px solid var(--border-l1)",
                boxShadow: "var(--elev-menu)",
              }}
            >
              <div
                className="flex items-center justify-between pb-3 mb-3 border-b"
                style={{ borderColor: "var(--border-l1)" }}
              >
                <span className="text-[13px] font-medium" style={{ color: "var(--fg-secondary)" }}>
                  {t("目录", "Contents")}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileTocOpen(false)}
                  className="w-8 h-8 rounded-full inline-flex items-center justify-center cursor-pointer"
                  style={{ color: "var(--fg-secondary)" }}
                  aria-label="Close TOC"
                >
                  {GP_ICONS.close}
                </button>
              </div>
              <nav className="space-y-1">
                {headings.map((sec) => {
                  const active = activeHeadingId === sec.id;
                  const indent = Math.max(0, sec.level - 2) * 12;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => {
                        setMobileTocOpen(false);
                        window.setTimeout(() => scrollToHeading(sec.id), 25);
                      }}
                      style={{
                        paddingLeft: `${10 + indent}px`,
                        color: active ? "var(--fg-primary)" : "var(--fg-secondary)",
                        fontWeight: active ? 500 : 400,
                      }}
                      className="w-full text-left py-2 pr-2 rounded-lg text-[14px] cursor-pointer transition-colors hover:opacity-80"
                    >
                      {sec.text}
                    </button>
                  );
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* Floating Bottom-Right Circular Back-to-Top */}
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 right-5 z-40 w-10 h-10 rounded-full inline-flex items-center justify-center cursor-pointer transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--surface-elevated)",
              border: "1px solid var(--border-l1)",
              boxShadow: "var(--elev-menu)",
              color: "var(--fg-primary)",
            }}
            title={t("回到顶部", "Back to top")}
            aria-label={t("回到顶部", "Back to top")}
          >
            {GP_ICONS.arrowUp}
          </button>
        )}

        <WikiFooter entries={allWiki} notesCount={allPosts.length} />
      </div>
    </div>
  );
}

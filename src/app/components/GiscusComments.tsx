import { useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface GiscusCommentsProps {
  slug: string;
  sidebar?: boolean;
}

export default function GiscusComments({ slug, sidebar = false }: GiscusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  const repo = import.meta.env.VITE_GISCUS_REPO || "JuneDrinleng/JuneDrinleng.github.io";
  const repoId = import.meta.env.VITE_GISCUS_REPO_ID || "";
  const category = import.meta.env.VITE_GISCUS_CATEGORY || "Announcements";
  const categoryId = import.meta.env.VITE_GISCUS_CATEGORY_ID || "";

  const isConfigured = Boolean(repo && repoId && category && categoryId);
  const giscusTheme = theme === "dark" ? "dark" : "light";
  const giscusLang = language === "zh" ? "zh-CN" : "en";

  useEffect(() => {
    if (!containerRef.current || !isConfigured) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", giscusTheme);
    script.setAttribute("data-lang", giscusLang);
    script.setAttribute("data-loading", "lazy");

    containerRef.current.appendChild(script);
  }, [slug, repo, repoId, category, categoryId, isConfigured]);

  useEffect(() => {
    const iframe = containerRef.current?.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
    if (!iframe?.contentWindow) return;

    iframe.contentWindow.postMessage(
      {
        giscus: {
          setConfig: {
            theme: giscusTheme,
            lang: giscusLang,
          },
        },
      },
      "https://giscus.app",
    );
  }, [giscusTheme, giscusLang]);

  return (
    <section className={sidebar ? "pt-2" : "mt-12 pt-8 border-t-2 border-black dark:border-neutral-100"}>
      <h2 className={sidebar
        ? "text-xs font-bold uppercase tracking-widest mb-4 opacity-50 border-b border-black/10 dark:border-neutral-100/10 pb-3"
        : "text-2xl font-bold uppercase tracking-tight mb-6"
      }>{t("评论", "Comments")}</h2>
      {isConfigured ? (
        <div ref={containerRef} className="giscus-container" />
      ) : (
        <p className="text-sm opacity-70">
          {t(
            "Giscus 未配置，请在 .env 中设置 VITE_GISCUS_REPO / VITE_GISCUS_REPO_ID / VITE_GISCUS_CATEGORY / VITE_GISCUS_CATEGORY_ID。",
            "Giscus is not configured. Please set VITE_GISCUS_REPO / VITE_GISCUS_REPO_ID / VITE_GISCUS_CATEGORY / VITE_GISCUS_CATEGORY_ID in .env."
          )}
        </p>
      )}
    </section>
  );
}

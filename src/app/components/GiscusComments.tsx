import { useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface GiscusCommentsProps {
  slug: string;
}

export default function GiscusComments({ slug }: GiscusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  const repo = import.meta.env.VITE_GISCUS_REPO || "JuneDrinleng/JuneDrinleng.github.io";
  const repoId = import.meta.env.VITE_GISCUS_REPO_ID || "";
  const category = import.meta.env.VITE_GISCUS_CATEGORY || "Announcements";
  const categoryId = import.meta.env.VITE_GISCUS_CATEGORY_ID || "";

  const isConfigured = Boolean(repo && repoId && category && categoryId);

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
    script.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    script.setAttribute("data-lang", language === "zh" ? "zh-CN" : "en");
    script.setAttribute("data-loading", "lazy");

    containerRef.current.appendChild(script);
  }, [slug, language, theme, repo, repoId, category, categoryId, isConfigured]);

  return (
    <section className="mt-12 pt-8 border-t-2 border-black dark:border-neutral-100">
      <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">{t("评论", "Comments")}</h2>
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

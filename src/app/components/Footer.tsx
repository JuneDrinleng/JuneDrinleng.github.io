import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";

interface FooterProps {
  compact?: boolean;
}

export default function Footer({ compact = false }: FooterProps) {
  const { isOwner, logout } = useAuth();
  const { t } = useLanguage();
  const year = Math.max(2026, new Date().getFullYear());

  return (
    <footer
      className="border-t-2"
      style={{ borderColor: "var(--kb-border)" }}
    >
      <div
        className={`${
          compact ? "max-w-4xl" : "max-w-7xl"
        } mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono-kb text-xs`}
        style={{ color: "var(--kb-ink-muted)" }}
      >
        <span>© 2023–{year} LUNE · Personal Knowledge Base</span>
        {isOwner && (
          <button
            type="button"
            onClick={logout}
            className="underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer sm:hidden"
          >
            {t("退出所有者登录", "Sign out")}
          </button>
        )}
      </div>
    </footer>
  );
}

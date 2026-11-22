import { Sun, Moon, Globe, Github, FileUser, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import SiteTransition from "./SiteTransition";

interface TitleBarProps {
  sweepKey?: number;
}

export default function TitleBar({ sweepKey = 0 }: TitleBarProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { isOwner, user, logout } = useAuth();
  const targetLanguageLabel = language === "zh" ? "EN" : "中文";
  const [transitioning, setTransitioning] = useState(false);

  return (
    <>
      <nav className="bg-[#0a0a0a] text-white sticky top-0 z-50 border-b border-white/15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-12 gap-3">
          {/* Left: Brand wordmark + KB badge */}
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <span className="font-display text-sm sm:text-base font-bold uppercase tracking-widest">
              LUNE
            </span>
            <span className="font-mono-kb text-xs px-1.5 py-0.5 border border-white/30 text-white/75 tracking-wider">
              KB
            </span>
          </Link>

          {/* Right: Controls */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            {/* Authenticated owner indicator + Logout */}
            {isOwner && (
              <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-white/20">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--kb-ok)" }}
                />
                <span className="font-mono-kb text-white/80">
                  @{user?.login || "JuneDrinleng"}
                </span>
                <button
                  type="button"
                  onClick={logout}
                  className="ml-1 inline-flex items-center gap-1 px-2 py-0.5 border border-white/25 hover:bg-white hover:text-black transition-colors cursor-pointer"
                  title={t("退出登录", "Sign out")}
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{t("退出", "Logout")}</span>
                </button>
              </div>
            )}

            {/* Switch to junedrinleng.com */}
            <button
              type="button"
              onClick={() => setTransitioning(true)}
              className="flex items-center gap-1.5 uppercase tracking-wider text-white/85 hover:text-white transition-opacity cursor-pointer"
              aria-label="Go to CV"
              title="junedrinleng.com"
            >
              <FileUser className="w-4 h-4" />
              <span className="hidden md:inline">
                {t("个人名片", "About Me")}
              </span>
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com/JuneDrinleng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white/85 hover:text-white transition-opacity"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="group flex items-center gap-1 font-mono-kb uppercase tracking-wider text-white/85 hover:text-white transition-opacity cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 transition-transform duration-300 group-active:scale-90 motion-reduce:transition-none" />
              <span
                key={targetLanguageLabel}
                className="inline-block animate-language-label"
              >
                {targetLanguageLabel}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center p-1 text-white/85 hover:text-white transition-opacity cursor-pointer"
              aria-label="Toggle theme"
            >
              <span
                key={theme}
                className="inline-flex items-center justify-center animate-theme-icon"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Route transition hairline sweep */}
        {sweepKey > 0 && (
          <div
            key={sweepKey}
            className="anim-top-sweep pointer-events-none absolute left-0 right-0 bottom-0 h-0.5 bg-white"
          />
        )}
      </nav>

      <SiteTransition
        targetUrl="https://junedrinleng.com"
        active={transitioning}
        theme={theme}
        onCancel={() => setTransitioning(false)}
      />
    </>
  );
}

import { Sun, Moon, Globe, Github, FileUser } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import SiteTransition from "./SiteTransition";

export default function TitleBar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const nextLanguageLabel = language === "zh" ? "中文" : "EN";
  const [transitioning, setTransitioning] = useState(false);

  return (
    <>
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-10 flex items-center justify-between h-10 sm:h-12">
          {/* Left: Site title */}
          <Link
            to="/"
            className="text-sm sm:text-base font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
          >
            LUNE
          </Link>

          {/* Right: Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Switch to junedrinleng.com */}
            <button
              onClick={() => setTransitioning(true)}
              className="flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider hover:opacity-80 transition-all duration-200"
              aria-label="Go to CV"
              title="junedrinleng.com"
            >
              <FileUser className="w-3.5 h-3.5 sm:w-4 sm:h-4" />

              <span key={nextLanguageLabel} className="hidden sm:inline">
                {language === "zh" ? "个人简历" : "About Me"}
              </span>
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com/JuneDrinleng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider hover:opacity-80 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="group flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider hover:opacity-80 transition-all duration-200"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-active:scale-90 motion-reduce:transition-none" />
              <span
                key={nextLanguageLabel}
                className="inline-block animate-language-label"
              >
                {nextLanguageLabel}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider hover:opacity-80 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <span
                key={theme}
                className="inline-flex items-center justify-center animate-theme-icon"
              >
                {theme === "light" ? (
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                ) : (
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </span>
            </button>
          </div>
        </div>
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

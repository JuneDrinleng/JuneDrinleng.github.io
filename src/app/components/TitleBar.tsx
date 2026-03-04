import { Sun, Moon, Globe } from 'lucide-react';
import { Link } from 'react-router';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function TitleBar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-10 sm:h-12">
        {/* Left: Site title */}
        <Link
          to="/"
          className="text-sm sm:text-base font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
        >
          LUNE
        </Link>

        {/* Right: Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{language === 'zh' ? 'EN' : '中文'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            ) : (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

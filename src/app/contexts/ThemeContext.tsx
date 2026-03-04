import {
  createContext,
  useContext,
  useState,
  useCallback,
  useLayoutEffect,
  type ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.style.colorScheme = theme;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const updateTheme = () => {
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => unknown;
    };

    if (reduceMotion) {
      updateTheme();
      return;
    }

    if (!doc.startViewTransition) {
      root.classList.add('theme-fading');
      updateTheme();
      window.setTimeout(() => {
        root.classList.remove('theme-fading');
      }, 240);
      return;
    }

    try {
      doc.startViewTransition(() => {
        updateTheme();
      });
    } catch {
      root.classList.add('theme-fading');
      updateTheme();
      window.setTimeout(() => {
        root.classList.remove('theme-fading');
      }, 240);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

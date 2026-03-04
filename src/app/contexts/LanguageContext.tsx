import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

export type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  t: (_zh: string, en: string) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const isFirstRender = useRef(true);

  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "zh" ? "zh" : "en") as Language;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language === "zh" ? "zh-CN" : "en";

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    root.classList.add("lang-switching");
    const timer = window.setTimeout(() => {
      root.classList.remove("lang-switching");
    }, 140);

    return () => {
      window.clearTimeout(timer);
      root.classList.remove("lang-switching");
    };
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === "zh" ? "en" : "zh";
      localStorage.setItem("language", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (zh: string, en: string) => {
      return language === "zh" ? zh : en;
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

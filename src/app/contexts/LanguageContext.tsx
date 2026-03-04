import {
  createContext,
  useContext,
  useState,
  useCallback,
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
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "zh" ? "zh" : "en") as Language;
  });

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

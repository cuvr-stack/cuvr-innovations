"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import translations, { Lang } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  isAr: boolean;
  t: typeof translations["en"];
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  isAr: false,
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const isAr = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, isAr, t: translations[lang] }}>
      <div
        dir={isAr ? "rtl" : "ltr"}
        className={isAr ? "font-cairo" : ""}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

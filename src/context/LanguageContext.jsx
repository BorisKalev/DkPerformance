"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("dk_lang");
    if (saved === "fr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem("dk_lang", l);
  };

  const t = (key) =>
    translations[lang]?.[key] ?? translations.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}

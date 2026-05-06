"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  APP_LANGUAGE_STORAGE_KEY,
  parseStoredLanguage,
} from "@/features/home/constants/language-storage";
import type { AppLanguage } from "@/features/home/types/home.types";

interface LanguageContextValue {
  language: AppLanguage;
  setLanguage: (language: AppLanguage) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLang(language: AppLanguage) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language;
  }
}

export function LanguageProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [language, setLanguageState] = useState<AppLanguage>("en");

  const setLanguage = useCallback((next: AppLanguage) => {
    setLanguageState(next);
    try {
      localStorage.setItem(APP_LANGUAGE_STORAGE_KEY, next);
    } catch {
      // ignore quota / private mode
    }
    applyDocumentLang(next);
  }, []);

  useEffect(() => {
    try {
      const stored = parseStoredLanguage(localStorage.getItem(APP_LANGUAGE_STORAGE_KEY));
      if (stored) {
        setLanguageState(stored);
        applyDocumentLang(stored);
      } else {
        applyDocumentLang("en");
      }
    } catch {
      applyDocumentLang("en");
    }
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

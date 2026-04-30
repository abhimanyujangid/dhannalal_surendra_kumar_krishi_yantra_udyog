"use client";

import { createContext, useContext } from "react";

import type { AppLanguage } from "@/features/home/types/home.types";

interface GalleryLanguageContextValue {
  language: AppLanguage;
}

const GalleryLanguageContext = createContext<GalleryLanguageContextValue | null>(null);

export function GalleryLanguageProvider({
  language,
  children,
}: {
  language: AppLanguage;
  children: React.ReactNode;
}) {
  return <GalleryLanguageContext.Provider value={{ language }}>{children}</GalleryLanguageContext.Provider>;
}

export function useGalleryLanguage() {
  const context = useContext(GalleryLanguageContext);
  if (!context) {
    throw new Error("useGalleryLanguage must be used inside GalleryLanguageProvider.");
  }
  return context;
}

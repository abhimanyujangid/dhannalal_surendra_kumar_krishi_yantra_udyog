"use client";

import { useMemo, useState } from "react";

import { HeroSection } from "@/features/home/components/HeroSection";
import { Navbar } from "@/features/home/components/Navbar";
import { HOME_DICTIONARY } from "@/features/home/data/hero.data";
import type { AppLanguage } from "@/features/home/types/home.types";
import { SiteFooter } from "@/components/layout/site-footer";

export function HomeView() {
  const [language, setLanguage] = useState<AppLanguage>("en");
  const dictionary = useMemo(() => HOME_DICTIONARY[language], [language]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar dictionary={dictionary} language={language} onLanguageChange={setLanguage} />
      <HeroSection dictionary={dictionary} />
      <SiteFooter />
    </main>
  );
}

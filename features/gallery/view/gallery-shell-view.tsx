"use client";

import { useMemo } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { GalleryTabs } from "@/features/gallery/components/gallery-tabs";
import { GalleryLanguageProvider } from "@/features/gallery/view/gallery-language-context";
import { Navbar } from "@/features/home/components/Navbar";
import { HOME_DICTIONARY } from "@/features/home/data/hero.data";
import { useLanguage } from "@/features/home/view/language-provider";

interface GalleryShellViewProps {
  children: React.ReactNode;
}

export function GalleryShellView({ children }: GalleryShellViewProps) {
  const { language, setLanguage } = useLanguage();
  const dictionary = useMemo(() => HOME_DICTIONARY[language], [language]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar dictionary={dictionary} language={language} onLanguageChange={setLanguage} />
      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
        <p className="text-sm uppercase tracking-[0.12em] text-[#ff8a00]">{language === "hi" ? "गैलरी" : "Gallery"}</p>
        <h1 className="mt-4 text-5xl leading-[1] tracking-[-0.05em] md:text-[82px]">
          {language === "hi" ? "फार्म मीडिया शोकेस" : "Farm media showcase."}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#3d3d3d]">
          {language === "hi"
            ? "हमारे कृषि व्यवसाय की इमेज और वीडियो सामग्री देखें।"
            : "Explore agriculture images and videos from our business operations."}
        </p>
        <GalleryLanguageProvider language={language}>
          <GalleryTabs />
          {children}
        </GalleryLanguageProvider>
      </section>
      <SiteFooter />
    </main>
  );
}

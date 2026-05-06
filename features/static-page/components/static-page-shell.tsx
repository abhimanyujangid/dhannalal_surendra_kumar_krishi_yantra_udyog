"use client";

import { useMemo } from "react";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { Navbar } from "@/features/home/components/Navbar";
import { HOME_DICTIONARY } from "@/features/home/data/hero.data";
import { useLanguage } from "@/features/home/view/language-provider";
import type { StaticPageContent } from "@/features/static-page/types/static-page.types";

interface StaticPageShellProps {
  content: StaticPageContent;
}

export function StaticPageShell({ content }: StaticPageShellProps) {
  const { language, setLanguage } = useLanguage();
  const dictionary = useMemo(() => HOME_DICTIONARY[language], [language]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar dictionary={dictionary} language={language} onLanguageChange={setLanguage} />
      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
        <p className="text-sm uppercase tracking-[0.12em] text-[#ff8a00]">Agriculture Website</p>
        <h1 className="mt-4 text-5xl leading-[1] tracking-[-0.05em] md:text-[82px]">{content.title}</h1>
        <p className="mt-6 max-w-2xl text-base text-[#3d3d3d]">{content.subtitle}</p>
        <div className="mt-8">
          <Link href="/" className="text-sm uppercase tracking-wide text-accent hover:underline">
            Back to Home
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

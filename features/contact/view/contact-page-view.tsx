"use client";

import { useMemo, useState } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { ContactDetails } from "@/features/contact/components/contact-details";
import { ContactForm } from "@/features/contact/components/contact-form";
import { CONTACT_PAGE_COPY } from "@/features/contact/data/contact.data";
import { Navbar } from "@/features/home/components/Navbar";
import { HOME_DICTIONARY } from "@/features/home/data/hero.data";
import type { AppLanguage } from "@/features/home/types/home.types";

export function ContactPageView() {
  const [language, setLanguage] = useState<AppLanguage>("en");
  const dictionary = useMemo(() => HOME_DICTIONARY[language], [language]);
  const copy = useMemo(() => CONTACT_PAGE_COPY[language], [language]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar dictionary={dictionary} language={language} onLanguageChange={setLanguage} />
      <section className="relative mx-auto w-full overflow-hidden px-6 py-14 md:py-20">
        <div className="pointer-events-none absolute -left-14 top-10 h-36 w-36 rounded-full bg-[#ffd06a]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-6 h-36 w-36 rounded-full bg-[#fa520f]/20 blur-3xl" />
        <p className="text-sm uppercase tracking-[0.12em] text-[#ff8a00]">{copy.eyebrow}</p>
        <h1 className="mt-4 text-5xl leading-[1] tracking-[-0.05em] md:text-[82px]">{copy.heading}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#3d3d3d]">
          {copy.description}
        </p>
        <div className="relative mt-10 grid gap-6 md:grid-cols-2">
          <ContactForm language={language} />
          <ContactDetails language={language} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

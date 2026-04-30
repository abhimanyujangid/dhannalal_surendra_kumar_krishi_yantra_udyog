"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { AppLanguage, HomeDictionary } from "@/features/home/types/home.types";

interface NavbarProps {
  dictionary: HomeDictionary;
  language: AppLanguage;
  onLanguageChange: (language: AppLanguage) => void;
}

export function Navbar({ dictionary, language, onLanguageChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActiveRoute = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="border-b border-black/10 bg-[#fff0c2]/70 backdrop-blur">
      <nav className="mx-auto w-full max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl tracking-[-0.03em] md:text-2xl">
            {dictionary.logo}
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {dictionary.navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-sm uppercase tracking-wide transition-colors ${
                    isActiveRoute(item.href) ? "text-accent" : "hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <span className="text-xs uppercase tracking-wide text-[#3d3d3d]">{dictionary.languageLabel}</span>
            <div className="flex items-center gap-1">
              <Button variant={language === "en" ? "default" : "cream"} size="sm" onClick={() => onLanguageChange("en")}>
                EN
              </Button>
              <Button variant={language === "hi" ? "default" : "cream"} size="sm" onClick={() => onLanguageChange("hi")}>
                HI
              </Button>
            </div>
            <Button variant="default" size="sm">
              {dictionary.quoteCta}
            </Button>
          </div>

          <Button
            variant="cream"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </Button>
        </div>

        <div
          className={`grid transition-all duration-300 ease-out md:hidden ${
            isMobileMenuOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-black/10 pt-4">
              <ul className="flex flex-col gap-3">
                {dictionary.navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`block text-sm uppercase tracking-wide transition-colors ${
                      isActiveRoute(item.href) ? "text-accent" : "hover:text-accent"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-2">
                <Button variant={language === "en" ? "default" : "cream"} size="sm" onClick={() => onLanguageChange("en")}>
                  EN
                </Button>
                <Button variant={language === "hi" ? "default" : "cream"} size="sm" onClick={() => onLanguageChange("hi")}>
                  HI
                </Button>
                <Button variant="default" size="sm">
                  {dictionary.quoteCta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

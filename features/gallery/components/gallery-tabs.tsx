"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { GALLERY_TABS } from "@/features/gallery/constants/gallery-tabs";
import { useGalleryLanguage } from "@/features/gallery/view/gallery-language-context";

export function GalleryTabs() {
  const pathname = usePathname();
  const { language } = useGalleryLanguage();

  return (
    <div className="mt-6 flex w-fit gap-2 bg-[#fff0c2]/80 p-1">
      {GALLERY_TABS.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-4 py-2 text-sm uppercase tracking-wide transition-colors ${
              isActive ? "bg-[#1f1f1f] text-white" : "text-[#1f1f1f] hover:bg-[#ffe295]"
            }`}
          >
            {language === "hi" ? tab.labelHi : tab.labelEn}
          </Link>
        );
      })}
    </div>
  );
}

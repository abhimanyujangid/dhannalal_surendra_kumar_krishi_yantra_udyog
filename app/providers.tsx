"use client";

import type { ReactNode } from "react";

import { LanguageProvider } from "@/features/home/view/language-provider";

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

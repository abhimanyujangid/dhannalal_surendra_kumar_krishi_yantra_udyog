import type { Metadata } from "next";
import { DM_Serif_Display, Jost, Playfair_Display } from "next/font/google";

import { SiteHeader } from "@/features/layout/components/site-header";
import "./globals.css";
import { HeroFooter } from "@/features/home/components/HeroFooter";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Focofirm | Sustainable Agriculture",
    template: "%s | Focofirm",
  },
  description: "Cultivating a greener future through sustainable agriculture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${dmSerif.variable} ${playfair.variable}`}>
      <body className="p-2">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

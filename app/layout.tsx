import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgroMistral | Agriculture Equipment Store",
  description:
    "AgroMistral is an agriculture equipment website where we sell modern farming tools, machines, and essential products for farmers and agri-businesses.",
  keywords: [
    "agriculture equipment",
    "farming tools",
    "agri machinery",
    "tractor equipment",
    "irrigation products",
    "farm supplies",
    "agriculture store",
    "AgroMistral",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

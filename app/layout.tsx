import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mistral Pattern Foundation",
  description: "Next.js + Tailwind + shadcn foundation with warm Mistral-inspired theme.",
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

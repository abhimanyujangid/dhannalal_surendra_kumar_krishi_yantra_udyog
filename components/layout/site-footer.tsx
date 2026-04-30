"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;
      const visible = Math.min(Math.max(viewport - rect.top, 0), rect.height + viewport);
      const raw = visible / (rect.height + viewport);
      setScrollProgress(Math.min(Math.max(raw, 0), 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const dynamicStyle = useMemo(
    () => ({
      background: `radial-gradient(420px circle at ${mouse.x}% ${mouse.y}%, rgba(255, 216, 0, 0.18), rgba(31, 31, 31, 0.05) 45%, rgba(31, 31, 31, 0) 70%)`,
      transform: `translateY(${(1 - scrollProgress) * 14}px)`,
      opacity: 0.55 + scrollProgress * 0.45,
    }),
    [mouse, scrollProgress],
  );

  const textVars = useMemo(
    () =>
      ({
        "--text-mouse-x": `${mouse.x}%`,
        "--text-mouse-y": `${mouse.y}%`,
        "--gradient-text-center": "#ffd900",
        "--gradient-text-edge": "#fa520f",
      }) as CSSProperties,
    [mouse],
  );

  return (
    <footer
      ref={footerRef}
      className="relative mt-16 overflow-hidden border-t border-black/10 bg-[#1f1f1f]"
      onMouseMove={(event) => {
        if (!footerRef.current) return;
        const rect = footerRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setMouse({ x, y });
      }}
    >
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 ease-out" style={dynamicStyle} />
      <div
        className="pointer-events-none absolute -right-12 top-8 h-48 w-48 rounded-full bg-[#fa520f]/15 blur-3xl transition-transform duration-500"
        style={{ transform: `translateY(${(1 - scrollProgress) * 26}px)` }}
      />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[#ffd900]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-12 text-white" style={textVars}>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="footer-logo-float inline-flex h-8 w-8 bg-gradient-to-b from-[#ffd900] via-[#ffa110] to-[#fa520f]" />
              <p className="animated-text text-2xl tracking-[-0.03em]">AgroMistral</p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/75">
              Modern agriculture solutions with warm, practical intelligence for farms and agri-businesses.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.12em] text-[#ffd06a]">Navigation</p>
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm uppercase tracking-wide text-white/85 transition-all duration-300 hover:translate-x-1 hover:text-[#ffd06a]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.12em] text-[#ffd06a]">Legal</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm uppercase tracking-wide text-white/85 transition-colors duration-300 hover:text-[#ffd06a]"
              >
                Privacy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm uppercase tracking-wide text-white/85 transition-colors duration-300 hover:text-[#ffd06a]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-4">
          <p className="text-xs uppercase tracking-[0.12em] text-white/60">© {new Date().getFullYear()} AgroMistral. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

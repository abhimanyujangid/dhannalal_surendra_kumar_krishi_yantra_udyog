import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";

import { SITE_NAV_ITEMS, SITE_NAME } from "@/features/layout/constants/navigation";

export function HeroFooter() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-6xl rounded-[18px] bg-[color:var(--color-primary)] p-4 text-white md:mt-14 md:p-8">
      <section className="rounded-[14px] bg-[#18b56f] p-5 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-end">
          <div>
            <h2 className="max-w-xl text-4xl leading-[1.08] font-normal tracking-[-0.02em] text-[#f2f6f2] md:text-6xl">
              We Look Forward To <span className="italic">Hear From You!</span>
            </h2>
            <p className="mt-5 max-w-md text-sm text-[#d9f2e3] md:text-base">
              We encourage you to reach out to us for any questions or additional information. We are always here to
              assist and look forward to connecting with you.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[color:var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-primary)] no-underline transition-transform duration-300 hover:-translate-y-0.5"
            >
              CONTACT US
            </Link>
          </div>

          <div className="relative min-h-[190px] overflow-hidden rounded-[18px] bg-[#20be78] md:min-h-[250px]">
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
              alt="Green cultivated farm field"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a1f]/35 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <div className="mt-6 flex flex-col gap-4 pt-5 md:mt-8 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-white no-underline">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-[color:var(--color-lime)]">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="text-3xl font-medium tracking-tight">{SITE_NAME}</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-2" aria-label="Footer navigation">
          {SITE_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full bg-white/12 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/90 no-underline transition-colors hover:bg-white/25"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-4 flex flex-col gap-3 pt-4 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <Link href="/terms" className="text-white/70 no-underline hover:text-white">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-white/70 no-underline hover:text-white">
            Privacy Policy
          </Link>
        </div>
        <p>©Copyright 2024 focofirm. All rights reserved.</p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, MenuIcon } from "lucide-react";

import { HeaderDrawer } from "@/features/layout/components/header-drawer";
import { SITE_CONTACT_CTA, SITE_NAME, SITE_NAV_ITEMS } from "@/features/layout/constants/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-shell md:pt-3 md:pb-2">
      <div className="nav-pill mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-white no-underline">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-lime)]/25 text-[color:var(--color-lime)]">
            <Leaf className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-[family-name:var(--font-body)] text-lg font-semibold tracking-tight">{SITE_NAME}</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex" aria-label="Primary">
          {SITE_NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-xs font-medium tracking-wide no-underline transition-colors md:px-4 md:text-sm",
                  active
                    ? "bg-white text-[color:var(--color-primary)]"
                    : "text-white/90 hover:bg-white/10 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={SITE_CONTACT_CTA.href}
          className="nav-cta hidden shrink-0 rounded-full px-5 py-2.5 text-center text-xs font-semibold tracking-wide text-white no-underline transition-transform hover:-translate-y-0.5 md:inline-flex md:text-sm"
        >
          {SITE_CONTACT_CTA.label}
        </Link>

        <HeaderDrawer
          drawerBtn={() => (
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/20 md:hidden"
              aria-label="Open navigation menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          )}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-3">
            {SITE_NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-semibold tracking-wide no-underline transition-colors",
                    active
                      ? "bg-[color:var(--color-primary)] text-white"
                      : "text-[#0f2318] hover:bg-[#e4e7e0] dark:text-[#0f2318]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href={SITE_CONTACT_CTA.href}
              className="mt-2 rounded-xl bg-[color:var(--color-primary)] px-4 py-3 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-[color:var(--color-primary-light)]"
            >
              {SITE_CONTACT_CTA.label}
            </Link>
          </div>
        </HeaderDrawer>
      </div>
    </header>
  );
}

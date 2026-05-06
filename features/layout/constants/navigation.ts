export interface NavItem {
  label: string;
  href: string;
}

export const SITE_NAME = "Focofirm";

export const SITE_NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "BENEFITS", href: "/benefits" },
  { label: "BLOG", href: "/blog" },
];

export const SITE_CONTACT_CTA = {
  label: "CONTACT US",
  href: "/contact",
} as const;

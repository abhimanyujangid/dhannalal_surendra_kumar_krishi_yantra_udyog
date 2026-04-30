export type AppLanguage = "en" | "hi";

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  highlightEyebrow: string;
  highlightTitle: string;
  highlightDescription: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HomeDictionary {
  languageLabel: string;
  logo: string;
  quoteCta: string;
  navItems: NavItem[];
  hero: HeroContent;
}

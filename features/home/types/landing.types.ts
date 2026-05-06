export interface LandingTeaserCard {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imageVariant: "rounded" | "circle";
}

export interface HeroNavItem {
  label: string;
  href: string;
}

export type IntroInlineImageClip = "clip-rect" | "clip-squiggle" | "clip-another";

export interface IntroInlineImage {
  src: string;
  alt: string;
  clipId: IntroInlineImageClip;
}

export interface LandingContent {
  brandName: string;
  heroNavItems: HeroNavItem[];
  heroPrimaryCta: {
    label: string;
    href: string;
  };
  heroTagline: string;
  heroAccentWord: string;
  heroImageSrc: string;
  heroImageAlt: string;
  introFirstLine: string;
  introSecondLine: string;
  introInlineImages: [IntroInlineImage, IntroInlineImage, IntroInlineImage];
  centerHeadline: string;
  centerHeadlineItalicParts: readonly string[];
  leftCard: LandingTeaserCard;
  rightCard: LandingTeaserCard;
}

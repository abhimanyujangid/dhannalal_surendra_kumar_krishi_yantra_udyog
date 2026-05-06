import type { LandingContent } from "@/features/home/types/landing.types";

export const LANDING_CONTENT: LandingContent = {
  brandName: "Focofirm",
  heroNavItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Benefits", href: "/benefits" },
  ],
  heroPrimaryCta: {
    label: "Get in Touch",
    href: "/contact",
  },
  heroTagline: "Cultivating a Greener Future Through Sustainable",
  heroAccentWord: "AGRICULTURE",
  heroImageSrc:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80",
  heroImageAlt: "Lush green crop rows in a field",
  introFirstLine: "At focofirm, we revolutionize agriculture with sustainable practices and innovative technologies.",
  introSecondLine:
    "Committed to environmental stewardship and community empowerment, we aim to lead farming towards a sustainable and prosperous future.",
  introInlineImages: [
    {
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=320&q=80",
      alt: "Green agriculture rows",
      clipId: "clip-rect",
    },
    {
      src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=260&q=80",
      alt: "Aerial farm fields",
      clipId: "clip-squiggle",
    },
    {
      src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=220&q=80",
      alt: "Farming portrait",
      clipId: "clip-another",
    },
  ],
  centerHeadline: "Transforming Agriculture with Smart Solutions For Sustainable Future",
  centerHeadlineItalicParts: ["Agriculture", "Sustainable Future"],
  leftCard: {
    title: "Enhancing Soil Health For Stronger Plants",
    description: "Healthy soil ensures strong plants through sustainable practices.",
    ctaLabel: "LEARN MORE",
    ctaHref: "/services",
    imageSrc:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Hands holding a young plant with roots",
    imageVariant: "rounded",
  },
  rightCard: {
    title: "Agriculture Integrated with Technology",
    description: "Technology-integrated agriculture revolutionizes global farming.",
    ctaLabel: "LEARN MORE",
    ctaHref: "/services",
    imageSrc:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Windmill in a green field",
    imageVariant: "circle",
  },
};

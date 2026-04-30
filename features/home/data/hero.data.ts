import type { AppLanguage, HomeDictionary } from "@/features/home/types/home.types";

export const HOME_DICTIONARY: Record<AppLanguage, HomeDictionary> = {
  en: {
    languageLabel: "Language",
    logo: "AgroMistral",
    quoteCta: "Get Quote",
    navItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Product", href: "/product" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    hero: {
      eyebrow: "Sustainable Agriculture Business",
      title: "Growing better crops with warm, modern farming intelligence.",
      description:
        "We help farms improve yield, reduce waste, and build resilient harvest cycles through practical agri-services and technology.",
      primaryCta: "Explore Products",
      secondaryCta: "Contact Team",
      highlightEyebrow: "Season Highlight",
      highlightTitle: "Smart irrigation and crop planning for stronger harvest outcomes.",
      highlightDescription: "Built for modern agriculture teams that need practical decisions, not complexity.",
    },
  },
  hi: {
    languageLabel: "भाषा",
    logo: "एग्रोमिस्ट्रल",
    quoteCta: "कोट पाएं",
    navItems: [
      { label: "होम", href: "/" },
      { label: "अबाउट", href: "/about" },
      { label: "प्रोडक्ट", href: "/product" },
      { label: "गैलरी", href: "/gallery" },
      { label: "कॉन्टैक्ट", href: "/contact" },
    ],
    hero: {
      eyebrow: "सस्टेनेबल एग्रीकल्चर बिज़नेस",
      title: "आधुनिक खेती की समझ के साथ बेहतर फसल उगाइए।",
      description:
        "हम किसानों को बेहतर उत्पादन, कम बर्बादी और मजबूत हार्वेस्ट साइकिल के लिए व्यावहारिक सेवाएं और तकनीक देते हैं।",
      primaryCta: "प्रोडक्ट देखें",
      secondaryCta: "टीम से संपर्क करें",
      highlightEyebrow: "सीजन हाइलाइट",
      highlightTitle: "मजबूत पैदावार के लिए स्मार्ट सिंचाई और फसल योजना।",
      highlightDescription: "आधुनिक कृषि टीमों के लिए, जहां जटिलता नहीं बल्कि व्यावहारिक निर्णय चाहिए।",
    },
  },
};

import type { AppLanguage } from "@/features/home/types/home.types";
import type { ContactDetails, ContactFormFields, ContactPageCopy } from "@/features/contact/types/contact.types";

export const CONTACT_PAGE_COPY: Record<AppLanguage, ContactPageCopy> = {
  en: {
    eyebrow: "Contact",
    heading: "Let us grow your business.",
    description: "Share your farming goals and we will help with practical agriculture solutions.",
  },
  hi: {
    eyebrow: "संपर्क",
    heading: "आइए आपके बिज़नेस को साथ में आगे बढ़ाएं।",
    description: "अपनी खेती से जुड़ी ज़रूरत बताइए, हम व्यावहारिक कृषि समाधान देने में मदद करेंगे।",
  },
};

export const CONTACT_FORM_FIELDS: Record<AppLanguage, ContactFormFields> = {
  en: {
    title: "Contact Form",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send Message",
    namePlaceholder: "Your full name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Write your requirement...",
  },
  hi: {
    title: "संपर्क फॉर्म",
    nameLabel: "नाम",
    emailLabel: "ईमेल",
    messageLabel: "संदेश",
    submitLabel: "संदेश भेजें",
    namePlaceholder: "अपना पूरा नाम लिखें",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "अपनी आवश्यकता लिखें...",
  },
};

export const CONTACT_DETAILS: Record<AppLanguage, ContactDetails> = {
  en: {
    title: "Brand Details",
    phoneLabel: "Phone",
    emailLabel: "Email",
    brandName: "AgroMistral",
    phone: "+91 98765 43210",
    email: "hello@agromistral.com",
  },
  hi: {
    title: "ब्रांड विवरण",
    phoneLabel: "फोन",
    emailLabel: "ईमेल",
    brandName: "एग्रोमिस्ट्रल",
    phone: "+91 98765 43210",
    email: "hello@agromistral.com",
  },
};

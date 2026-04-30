import type { GalleryImageItem, GalleryVideoItem } from "@/features/gallery/types/gallery.types";

export const GALLERY_IMAGES: GalleryImageItem[] = [
  {
    id: "img-1",
    title: { en: "Harvest Field", hi: "फसल का खेत" },
    description: {
      en: "Golden crop fields captured during peak harvest season.",
      hi: "कटाई के मौसम में सुनहरे खेतों का दृश्य।",
    },
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    alt: "Golden agricultural field landscape",
  },
  {
    id: "img-2",
    title: { en: "Farm Rows", hi: "खेती की कतारें" },
    description: {
      en: "Aligned crop rows showing precision farming preparation.",
      hi: "सटीक खेती की तैयारी दिखाती व्यवस्थित फसल कतारें।",
    },
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    alt: "Long crop rows in a farm",
  },
  {
    id: "img-3",
    title: { en: "Irrigation", hi: "सिंचाई" },
    description: {
      en: "Efficient irrigation setup improving crop sustainability.",
      hi: "बेहतर उत्पादन और स्थिरता के लिए कुशल सिंचाई व्यवस्था।",
    },
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    alt: "Irrigation system in field",
  },
];

export const GALLERY_VIDEOS: GalleryVideoItem[] = [
  {
    id: "vid-1",
    title: { en: "Farm Overview", hi: "फार्म ओवरव्यू" },
    description: {
      en: "Quick overview video of farm operations and field conditions.",
      hi: "फार्म संचालन और खेत की स्थिति का त्वरित वीडियो अवलोकन।",
    },
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "vid-2",
    title: { en: "Crop Monitoring", hi: "फसल मॉनिटरिंग" },
    description: {
      en: "Monitoring footage focused on crop health and growth stages.",
      hi: "फसल की सेहत और विकास चरणों पर केंद्रित मॉनिटरिंग फुटेज।",
    },
    src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
  },
];

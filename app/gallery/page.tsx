import type { Metadata } from "next";

import { GalleryView } from "@/features/static-page/view/gallery-view";

export const metadata: Metadata = {
  title: "Gallery | AgroMistral",
  description: "View agriculture-focused visuals and project highlights from AgroMistral.",
};

export default function GalleryPage() {
  return <GalleryView />;
}

import type { Metadata } from "next";

import { GalleryImageView } from "@/features/gallery/view/gallery-image-view";

export const metadata: Metadata = {
  title: "Gallery Images | AgroMistral",
  description: "Agriculture image gallery from AgroMistral.",
};

export default function GalleryImagePage() {
  return <GalleryImageView />;
}

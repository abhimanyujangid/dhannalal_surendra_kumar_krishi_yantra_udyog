import type { Metadata } from "next";
import { GalleryImagesView } from "@/features/gallery/view/gallery-images-view";

export const metadata: Metadata = {
  title: "Gallery - Images",
  description: "Explore our smart farming solutions and sustainable agriculture practices through our image gallery.",
};

export default function GalleryImagesPage() {
  return <GalleryImagesView />;
}

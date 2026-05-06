import type { Metadata } from "next";
import { GalleryVideosView } from "@/features/gallery/view/gallery-videos-view";

export const metadata: Metadata = {
  title: "Gallery - Videos",
  description: "Watch our smart farming solutions and sustainable agriculture practices in action.",
};

export default function GalleryVideosPage() {
  return <GalleryVideosView />;
}

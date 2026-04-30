import type { Metadata } from "next";

import { GalleryVideoView } from "@/features/gallery/view/gallery-video-view";

export const metadata: Metadata = {
  title: "Gallery Videos | AgroMistral",
  description: "Agriculture video gallery from AgroMistral.",
};

export default function GalleryVideoPage() {
  return <GalleryVideoView />;
}

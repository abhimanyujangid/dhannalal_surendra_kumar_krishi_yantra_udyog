import type { Metadata } from "next";

import { GalleryShellView } from "@/features/gallery/view/gallery-shell-view";

export const metadata: Metadata = {
  title: "Gallery | AgroMistral",
  description: "Browse agriculture images and videos from AgroMistral.",
};

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <GalleryShellView>{children}</GalleryShellView>;
}

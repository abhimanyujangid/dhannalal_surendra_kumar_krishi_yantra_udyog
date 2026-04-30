import type { Metadata } from "next";

import { AboutView } from "@/features/static-page/view/about-view";

export const metadata: Metadata = {
  title: "About | AgroMistral",
  description: "Learn about AgroMistral and our agriculture-focused business approach.",
};

export default function AboutPage() {
  return <AboutView />;
}

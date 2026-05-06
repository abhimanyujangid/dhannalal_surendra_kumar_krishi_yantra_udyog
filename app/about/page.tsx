import type { Metadata } from "next";
import { AboutView } from "@/features/about/view/about-view";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our journey and sustainable agriculture.",
};

export default function AboutPage() {
  return <AboutView />;
}

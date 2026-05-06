import type { Metadata } from "next";

import { LandingView } from "@/features/home/view/landing-view";

export const metadata: Metadata = {
  title: "Home",
  description: "Focofirm — sustainable agriculture and smart farming solutions.",
};

export default function HomePage() {
  return <LandingView />;
}

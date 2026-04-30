import type { Metadata } from "next";

import { StaticPageShell } from "@/features/static-page/components/static-page-shell";

export const metadata: Metadata = {
  title: "Privacy | AgroMistral",
  description: "Privacy information for AgroMistral website visitors and customers.",
};

export default function PrivacyPage() {
  return <StaticPageShell content={{ title: "Privacy", subtitle: "Privacy page shell is ready. Content will be added next." }} />;
}

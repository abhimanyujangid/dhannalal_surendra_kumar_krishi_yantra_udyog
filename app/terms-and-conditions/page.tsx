import type { Metadata } from "next";

import { StaticPageShell } from "@/features/static-page/components/static-page-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions | AgroMistral",
  description: "Terms and conditions for AgroMistral website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <StaticPageShell
      content={{ title: "Terms & Conditions", subtitle: "Terms and conditions page shell is ready. Content will be added next." }}
    />
  );
}

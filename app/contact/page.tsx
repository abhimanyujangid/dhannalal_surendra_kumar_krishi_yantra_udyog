import type { Metadata } from "next";

import { ContactPageView } from "@/features/contact/view/contact-page-view";

export const metadata: Metadata = {
  title: "Contact | AgroMistral",
  description: "Contact AgroMistral for agriculture business solutions and support.",
};

export default function ContactPage() {
  return <ContactPageView />;
}

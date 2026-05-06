import type { Metadata } from "next";
import { ContactView } from "@/features/contact/view/contact-view";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for smart farming solutions and inquiries.",
};

export default function ContactPage() {
  return <ContactView />;
}

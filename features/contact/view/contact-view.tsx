import { CONTACT_CONTENT } from "../data/contact.data";
import { ContactHero } from "../components/contact-hero";
import { ContactForm } from "../components/contact-form";

export function ContactView() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col pt-10 pb-20 px-4 md:px-8 max-w-7xl mx-auto font-body">
      <ContactHero data={CONTACT_CONTENT.hero} />
      <ContactForm data={CONTACT_CONTENT} />
    </main>
  );
}

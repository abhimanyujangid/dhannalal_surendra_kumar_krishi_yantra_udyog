import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CONTACT_FORM_FIELDS } from "@/features/contact/data/contact.data";
import type { AppLanguage } from "@/features/home/types/home.types";

interface ContactFormProps {
  language: AppLanguage;
}

export function ContactForm({ language }: ContactFormProps) {
  const copy = CONTACT_FORM_FIELDS[language];

  return (
    <Card className="border border-[#ffb83e]/50 bg-[#fff7df]/85 backdrop-blur">
      <CardHeader>
        <CardTitle>{copy.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm uppercase tracking-wide">
              {copy.nameLabel}
            </label>
            <Input id="name" name="name" placeholder={copy.namePlaceholder} />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm uppercase tracking-wide">
              {copy.emailLabel}
            </label>
            <Input id="email" name="email" type="email" placeholder={copy.emailPlaceholder} />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm uppercase tracking-wide">
              {copy.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={copy.messagePlaceholder}
              className="border-input bg-white placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-sm border px-3 py-2 text-base outline-none focus-visible:ring-2"
            />
          </div>
          <Button type="submit">{copy.submitLabel}</Button>
        </form>
      </CardContent>
    </Card>
  );
}

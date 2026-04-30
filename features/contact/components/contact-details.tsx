import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_DETAILS } from "@/features/contact/data/contact.data";
import type { AppLanguage } from "@/features/home/types/home.types";

interface ContactDetailsProps {
  language: AppLanguage;
}

export function ContactDetails({ language }: ContactDetailsProps) {
  const copy = CONTACT_DETAILS[language];

  return (
    <Card className="relative overflow-hidden bg-gradient-to-b from-[#ffd900] via-[#ffa110] to-[#fa520f] text-white">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
      <CardHeader>
        <CardTitle className="text-white">{copy.title}</CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 bg-[#1f1f1f]" />
          <p className="text-2xl tracking-[-0.02em]">{copy.brandName}</p>
        </div>
        <p className="text-sm uppercase tracking-[0.12em] text-white/90">{copy.phoneLabel}</p>
        <p className="text-lg">{copy.phone}</p>
        <p className="text-sm uppercase tracking-[0.12em] text-white/90">{copy.emailLabel}</p>
        <p className="text-lg">{copy.email}</p>
      </CardContent>
    </Card>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { HomeDictionary } from "@/features/home/types/home.types";

interface HeroSectionProps {
  dictionary: HomeDictionary;
}

export function HeroSection({ dictionary }: HeroSectionProps) {
  const hero = dictionary.hero;

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,250,235,0.85), rgba(255,250,235,0.85)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 md:grid-cols-2 md:items-end md:py-20">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.12em] text-[#ff8a00]">{hero.eyebrow}</p>
          <h1 className="text-5xl leading-[1] tracking-[-0.05em] md:text-[82px]">{hero.title}</h1>
          <p className="max-w-xl text-base leading-relaxed text-[#3d3d3d]">{hero.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button>{hero.primaryCta}</Button>
            <Button variant="cream">{hero.secondaryCta}</Button>
          </div>
        </div>

        <Card className="bg-gradient-to-b from-[#ffd900] via-[#ffa110] to-[#fa520f]">
          <CardContent className="space-y-6 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.12em]">{hero.highlightEyebrow}</p>
            <p className="text-3xl leading-tight tracking-[-0.02em] md:text-4xl">{hero.highlightTitle}</p>
            <p className="text-sm/relaxed text-white/90">{hero.highlightDescription}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

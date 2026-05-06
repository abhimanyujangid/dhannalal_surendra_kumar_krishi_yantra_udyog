import { ABOUT_CONTENT } from "../data/about.data";
import { AboutHero } from "../components/about-hero";
import { AboutOwner } from "../components/about-owner";

export function AboutView() {
  const { hero, ownerMessage } = ABOUT_CONTENT;

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col pt-12 pb-20 px-4 md:px-8 max-w-7xl mx-auto font-body">
      <AboutHero data={hero} />
      <AboutOwner data={ownerMessage} />
    </main>
  );
}

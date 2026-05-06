import { LANDING_CONTENT } from "@/features/home/data/landing.data";
import { HeroImage } from "@/features/home/components/HeroImage";
import { IntroStatement } from "@/features/home/components/IntroStatement";
import ImageReveal from "../components/ImageReveal";
import { HeroFooter } from "../components/HeroFooter";

export function LandingView() {
  const {
    brandName,
    heroNavItems,
    heroPrimaryCta,
    heroImageSrc,
    heroImageAlt,
    introFirstLine,
    introSecondLine,
    introInlineImages,
  } = LANDING_CONTENT;

  return (
    <main className="site-shell px-3 pb-14 pt-6 sm:px-4 md:px-6 md:pb-20 md:pt-10">
      {/* <IntroStatement
        firstLine={introFirstLine}
        secondLine={introSecondLine}
        images={introInlineImages}
      /> */}
      <ImageReveal />
      <HeroFooter />  
    </main>
  );
}

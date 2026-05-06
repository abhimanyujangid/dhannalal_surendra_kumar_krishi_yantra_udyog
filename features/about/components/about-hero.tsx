import TextAnimation from "@/components/uilayouts/scroll-text";
import { type AboutContent } from "../data/about.data";

interface AboutHeroProps {
  data: AboutContent["hero"];
}

export function AboutHero({ data }: AboutHeroProps) {
  return (
    <section className="mb-24 md:mb-32">
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
        <TextAnimation 
          text={data.headlineLine1}
          direction="left" 
          as="span" 
          classname="!text-[var(--color-primary)] block" 
        />
        <TextAnimation 
          text={data.headlineLine2}
          direction="right" 
          as="span" 
          classname="!text-[var(--color-lime)] italic block" 
        />
      </h1>
      <div className="w-full h-[1px] bg-[var(--color-border)] my-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl">
        {data.paragraphs.map((text, index) => (
          <TextAnimation 
            key={index}
            text={text}
            as="p" 
            viewport={{ amount: 0.1, once: true }} 
            lineAnime={true}
            classname="!text-[var(--color-muted)] text-left lowercase normal-case"
          />
        ))}
      </div>
    </section>
  );
}

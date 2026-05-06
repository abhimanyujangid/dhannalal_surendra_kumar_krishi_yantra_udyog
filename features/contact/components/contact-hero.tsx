import TextAnimation from "@/components/uilayouts/scroll-text";
import { type ContactContent } from "../data/contact.data";

interface ContactHeroProps {
  data: ContactContent["hero"];
}

export function ContactHero({ data }: ContactHeroProps) {
  return (
    <section className="mb-16 md:mb-24">
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
      <div className="w-full h-[1px] bg-[var(--color-border)] my-8" />
      <div className="max-w-2xl text-lg md:text-xl">
        {data.paragraphs.map((text, index) => (
          <TextAnimation 
            key={index}
            text={text}
            as="p" 
            viewport={{ amount: 0.1, once: true }} 
            lineAnime={true}
            classname="!text-[var(--color-muted)] text-left lowercase normal-case mb-4"
          />
        ))}
      </div>
    </section>
  );
}

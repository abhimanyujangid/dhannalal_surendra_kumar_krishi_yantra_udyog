import Image from "next/image";
import TextAnimation from "@/components/uilayouts/scroll-text";
import { type AboutContent } from "../data/about.data";

interface AboutOwnerProps {
  data: AboutContent["ownerMessage"];
}

export function AboutOwner({ data }: AboutOwnerProps) {
  return (
    <section className="bg-[var(--color-surface)] border border-[var(--color-gold)]/30 rounded-none p-8 md:p-16 lg:p-24 shadow-[0_0_0_2px_rgba(200,168,75,0.1),0_12px_40px_rgba(0,0,0,0.08)] mb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)] opacity-10 blur-2xl transform translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
        <div className="w-full md:w-5/12">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            <TextAnimation text={data.heading} direction="down" as="span" classname="!text-[var(--color-dark)]" />
          </h2>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-none overflow-hidden shadow-[4px_4px_0_0_var(--color-gold)]">
              <Image 
                src={data.image} 
                alt={data.name} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 96px, 128px"
              />
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-[var(--color-gold)] pl-6 py-2">
              <TextAnimation 
                text={data.name} 
                direction="left" 
                as="span" 
                classname="font-display text-2xl md:text-3xl !text-[var(--color-dark)]" 
              />
              <TextAnimation 
                text={data.role} 
                direction="left" 
                as="span" 
                classname="font-body text-xs md:text-sm uppercase tracking-widest !text-[var(--color-gold)] font-medium" 
              />
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-7/12 flex flex-col gap-6 relative">
          <div className="font-display text-8xl text-[var(--color-gold)] opacity-20 leading-none absolute -top-8 -left-8">"</div>
          <div className="flex flex-col gap-6 relative z-10">
            {data.message.map((text, index) => (
              <TextAnimation 
                key={index}
                text={text}
                as="p" 
                classname="text-lg md:text-xl font-light !text-[var(--color-text)] leading-relaxed lowercase normal-case"
                lineAnime={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

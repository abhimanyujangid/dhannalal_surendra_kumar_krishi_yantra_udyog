import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] rounded-tl-[28px] rounded-tr-[28px]">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[21/9]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1d3327]/28 via-transparent to-transparent" />
      </div>
    </div>
  );
}

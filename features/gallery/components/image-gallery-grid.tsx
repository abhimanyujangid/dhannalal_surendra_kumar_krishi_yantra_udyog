"use client";

import { Plus } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogImage,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/linear-modal";
import { GALLERY_IMAGES } from "@/features/gallery/data/gallery.data";
import { useGalleryLanguage } from "@/features/gallery/view/gallery-language-context";

export function ImageGalleryGrid() {
  const { language } = useGalleryLanguage();

  return (
    <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {GALLERY_IMAGES.map((item) => (
        <Dialog
          key={item.id}
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.5,
          }}
        >
          <DialogTrigger className="group relative flex h-72 w-full flex-col overflow-hidden border border-black/10 bg-white text-left">
            <DialogImage src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/65 to-transparent p-4">
              <DialogTitle className="text-xl text-white">{item.title[language]}</DialogTitle>
              <span className="rounded-sm bg-white/85 p-2 text-black">
                <Plus className="h-5 w-5" />
              </span>
            </div>
          </DialogTrigger>
          <DialogContainer className="grid h-full w-full place-items-center">
            <DialogContent className="mx-auto h-fit w-[92%] overflow-hidden border border-[#ffb83e]/40 bg-[#fff8e8] md:w-[78%] lg:w-[68%]">
              <div className="max-h-[82vh] overflow-y-auto">
                <DialogImage src={item.src} alt={item.alt} className="h-[52vh] w-full object-cover" />
                <div className="space-y-3 p-6">
                  <DialogTitle className="text-4xl leading-tight tracking-[-0.03em] text-[#1f1f1f] md:text-5xl">
                    {item.title[language]}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed text-[#3d3d3d]">
                    {item.description[language]}
                  </DialogDescription>
                  <DialogClose className="mt-3 bg-[#1f1f1f] px-4 py-2 text-sm uppercase tracking-wide text-white" />
                </div>
              </div>
            </DialogContent>
          </DialogContainer>
        </Dialog>
      ))}
    </section>
  );
}

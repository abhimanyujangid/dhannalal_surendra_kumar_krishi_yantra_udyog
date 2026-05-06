"use client";

import { cn } from "@/lib/utils";
import { type GalleryImage } from "../data/gallery.data";
import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogImage,
  DialogTitle,
  DialogTrigger,
} from '@/components/uilayouts/linear-modal';
import { Plus } from 'lucide-react';

interface ImageGridProps {
  images: readonly GalleryImage[];
}

export function ImageGrid({ images }: ImageGridProps) {
  const getGridClasses = (index: number) => {
    switch(index % 6) {
      case 0: return "md:col-span-2 md:row-span-2 aspect-[16/10] md:aspect-auto"; 
      case 1: return "md:col-span-1 md:row-span-1 aspect-square"; 
      case 2: return "md:col-span-1 md:row-span-1 aspect-square"; 
      case 3: return "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto"; 
      case 4: return "md:col-span-2 md:row-span-1 aspect-[21/9] md:aspect-auto"; 
      case 5: return "md:col-span-1 md:row-span-1 aspect-square"; 
      default: return "aspect-square";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full auto-rows-[250px] md:auto-rows-[300px]">
      {images.map((image, index) => (
        <Dialog
          key={image.id}
          transition={{
            type: 'spring',
            bounce: 0.05,
            duration: 0.5,
          }}
        >
          <DialogTrigger
            className={cn(
              "group flex w-full h-full relative cursor-pointer overflow-hidden shadow-[0_0_0_1px_rgba(200,168,75,0.1)] hover:shadow-[12px_12px_0_0_var(--color-gold)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-500 bg-[var(--color-dark)] rounded-2xl",
              getGridClasses(index)
            )}
          >
            <DialogImage 
              src={image.url} 
              alt={image.title} 
              className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/90 via-[var(--color-dark)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-20">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-[var(--color-lime)] mb-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out text-left">
                View Project
              </span>
              <DialogTitle className="font-display text-3xl md:text-4xl text-[var(--color-surface)] translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out text-left">
                {image.title}
              </DialogTitle>
            </div>
            <button className='absolute bottom-6 right-6 text-[var(--color-surface)] hover:text-[var(--color-gold)] transition-colors opacity-0 group-hover:opacity-100 z-30 drop-shadow-md'>
              <Plus className='w-8 h-8' />
            </button>
          </DialogTrigger>
          
          <DialogContainer className='grid place-items-center h-full z-50 fixed inset-0'>
            <DialogContent className='h-fit mx-auto bg-transparent rounded-none outline-none'>
              <div className='flex flex-col md:flex-row relative bg-[var(--color-surface)] w-[90vw] md:w-[85vw] lg:w-[70vw] max-h-[90vh] overflow-hidden shadow-[8px_8px_0_0_var(--color-gold)] rounded-2xl'>
                <div className='w-full md:w-1/2 lg:w-3/5 h-[40vh] md:h-auto overflow-hidden bg-[var(--color-dark)] flex items-center justify-center relative'>
                  <DialogImage
                    src={image.url}
                    alt={image.title}
                    className='h-full w-full object-cover'
                  />
                </div>

                <div className='w-full md:w-1/2 lg:w-2/5 p-8 md:p-12 overflow-y-auto border-l-0 md:border-l-4 border-[var(--color-gold)] flex flex-col justify-center min-h-[40vh]'>
                  <DialogTitle className='font-heading text-3xl md:text-4xl text-[var(--color-dark)] mb-6 leading-tight'>
                    {image.title}
                  </DialogTitle>
                  <div className="w-12 h-1 bg-[var(--color-lime)] mb-6 shrink-0" />
                  <DialogDescription
                    disableLayoutAnimation
                    variants={{
                      initial: { opacity: 0, scale: 0.95, y: -20 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.95, y: -20 },
                    }}
                  >
                    <p className='font-body text-lg text-[var(--color-muted)] leading-relaxed'>
                      {image.description}
                    </p>
                  </DialogDescription>
                </div>
                <DialogClose className='absolute top-4 right-4 text-[var(--color-dark)] bg-[var(--color-surface)] hover:text-[var(--color-gold)] transition-colors p-2 rounded-none shadow-sm z-50' />
              </div>
            </DialogContent>
          </DialogContainer>
        </Dialog>
      ))}
    </div>
  );
}

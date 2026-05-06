"use client";

import { cn } from "@/lib/utils";
import { type GalleryVideo } from "../data/gallery.data";
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
import { Play } from 'lucide-react';

interface VideoGridProps {
  videos: readonly GalleryVideo[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  // Extract YouTube ID to get thumbnail
  const getYoutubeId = (url: string) => {
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {videos.map((video) => {
        const videoId = getYoutubeId(video.url);
        const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "";

        return (
          <Dialog
            key={video.id}
            transition={{
              type: 'spring',
              bounce: 0.05,
              duration: 0.5,
            }}
          >
            <DialogTrigger
              className="group flex w-full h-full relative cursor-pointer overflow-hidden shadow-[0_0_0_1px_rgba(200,168,75,0.1)] hover:shadow-[12px_12px_0_0_var(--color-gold)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-500 bg-[var(--color-dark)] rounded-2xl aspect-video"
            >
              <DialogImage 
                src={thumbnailUrl} 
                alt={video.title} 
                className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:opacity-40" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[var(--color-gold)] text-[var(--color-dark)] rounded-full p-4 transform transition-transform duration-500 group-hover:scale-110 shadow-lg">
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 z-20">
                <DialogTitle className="font-display text-2xl md:text-3xl text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out text-left drop-shadow-sm">
                  {video.title}
                </DialogTitle>
              </div>
            </DialogTrigger>
            
            <DialogContainer className='grid place-items-center h-full z-50 fixed inset-0'>
              <DialogContent className='h-fit mx-auto bg-transparent rounded-none outline-none'>
                <div className='flex flex-col relative bg-[var(--color-surface)] w-[90vw] md:w-[80vw] lg:w-[70vw] overflow-hidden shadow-[8px_8px_0_0_var(--color-gold)] rounded-2xl'>
                  <div className='w-full aspect-video overflow-hidden bg-[var(--color-dark)] relative'>
                    <iframe
                      src={`${video.url}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-none z-10"
                    />
                    {/* The DialogImage acts as the morphing placeholder before the iframe loads */}
                    <DialogImage
                      src={thumbnailUrl}
                      alt={video.title}
                      className='absolute inset-0 h-full w-full object-cover opacity-50'
                    />
                  </div>

                  <div className='w-full p-6 md:p-8 border-t-4 border-[var(--color-gold)] flex flex-col justify-center'>
                    <DialogTitle className='font-heading text-2xl md:text-3xl text-[var(--color-dark)]'>
                      {video.title}
                    </DialogTitle>
                  </div>
                  <DialogClose className='absolute top-4 right-4 text-[var(--color-surface)] bg-[var(--color-dark)]/80 hover:bg-[var(--color-gold)] hover:text-[var(--color-dark)] transition-colors p-2 rounded-none shadow-sm z-50' />
                </div>
              </DialogContent>
            </DialogContainer>
          </Dialog>
        );
      })}
    </div>
  );
}

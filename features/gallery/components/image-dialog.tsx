"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";
import { type GalleryImage } from "../data/gallery.data";

interface ImageDialogProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export function ImageDialog({ image, onClose }: ImageDialogProps) {
  // Prevent scrolling when dialog is open
  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [image]);

  return (
    <AnimatePresence>
      {image && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[var(--color-dark)]/90 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-6xl bg-[var(--color-surface)] flex flex-col md:flex-row shadow-[8px_8px_0_0_var(--color-gold)] rounded-none overflow-hidden max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-[var(--color-surface)] p-2 rounded-full text-[var(--color-dark)] hover:text-[var(--color-gold)] transition-colors shadow-md"
              aria-label="Close dialog"
            >
              <X size={24} />
            </button>
            
            <div className="w-full md:w-2/3 relative h-[40vh] md:h-[80vh] bg-black">
              <Image 
                src={image.url} 
                alt={image.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
            </div>
            
            <div className="w-full md:w-1/3 bg-[var(--color-surface)] p-8 md:p-12 flex flex-col justify-center border-l-4 border-[var(--color-gold)] overflow-y-auto h-[50vh] md:h-[80vh]">
              <h3 className="font-heading text-3xl md:text-4xl text-[var(--color-dark)] mb-6 leading-tight">
                {image.title}
              </h3>
              <div className="w-12 h-1 bg-[var(--color-lime)] mb-6 shrink-0" />
              <p className="font-body text-lg text-[var(--color-muted)] leading-relaxed">
                {image.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

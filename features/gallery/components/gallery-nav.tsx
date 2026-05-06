"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function GalleryNav() {
  const pathname = usePathname();
  const isVideos = pathname === "/gallery/videos";
  
  return (
    <nav className="flex items-center justify-center mb-20 relative z-20">
      <div className="flex bg-[var(--color-surface)] border border-[var(--color-gold)]/30 shadow-[4px_4px_0_0_var(--color-gold)] p-1.5 rounded-none">
        <Link 
          href="/gallery" 
          className={cn(
            "relative px-10 py-3 font-heading text-xl md:text-2xl tracking-widest transition-colors duration-500 z-10",
            !isVideos ? "text-[var(--color-surface)]" : "text-[var(--color-muted)] hover:text-[var(--color-dark)]"
          )}
        >
          {(!isVideos) && (
            <motion.div 
              layoutId="nav-pill"
              className="absolute inset-0 bg-[var(--color-primary)] -z-10"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          Images
        </Link>
        <Link 
          href="/gallery/videos" 
          className={cn(
            "relative px-10 py-3 font-heading text-xl md:text-2xl tracking-widest transition-colors duration-500 z-10",
            isVideos ? "text-[var(--color-surface)]" : "text-[var(--color-muted)] hover:text-[var(--color-dark)]"
          )}
        >
          {isVideos && (
            <motion.div 
              layoutId="nav-pill"
              className="absolute inset-0 bg-[var(--color-primary)] -z-10"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          Videos
        </Link>
      </div>
    </nav>
  );
}

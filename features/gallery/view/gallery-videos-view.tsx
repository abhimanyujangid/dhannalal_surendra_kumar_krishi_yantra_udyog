import { GALLERY_CONTENT } from "../data/gallery.data";
import { GalleryNav } from "../components/gallery-nav";
import { VideoGrid } from "../components/video-grid";
import TextAnimation from "@/components/uilayouts/scroll-text";

export function GalleryVideosView() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text)] flex flex-col pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto font-body relative overflow-hidden">
      {/* Premium Ambient Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-gold)]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-[var(--color-lime)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10 flex flex-col items-center">
        <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] mb-6 !text-[var(--color-dark)] leading-[0.9] tracking-tight">
         {GALLERY_CONTENT.header.title}
        </h1>
        <p className="font-body text-xl text-[var(--color-muted)] max-w-2xl mx-auto font-light leading-relaxed">
          {GALLERY_CONTENT.header.description}
        </p>
      </div>
      
      <div className="relative z-10 flex flex-col items-center w-full">
        <GalleryNav />
        <VideoGrid videos={GALLERY_CONTENT.videos} />
      </div>
    </main>
  );
}

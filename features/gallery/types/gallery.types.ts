export interface LocalizedCopy {
  en: string;
  hi: string;
}

export interface GalleryImageItem {
  id: string;
  title: LocalizedCopy;
  description: LocalizedCopy;
  src: string;
  alt: string;
}

export interface GalleryVideoItem {
  id: string;
  title: LocalizedCopy;
  description: LocalizedCopy;
  src: string;
  thumbnail: string;
}

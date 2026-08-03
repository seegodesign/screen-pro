export interface Partner {
  name: string;
  shortName: string;
  logo: string;
  url: string;
  label: string;
  homepageCopy: string;
  intro: string;
  points: string[];
  monochrome: boolean;
  order: number;
}

export interface Review {
  quote: string;
  name: string;
  place: string;
  service: string;
  featured: boolean;
  order: number;
}

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  location: string;
  featured: boolean;
  order: number;
}

const ordered = <T extends { order: number }>(modules: Record<string, unknown>) =>
  (Object.values(modules) as T[]).sort((a, b) => a.order - b.order);

export const partners = ordered<Partner>(
  import.meta.glob("./cms/partners/*.json", { eager: true, import: "default" }),
);

export const reviews = ordered<Review>(
  import.meta.glob("./cms/reviews/*.json", { eager: true, import: "default" }),
);

export const galleryItems = ordered<GalleryItem>(
  import.meta.glob("./cms/gallery/*.json", { eager: true, import: "default" }),
);

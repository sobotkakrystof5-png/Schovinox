export type GalleryCategory =
  | "Zámečnictví"
  | "Kovovýroba"
  | "Grilovací lavice"
  | "Realizace";

export type GalleryImage = {
  id: number;
  category: GalleryCategory;
  ratio: string;
};

const CATEGORIES: GalleryCategory[] = [
  "Zámečnictví",
  "Kovovýroba",
  "Grilovací lavice",
  "Realizace",
];

const RATIOS = ["4 / 5", "1 / 1", "4 / 3", "3 / 4"];

export const GALLERY_IMAGES: GalleryImage[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  category: CATEGORIES[i % CATEGORIES.length],
  ratio: RATIOS[i % RATIOS.length],
}));

export const GALLERY_CATEGORIES: ("Vše" | GalleryCategory)[] = [
  "Vše",
  ...CATEGORIES,
];

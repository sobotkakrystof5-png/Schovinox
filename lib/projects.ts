export type Project = {
  slug: string;
  title: string;
  category: string;
  material: string;
  location: string;
  year: string;
  summary: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "projekt-1",
    title: "Projekt 1",
    category: "Kovovýroba",
    material: "......",
    location: "......",
    year: "....",
    summary: "[DOPLNÍ KLIENT]",
    description: "[DOPLNÍ KLIENT]",
  },
  {
    slug: "projekt-2",
    title: "Projekt 2",
    category: "Zámečnictví",
    material: "......",
    location: "......",
    year: "....",
    summary: "[DOPLNÍ KLIENT]",
    description: "[DOPLNÍ KLIENT]",
  },
  {
    slug: "projekt-3",
    title: "Projekt 3",
    category: "Kooperace",
    material: "......",
    location: "......",
    year: "....",
    summary: "[DOPLNÍ KLIENT]",
    description: "[DOPLNÍ KLIENT]",
  },
  {
    slug: "projekt-4",
    title: "Projekt 4",
    category: "Kovovýroba",
    material: "......",
    location: "......",
    year: "....",
    summary: "[DOPLNÍ KLIENT]",
    description: "[DOPLNÍ KLIENT]",
  },
  {
    slug: "projekt-5",
    title: "Projekt 5",
    category: "Zámečnictví",
    material: "......",
    location: "......",
    year: "....",
    summary: "[DOPLNÍ KLIENT]",
    description: "[DOPLNÍ KLIENT]",
  },
  {
    slug: "projekt-6",
    title: "Projekt 6",
    category: "Grilovací lavice",
    material: "......",
    location: "......",
    year: "....",
    summary: "[DOPLNÍ KLIENT]",
    description: "[DOPLNÍ KLIENT]",
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

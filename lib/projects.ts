export type Project = {
  slug: string;
  title: string;
  category: string;
  material: string;
  location: string;
  year: string;
  summary: string;
  description: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "projekt-1",
    title: "Mycí stůl pro hasičskou zbrojnici",
    category: "Kovovýroba",
    material: "......",
    location: "......",
    year: "....",
    summary: "Mycí stůl na míru pro hasičskou zbrojnici.",
    description:
      "Výroba mycího stolu na míru pro hasičskou zbrojnici — řešení šité přesně na provozní potřeby jednotky.",
    image: "/projekty/projekt-1.jpeg",
  },
  {
    slug: "projekt-2",
    title: "Stoly do gastro zařízení",
    category: "Kovovýroba",
    material: "......",
    location: "......",
    year: "....",
    summary: "Pracovní stoly na míru pro gastro provoz.",
    description:
      "Výroba pracovních stolů do gastro zařízení — odolné provedení navržené na denní zátěž profesionální kuchyně.",
    image: "/projekty/projekt-2.jpeg",
  },
  {
    slug: "projekt-3",
    title: "CIP nádrže pro mlékárnu",
    category: "Kovovýroba",
    material: "......",
    location: "......",
    year: "....",
    summary: "CIP nádrže pro mlékárenský provoz.",
    description:
      "Výroba CIP nádrží pro mlékárnu — zakázka pro potravinářský provoz s vysokými nároky na čistotu a přesnost svarů.",
    image: "/projekty/projekt-3.jpeg",
  },
  {
    slug: "projekt-4",
    title: "Kooperace pro firmu Nirosta — svařování nádrží",
    category: "Kooperace",
    material: "......",
    location: "......",
    year: "....",
    summary: "Svařování nádrží a kompletace druhého pláště pro Nirosta.",
    description:
      "Kooperace pro firmu Nirosta — svařování nádrží a kompletace druhého pláště v rámci dodavatelské spolupráce.",
    image: "/projekty/projekt-4.jpeg",
  },
  {
    slug: "projekt-5",
    title: "Kooperace — výroba míchadel",
    category: "Kooperace",
    material: "......",
    location: "......",
    year: "....",
    summary: "Kooperační výroba míchadel.",
    description: "Kooperační zakázka zaměřená na výrobu míchadel pro partnerskou firmu.",
    image: "/projekty/projekt-5.jpeg",
  },
  {
    slug: "projekt-6",
    title: "Ohřevné vany se zásobníkem na vodu",
    category: "Kovovýroba",
    material: "......",
    location: "......",
    year: "....",
    summary: "Ohřevné vany se zásobníkem vody pro gastro provoz.",
    description:
      "Výroba ohřevných van se zásobníkem na vodu pro gastro zařízení — funkční řešení na míru provozním potřebám kuchyně.",
    image: "/projekty/projekt-6.jpeg",
  },
  {
    slug: "projekt-7",
    title: "Průlezy sila bioplynové stanice",
    category: "Kovovýroba",
    material: "......",
    location: "......",
    year: "....",
    summary: "Tři průlezy sila pro bioplynovou stanici.",
    description:
      "Výroba tří kusů průlezů sila pro bioplynovou stanici — přesná zakázková výroba pro technologický provoz.",
    image: "/projekty/projekt-7.jpeg",
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

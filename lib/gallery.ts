export type GalleryCategory =
  | "Zakázková kovovýroba"
  | "Kooperace"
  | "Realizace";

export type GalleryImage = {
  id: number;
  category: GalleryCategory;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const CATEGORIES: GalleryCategory[] = [
  "Zakázková kovovýroba",
  "Kooperace",
  "Realizace",
];

export const GALLERY_IMAGES: GalleryImage[] = [
  // Zakázková kovovýroba
  {
    id: 1,
    category: "Zakázková kovovýroba",
    src: "/galerie/zakazkova-vyroba-1.jpeg",
    alt: "Nerezová nájezdová vana s dřevěným roštem před dílnou, v pozadí další rozpracovaný kus",
    width: 1530,
    height: 2040,
  },
  {
    id: 2,
    category: "Zakázková kovovýroba",
    src: "/galerie/zakazkova-vyroba-2.jpeg",
    alt: "Svazky ohýbaných nerezových trubek a kolen připravené na paletách ke svaření",
    width: 1530,
    height: 2040,
  },
  {
    id: 3,
    category: "Zakázková kovovýroba",
    src: "/galerie/zakazkova-vyroba-3.jpeg",
    alt: "Svařovaný nerezový rám s otvory a diagonálními trubkami na dílenském stole",
    width: 1530,
    height: 2040,
  },
  {
    id: 4,
    category: "Zakázková kovovýroba",
    src: "/galerie/zakazkova-vyroba-4.jpeg",
    alt: "Detail rovného svaru na nerezovém plechu",
    width: 1500,
    height: 2000,
  },
  {
    id: 5,
    category: "Zakázková kovovýroba",
    src: "/galerie/zakazkova-vyroba-5.jpeg",
    alt: "Dvě nerezové nádoby na nohách s průtokoměrem a čerpadlem ve výrobní hale",
    width: 2000,
    height: 1500,
  },
  {
    id: 6,
    category: "Zakázková kovovýroba",
    src: "/galerie/zakazkova-vyroba-6.jpeg",
    alt: "Nerezová mřížová dvoukřídlá brána v chladicí místnosti s regálem potravin",
    width: 1500,
    height: 2000,
  },
  {
    id: 7,
    category: "Zakázková kovovýroba",
    src: "/galerie/zakazkova-vyroba-7.jpeg",
    alt: "Naskládané nerezové plechové díly a rámy na vozíku ve výrobní hale",
    width: 1500,
    height: 2000,
  },

  // Kooperace
  {
    id: 8,
    category: "Kooperace",
    src: "/galerie/kooperace-1.jpeg",
    alt: "Velký nerezový sud s víkem na paletě, v pozadí pracovník dílny",
    width: 1530,
    height: 2040,
  },
  {
    id: 9,
    category: "Kooperace",
    src: "/galerie/kooperace-2.jpeg",
    alt: "Detail přivařené trubky na děrovaných nerezových lištách na svářečském stole",
    width: 1200,
    height: 1600,
  },
  {
    id: 10,
    category: "Kooperace",
    src: "/galerie/kooperace-3.jpeg",
    alt: "Nerezový kónický kryt s odstupňovanými prstenci na pracovním stole",
    width: 1530,
    height: 2040,
  },
  {
    id: 11,
    category: "Kooperace",
    src: "/galerie/kooperace-4.jpeg",
    alt: "Řada nerezových trubek svařených do rastru na roštu",
    width: 1080,
    height: 1920,
  },
  {
    id: 12,
    category: "Kooperace",
    src: "/galerie/kooperace-5.jpeg",
    alt: "Dva nerezové skluzy na paletě připravené k expedici",
    width: 1200,
    height: 1600,
  },
  {
    id: 13,
    category: "Kooperace",
    src: "/galerie/kooperace-6.jpeg",
    alt: "Dva velké nerezové rotační bubny naložené na voze při expedici",
    width: 2040,
    height: 1530,
  },

  // Realizace
  {
    id: 14,
    category: "Realizace",
    src: "/galerie/realizace-1.jpeg",
    alt: "Dvě nerezové regálové konstrukce s výsuvnými přihrádkami v provozní místnosti",
    width: 2040,
    height: 1530,
  },
  {
    id: 15,
    category: "Realizace",
    src: "/galerie/realizace-2.jpeg",
    alt: "Ohýbaná nerezová kolena naskládaná na sobě v přepravním koši",
    width: 1530,
    height: 2040,
  },
  {
    id: 16,
    category: "Realizace",
    src: "/galerie/realizace-3.jpeg",
    alt: "Řady vyřezaných nerezových kruhových dílů na stojanu ve výrobní hale",
    width: 1080,
    height: 1920,
  },
  {
    id: 17,
    category: "Realizace",
    src: "/galerie/realizace-4.jpeg",
    alt: "Tři kónické nerezové nádrže naložené a připoutané na přívěsu",
    width: 2040,
    height: 1530,
  },
  {
    id: 18,
    category: "Realizace",
    src: "/galerie/realizace-5.jpeg",
    alt: "Nerezové víko nádrže s přírubami a hrdly, popsané montážními značkami",
    width: 1080,
    height: 1920,
  },
  {
    id: 19,
    category: "Realizace",
    src: "/galerie/realizace-6.jpeg",
    alt: "Detail dvou souběžných svarů na nerezovém plechu se zabarvením od tepla",
    width: 900,
    height: 2000,
  },
  {
    id: 20,
    category: "Realizace",
    src: "/galerie/realizace-7.jpeg",
    alt: "Nerezový dvoudřez s odkapávací plochou a nástěnným roštovým regálem",
    width: 2048,
    height: 1536,
  },
  {
    id: 21,
    category: "Realizace",
    src: "/galerie/realizace-8.jpeg",
    alt: "Nerezové dno nádoby s přivařenými přírubami a hrdly různých průměrů",
    width: 1500,
    height: 2000,
  },
  {
    id: 22,
    category: "Realizace",
    src: "/galerie/realizace-9.jpeg",
    alt: "Nerezová skříň se dvířky chráněnými ochrannou fólií po laserovém řezání",
    width: 1500,
    height: 2000,
  },
];

export const GALLERY_CATEGORIES: ("Vše" | GalleryCategory)[] = [
  "Vše",
  ...CATEGORIES,
];

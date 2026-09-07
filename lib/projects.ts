export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Chybí u zakázek, kde klient fakt nemá k dispozici — pak se řádek na stránce vůbec nevykreslí. */
  material?: string;
  location?: string;
  year?: string;
  summary: string;
  description: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "projekt-1",
    title: "Mycí stůl pro hasičskou zbrojnici",
    category: "Zakázková kovovýroba",
    material: "Nerez 1.4404/316L",
    location: "Ovčáry",
    year: "2023",
    summary:
      "Mycí stůl na míru pro hasičskou zbrojnici v Ovčárech na mytí chemických obleků, nerez 1.4404/316L.",
    description:
      "Mycí stůl pro hasičskou zbrojnici v Ovčárech slouží k mytí chemických obleků, které jsou součástí výzbroje jednotky. Obleky se čistí zásaditým mycím roztokem, a tak jsme zvolili nerez 1.4404/316L — odolnější vůči chemické zátěži než běžná potravinářská nerez 1.4301. Stůl je navržený na každodenní provoz zbrojnice a dlouhodobě snáší opakované mytí bez koroze a poškození povrchu.",
    image: "/projekty/projekt-1.jpeg",
  },
  {
    slug: "projekt-2",
    title: "Stoly do gastro zařízení",
    category: "Zakázková kovovýroba",
    material: "Nerez 1.4301/304L",
    year: "2024",
    summary:
      "11 nerezových pracovních stolů na míru pro balírnu firmy vozím.cz, potravinářská nerez 1.4301/304L.",
    description:
      "Pro firmu vozím.cz jsme vyrobili 11 nerezových pracovních stolů na míru pro balírnu jídla, kde denně projde přibližně 3 500 porcí. Použili jsme potravinářskou nerez 1.4301/304L, standard pro provozy s vysokými nároky na hygienu a snadné čištění. Stoly jsou navržené na intenzivní denní provoz — vysoké vytížení, časté mytí a manipulaci s jídlem po celou směnu.",
    image: "/projekty/projekt-2.jpeg",
  },
  {
    slug: "projekt-3",
    title: "CIP nádrže pro mlékárnu",
    category: "Zakázková kovovýroba",
    material: "Nerez 1.4404/316L",
    year: "2022",
    summary:
      "CIP nádrže pro čištění skladovacích nádrží mléka v mlékárně, nerez 1.4404/316L.",
    description:
      "CIP nádrže slouží k čištění velkých nádrží, ve kterých mlékárna skladuje mléko — systém CIP (Clean In Place) umožňuje čištění bez nutnosti nádrž rozebírat. Pro tento typ zakázky jsme zvolili nerez 1.4404/316L, odolnější vůči agresivnějšímu čisticímu prostředí než běžná potravinářská nerez 1.4301, s důrazem na čistotu povrchu a přesnost svarů, jak vyžaduje potravinářský provoz.",
    image: "/projekty/projekt-3.jpeg",
  },
  {
    slug: "projekt-4",
    title: "Kooperace pro firmu Nirosta: svařování nádrží",
    category: "Kooperace",
    year: "2024",
    summary:
      "Kooperační svařování clampů a krycích rozet pro nádrže firmy Nirosta.",
    description:
      "V rámci dodavatelské spolupráce jsme pro firmu Nirosta vypomáhali s výrobou nádrží: svařováním clampů (rychlospojek pro potrubní a nádržové systémy) a krycích rozet kolem clampů a všech vývodů nádrže, včetně pasování a broušení spojů. Šlo o kooperační výpomoc v rámci výroby, ne o samostatnou zakázku od návrhu po předání — proto zodpovídáme za konkrétní část procesu, ne za celek.",
    image: "/projekty/projekt-4.jpeg",
  },
  {
    slug: "projekt-5",
    title: "Kooperace na výrobě míchadel",
    category: "Kooperace",
    material: "Nerez 1.4404/316L, kulatina Ø 75 mm",
    location: "Chlumec nad Cidlinou",
    summary:
      "Kompletní pasování a svařování míchadel z nerezi 1.4404/316L pro MPI-Inox, opakovaná zakázka.",
    description:
      "Kompletní pasování a svařování míchadel z nerezi 1.4404/316L, z kulatiny o průměru 75 mm. Velikost svarů 3–12 mm s přesností na 1 mm — u míchadel rozhoduje o životnosti a vyváženosti právě přesnost provedení, ne jen materiál. Jde o opakující se zakázku pro firmu MPI-Inox z Chlumce nad Cidlinou, ne o jednorázovou realizaci.",
    image: "/projekty/projekt-5.jpeg",
  },
  {
    slug: "projekt-6",
    title: "Ohřevné vany se zásobníkem na vodu",
    category: "Zakázková kovovýroba",
    material: "Nerez 1.4301/304L",
    summary:
      "Tři nové a jeden repasovaný nerezový ohřevný inkubátor pro fermentaci luštěnin, nerez 1.4301/304L.",
    description:
      "Zákazník jim říká „inkubátory“ — ohřevné vany slouží k fermentaci luštěnin. Každý inkubátor má pět na sobě nezávislých pater, která lze variabilně skládat podle potřeby provozu, a vlastní nádrž pro cirkulaci teplé vody. Vyrobeny jsou z potravinářské nerezi 1.4301/304L. Celkem jsme vyrobili tři nové inkubátory a jeden starší kus jsme repasovali.",
    image: "/projekty/projekt-6.jpeg",
  },
  {
    slug: "projekt-7",
    title: "Průlezy sila bioplynové stanice",
    category: "Zakázková kovovýroba",
    material: "Nerez 1.4404/316L, síla materiálu 3–8 mm",
    summary:
      "Šest nerezových průlezů do dvou sil bioplynové stanice, nerez 1.4404/316L, o 40 % levněji než konkurence.",
    description:
      "Průlezy slouží jako kontrolní a čisticí vstup do sila bioplynové stanice, na kterém drží nafukovací plachta síla — obsluha jimi provádí kontrolu a čištění. Kvůli vysokému obsahu síry v prostředí jsme zvolili nerez 1.4404/316L. Celkem jsme vyrobili 6 průlezů do dvou sil, síla materiálu 3–8 mm, a to o 40 % levněji, než nabízela konkurence specializovaná přímo na tento obor.",
    image: "/projekty/projekt-7.jpeg",
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

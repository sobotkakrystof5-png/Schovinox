export type NavChild = {
  label: string;
  href: string;
  comingSoon?: boolean;
  /** Text odkazu v rozcestníku na /sluzby; fallback = `Prohlédnout ${label}` */
  cta?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/**
 * Podstránky sekce Grilování — jediný zdroj pravdy.
 * Nová položka se sama propíše do navbaru, mobilního menu i do rozcestníku
 * u služby "Výroba produktů na grilování" na /sluzby.
 *
 * `comingSoon: true` = stránka existuje, ale zatím bez obsahu — vypíše se
 * u ní štítek "Připravujeme" a vypadne ze sitemapy (app/sitemap.ts).
 */
export const GRILL_PAGES: NavChild[] = [
  {
    label: "Grilovací Lorny",
    href: "/grilovaci-lavice/grilovaci-lorny",
    cta: "Prohlédnout grilovací Lorny",
  },
  {
    label: "Kulaté grily",
    href: "/grilovaci-lavice/kulate-grily",
    cta: "Prohlédnout kulaté grily",
  },
  {
    label: "Grilovací rošty",
    href: "/grilovaci-lavice/grilovaci-rosty",
    cta: "Grilovací rošty",
    comingSoon: true,
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "O nás", href: "/o-nas" },
  { label: "Služby", href: "/sluzby" },
  {
    label: "Grilování",
    href: GRILL_PAGES[0].href,
    children: GRILL_PAGES,
  },
  { label: "Projekty", href: "/projekty" },
  { label: "Reference", href: "/reference" },
  { label: "Ceník", href: "/cenik" },
  { label: "Galerie", href: "/galerie" },
  { label: "Kontakt", href: "/kontakt" },
];

export const SITE = {
  name: "Schovinox",
  tagline: "Zámečnictví, kovovýroba a svářečské řemeslo",
  domain: "https://schovinox.cz",
  phone: "734 859 363",
  phoneHref: "tel:+420734859363",
  email: "nerez.schovanek@seznam.cz",
  ico: "08386587",
  address: {
    street: "Kněžice 88",
    city: "Kněžice",
    zip: "289 02",
    full: "Kněžice 88, 289 02",
  },
  hours: [{ day: "Po–Pá", time: "7:00–18:00" }],
  social: {
    facebook: "https://www.facebook.com/groups/649523349223013/",
  },
} as const;

export const INQUIRY_TYPES = [
  { value: "kovovyroba", label: "Zakázková kovovýroba" },
  { value: "kooperace", label: "Kooperace" },
  { value: "grilovaci-lavice", label: "Produkty na grilování" },
  { value: "jine", label: "Jiné" },
] as const;

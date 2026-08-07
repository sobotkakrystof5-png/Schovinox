export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "O nás", href: "/o-nas" },
  { label: "Služby", href: "/sluzby" },
  { label: "Grilování", href: "/grilovaci-lavice/grilovaci-lorny" },
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
  address: {
    street: "Kněžice 88",
    city: "Kněžice",
    zip: "289 02",
    full: "Kněžice 88, 289 02",
  },
  hours: [{ day: "Po–Pá", time: "7:00–18:00" }],
  social: {
    facebook: "#",
    instagram: "#",
  },
} as const;

export const INQUIRY_TYPES = [
  { value: "zamecnictvi", label: "Zámečnictví" },
  { value: "kovovyroba", label: "Kovovýroba" },
  { value: "kooperace", label: "Kooperace" },
  { value: "grilovaci-lavice", label: "Grilovací Lorny" },
  { value: "jine", label: "Jiné" },
] as const;

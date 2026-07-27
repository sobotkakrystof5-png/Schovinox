export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "O nás", href: "/o-nas" },
  { label: "Služby", href: "/sluzby" },
  { label: "Grilovací Lorny", href: "/grilovaci-lavice" },
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
  phone: "......",
  phoneHref: "#",
  email: "......",
  address: {
    street: "......",
    city: "......",
    zip: "......",
    full: "......",
  },
  hours: [{ day: "......", time: "......" }],
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

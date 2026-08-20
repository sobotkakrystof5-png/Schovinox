import { SITE } from "@/lib/constants";

export type BreadcrumbEntry = {
  name: string;
  path: string;
};

type BreadcrumbJsonLdProps = {
  /** Položky ZA úvodním "Domů" — ten se doplní automaticky. */
  items: BreadcrumbEntry[];
};

/**
 * BreadcrumbList structured data (JSON-LD) pro vyhledávače.
 *
 * Vykresluje pouze neviditelný <script type="application/ld+json">,
 * žádnou viditelnou "Domů > Služby" navigaci — ta se do designu
 * záměrně nepřidává (viz CLAUDE.md, žádné generické šablonovité prvky
 * bez cíleného designového rozhodnutí).
 */
export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const trail: BreadcrumbEntry[] = [{ name: SITE.name, path: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: `${SITE.domain}${entry.path === "/" ? "" : entry.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

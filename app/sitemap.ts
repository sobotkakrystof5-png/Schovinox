import type { MetadataRoute } from "next";
import { SITE, NAV_ITEMS } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  // Položky navbaru včetně podstránek (sekce Grilování), bez duplicit —
  // rodič a jeho první dítě sdílejí URL. Stránky ve stavu "Připravujeme"
  // do sitemapy nepatří, dokud nemají obsah.
  const navPaths = Array.from(
    new Set(
      NAV_ITEMS.flatMap((item) => [
        item.href,
        ...(item.children ?? [])
          .filter((child) => !child.comingSoon)
          .map((child) => child.href),
      ]),
    ),
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.domain, priority: 1 },
    ...navPaths.map((href) => ({
      url: `${SITE.domain}${href}`,
      priority: href === "/kontakt" ? 0.9 : 0.7,
    })),
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE.domain}/projekty/${project.slug}`,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}

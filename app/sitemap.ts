import type { MetadataRoute } from "next";
import { SITE, NAV_ITEMS } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.domain, priority: 1 },
    ...NAV_ITEMS.map((item) => ({
      url: `${SITE.domain}${item.href}`,
      priority: item.href === "/kontakt" ? 0.9 : 0.7,
    })),
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE.domain}/projekty/${project.slug}`,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}

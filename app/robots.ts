import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { SITE } from "@/lib/constants";

/**
 * Mimo produkční hostname (preview/branch deploye na *.vercel.app) crawling
 * úplně zakážeme, ať nevznikne duplicitní obsah vedle schovinox.cz —
 * viz middleware.ts pro odpovídající X-Robots-Tag hlavičku.
 */
export default function robots(): MetadataRoute.Robots {
  const productionHost = new URL(SITE.domain).hostname;
  const requestHost = headers().get("host")?.split(":")[0];

  if (requestHost !== productionHost) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.domain}/sitemap.xml`,
  };
}

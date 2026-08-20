import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE } from "@/lib/constants";

/**
 * Dokud web běží pod jiným hostname než produkční doménou (typicky
 * schovinox.vercel.app nebo libovolný preview deploy), pošleme
 * X-Robots-Tag: noindex, ať nám Google nezaindexuje duplicitní obsah
 * mimo schovinox.cz — viz robots.ts pro odpovídající blokaci crawlování.
 */
export function middleware(request: NextRequest) {
  const productionHost = new URL(SITE.domain).hostname;
  const requestHost = request.headers.get("host")?.split(":")[0];
  const response = NextResponse.next();

  if (requestHost !== productionHost) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Schovinox: zakázková kovovýroba a zámečnické práce, kooperace pro firmy a výroba produktů na grilování. Řemeslo stavěné na generacích zkušeností.",
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description:
      "Zakázková kovovýroba, kooperace pro firmy a produkty na grilování na míru. Poctivé řemeslo s dlouholetou praxí.",
    url: SITE.domain,
    siteName: SITE.name,
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

/**
 * Čísla dní v týdnu pro schema.org OpeningHoursSpecification podle
 * českého zápisu v SITE.hours (jediný zdroj pravdy pro otevírací dobu).
 * Rozšiřuje se, pokud přibude další řádek s jiným rozsahem dnů.
 */
const DAY_OF_WEEK_MAP: Record<string, string[]> = {
  "Po–Pá": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
};

/** Rozparsuje "7:00–18:00" na { opens: "07:00", closes: "18:00" }. */
function parseHoursRange(time: string): { opens: string; closes: string } {
  const pad = (part: string) => {
    const [h, m] = part.trim().split(":");
    return `${h.padStart(2, "0")}:${m ?? "00"}`;
  };
  const [opens, closes] = time.split("–").map(pad);
  return { opens, closes };
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  image: `${SITE.domain}/homepage-hero.jpeg`,
  telephone: "+420 734 859 363",
  email: SITE.email,
  url: SITE.domain,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    postalCode: SITE.address.zip,
    addressCountry: "CZ",
  },
  openingHoursSpecification: SITE.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: DAY_OF_WEEK_MAP[h.day] ?? [],
    ...parseHoursRange(h.time),
  })),
  sameAs: [SITE.social.facebook],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "IČO",
    value: SITE.ico,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

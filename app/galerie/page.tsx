import type { Metadata } from "next";
import GalleryGrid from "@/components/sections/GalleryGrid";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Fotogalerie realizací Schovinox: zakázková kovovýroba, zámečnické práce a kooperace.",
  alternates: {
    canonical: "/galerie",
  },
  openGraph: {
    title: `Galerie | ${SITE.name}`,
    description:
      "Fotogalerie realizací Schovinox: zakázková kovovýroba, zámečnické práce a kooperace.",
    url: "/galerie",
    type: "website",
    images: [{ url: "/galerie/realizace-1.jpeg" }],
  },
};

export default function GaleriePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Galerie", path: "/galerie" }]} />
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page pb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red">
            Galerie
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl tracking-tight text-ink md:text-5xl">
            Práce mluví za sebe.
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}

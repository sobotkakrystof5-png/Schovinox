import { SITE } from "@/lib/constants";

type ProductJsonLdProps = {
  sku: string;
  name: string;
  description: string;
  /** Cesta stránky, kde se produkt prodává — např. "/grilovaci-lavice/kulate-grily". */
  path: string;
  /** Cesta k hlavní fotce v /public. */
  image: string;
  price: number;
};

/**
 * Product + Offer structured data (JSON-LD) pro produkt v jediném provedení
 * (ne ProductGroup — ten dává smysl jen s víc variantami, viz Lorny).
 */
export default function ProductJsonLd({
  sku,
  name,
  description,
  path,
  image,
  price,
}: ProductJsonLdProps) {
  const url = `${SITE.domain}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    sku,
    name,
    description,
    url,
    image: `${SITE.domain}${image}`,
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "CZK",
      price: String(price),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

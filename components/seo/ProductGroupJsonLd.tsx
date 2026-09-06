import { SITE } from "@/lib/constants";

export type ProductGroupVariant = {
  sku: string;
  name: string;
  size: string;
  price: number;
};

type ProductGroupJsonLdProps = {
  productGroupID: string;
  name: string;
  /** Cesta stránky, kde se produkt prodává — např. "/grilovaci-lavice/grilovaci-lorny". */
  path: string;
  /** Cesta k hlavní fotce v /public — např. "/lorny/lorna-5.jpeg". */
  image: string;
  variants: ProductGroupVariant[];
};

/**
 * ProductGroup + hasVariant structured data (JSON-LD) pro produkty s víc
 * rozměry/variantami za různou cenu (viz BreadcrumbJsonLd pro stejný vzor
 * neviditelného <script> bez viditelné UI).
 */
export default function ProductGroupJsonLd({
  productGroupID,
  name,
  path,
  image,
  variants,
}: ProductGroupJsonLdProps) {
  const url = `${SITE.domain}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    productGroupID,
    name,
    url,
    image: `${SITE.domain}${image}`,
    brand: { "@type": "Brand", name: SITE.name },
    variesBy: ["size"],
    hasVariant: variants.map((variant) => ({
      "@type": "Product",
      sku: variant.sku,
      name: variant.name,
      size: variant.size,
      offers: {
        "@type": "Offer",
        url,
        priceCurrency: "CZK",
        price: String(variant.price),
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export type FaqEntry = {
  question: string;
  answer: string;
};

type FaqJsonLdProps = {
  /** Musí přesně odpovídat viditelným otázkám/odpovědím na stránce. */
  items: FaqEntry[];
};

/** FAQPage structured data (JSON-LD) — vykresluje jen neviditelný <script>. */
export default function FaqJsonLd({ items }: FaqJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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

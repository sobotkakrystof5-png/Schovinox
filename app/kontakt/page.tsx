import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import WeldSeam from "@/components/ui/WeldSeam";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { SITE, INQUIRY_TYPES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte Schovinox — nezávazná poptávka zámečnictví, kovovýroby, kooperace nebo grilovací lavice.",
};

type KontaktPageProps = {
  searchParams: { typ?: string };
};

export default function KontaktPage({ searchParams }: KontaktPageProps) {
  const defaultInquiryType = INQUIRY_TYPES.find(
    (type) => type.value === searchParams.typ,
  )?.value;

  return (
    <>
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page pb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red">
            Kontakt
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl tracking-tight text-ink md:text-5xl">
            Poptejte zakázku bez závazků.
          </h1>
        </div>
      </section>

      <section className="border-b border-ink/10 py-16">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <WeldSeam className="mb-8 w-14 text-red" />
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-red" strokeWidth={1.5} />
                <div>
                  <span className="block text-gray-500">Telefon</span>
                  <a href={SITE.phoneHref} className="text-ink hover:text-red">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-red" strokeWidth={1.5} />
                <div>
                  <span className="block text-gray-500">E-mail</span>
                  <a href={`mailto:${SITE.email}`} className="text-ink hover:text-red">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-red" strokeWidth={1.5} />
                <div>
                  <span className="block text-gray-500">Provozovna</span>
                  <span className="text-ink">{SITE.address.full}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-red" strokeWidth={1.5} />
                <div>
                  <span className="block text-gray-500">Otevírací doba</span>
                  {SITE.hours.map((h) => (
                    <span key={h.day} className="block text-ink">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </div>
              </li>
            </ul>

            <a
              href={SITE.phoneHref}
              className="mt-8 inline-flex items-center gap-2 border border-red bg-red px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              Zavolat
            </a>
          </div>

          <div className="md:col-span-7">
            <PlaceholderImage
              label="[MAPA: doplní se po zadání reálné adresy]"
              aspectRatio="auto"
              className="h-full min-h-[320px] w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page max-w-2xl">
          <h2 className="mb-8 font-display text-2xl tracking-tight text-ink">
            Nezávazná poptávka
          </h2>
          <ContactForm defaultInquiryType={defaultInquiryType} />
        </div>
      </section>
    </>
  );
}

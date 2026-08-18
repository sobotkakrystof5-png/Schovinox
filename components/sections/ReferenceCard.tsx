import Image from "next/image";
import SectionMark from "@/components/ui/SectionMark";
import type { Testimonial } from "@/lib/testimonials";

type ReferenceCardProps = {
  testimonial: Testimonial;
  index: number;
  total: number;
};

export default function ReferenceCard({ testimonial, index, total }: ReferenceCardProps) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:items-center">
      {testimonial.photo && (
        <div className="md:col-span-4">
          <div
            className="relative w-full overflow-hidden border border-ink/10"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image
              src={testimonial.photo}
              alt={`Práce pro ${testimonial.name}`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}
      <div className={testimonial.photo ? "md:col-span-8" : "md:col-span-10"}>
        <SectionMark index={index} total={total} label="Reference" />
        <p className="mt-5 max-w-2xl font-display text-xl leading-snug tracking-tight text-ink md:text-2xl">
          „{testimonial.quote}“
        </p>
        <div className="mt-5 border-t border-ink/10 pt-4 text-sm">
          <span className="font-medium text-ink">{testimonial.name}</span>
          {testimonial.company && (
            <span className="text-gray-500">, {testimonial.company}</span>
          )}
        </div>
      </div>
    </div>
  );
}

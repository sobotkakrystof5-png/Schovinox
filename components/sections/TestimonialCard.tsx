import { Star } from "lucide-react";

export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  rating: number;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="border border-ink/10 bg-offwhite p-7">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${
              i < testimonial.rating ? "fill-red text-red" : "text-ink/15"
            }`}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-ink/80">
        „{testimonial.quote}“
      </p>
      <div className="mt-6 border-t border-ink/10 pt-4 text-sm">
        <span className="font-medium text-ink">{testimonial.name}</span>
        <span className="text-gray-500"> — {testimonial.company}</span>
      </div>
    </div>
  );
}

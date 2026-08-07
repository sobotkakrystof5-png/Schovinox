export type Testimonial = {
  id: string;
  name: string;
  company?: string;
  quote: string;
  photo?: string;
  date: string;
};

// Schválené reference se sem přidávají ručně po ověření e-mailu z formuláře
// na /reference (viz app/api/reference/route.ts). Fotka se nahraje do
// /public/reference/.
export const TESTIMONIALS: Testimonial[] = [];

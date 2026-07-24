const LOGOS = ["Firma 1", "Firma 2", "Firma 3", "Firma 4", "Firma 5", "Firma 6"];

export default function LogoMarquee() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <div className="overflow-hidden border-y border-ink/10 py-8">
      <div className="flex w-max animate-marquee gap-16">
        {track.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-lg tracking-tight text-ink/25"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

type SectionMarkProps = {
  index: number;
  total: number;
  label: string;
  className?: string;
};

/**
 * Secondary signature motif — a numbered marker in the style of a technical
 * drawing revision mark ("01 / 06"), used in place of generic feature icons.
 */
export default function SectionMark({
  index,
  total,
  label,
  className = "",
}: SectionMarkProps) {
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="flex h-9 items-center border border-red px-2.5 font-display text-sm text-red">
        {pad(index)}<span className="mx-1 text-red/40">/</span>{pad(total)}
      </span>
      <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
        {label}
      </span>
    </div>
  );
}

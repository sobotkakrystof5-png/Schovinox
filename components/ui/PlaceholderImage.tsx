import { Camera } from "lucide-react";

type PlaceholderImageProps = {
  label: string;
  aspectRatio?: string; // e.g. "4 / 5", "16 / 9" — swap for a real <Image> once photos exist
  className?: string;
};

export default function PlaceholderImage({
  label,
  aspectRatio = "4 / 5",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-end overflow-hidden border border-ink/10 bg-gray-100 ${className}`}
      style={{
        aspectRatio,
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(22,22,22,0.06) 0px, rgba(22,22,22,0.06) 1px, transparent 1px, transparent 14px)",
      }}
    >
      <div className="flex w-full items-center gap-2 border-t border-ink/10 bg-offwhite/80 px-3 py-2 backdrop-blur-sm">
        <Camera className="h-4 w-4 shrink-0 text-gray-500" strokeWidth={1.5} />
        <span className="truncate text-xs text-gray-500">{label}</span>
      </div>
    </div>
  );
}

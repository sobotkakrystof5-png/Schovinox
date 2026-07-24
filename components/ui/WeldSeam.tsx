type WeldSeamProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

/**
 * Signature graphic motif — a thin red line with the scalloped rhythm of a
 * weld bead, used as the recurring divider/guide across the site instead of
 * a plain rule or generic icon.
 */
export default function WeldSeam({
  orientation = "horizontal",
  className = "",
}: WeldSeamProps) {
  const patternId = `weld-seam-${orientation}`;

  if (orientation === "vertical") {
    return (
      <svg
        className={`text-red ${className}`}
        width="16"
        height="100%"
        viewBox="0 0 16 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <pattern
          id={patternId}
          width="16"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M8 0 Q2 3 8 6 Q14 9 8 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </pattern>
        <rect width="16" height="200" fill={`url(#${patternId})`} />
      </svg>
    );
  }

  return (
    <svg
      className={`text-red ${className}`}
      width="100%"
      height="16"
      viewBox="0 0 200 16"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <pattern id={patternId} width="10" height="16" patternUnits="userSpaceOnUse">
        <path
          d="M0 8 Q3 2 6 8 Q9 14 12 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </pattern>
      <rect width="200" height="16" fill={`url(#${patternId})`} />
    </svg>
  );
}

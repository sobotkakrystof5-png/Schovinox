"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type StatNumberProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

export default function StatNumber({
  value,
  suffix = "",
  label,
  className = "",
}: StatNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className={className}>
      <div className="font-display text-5xl font-medium leading-none tracking-tight text-red md:text-6xl">
        {display}
        {suffix}
      </div>
      <div className="mt-3 text-sm text-gray-500">{label}</div>
    </div>
  );
}

type StatNumberProps = {
  value: string;
  label: string;
  className?: string;
};

export default function StatNumber({ value, label, className = "" }: StatNumberProps) {
  return (
    <div className={className}>
      <div className="font-display text-5xl font-medium leading-none tracking-tight text-red md:text-6xl">
        {value}
      </div>
      <div className="mt-3 text-sm text-gray-500">{label}</div>
    </div>
  );
}

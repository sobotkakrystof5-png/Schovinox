import WeldSeam from "@/components/ui/WeldSeam";

export type TimelineMilestone = {
  mark: string;
  title: string;
  text: string;
};

type TimelineProps = {
  milestones: TimelineMilestone[];
};

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <ol className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px">
        <WeldSeam orientation="vertical" className="h-full" />
      </div>

      {milestones.map((milestone, i) => (
        <li key={i} className="relative flex gap-8 pb-14 pl-0 last:pb-0">
          <div className="relative z-10 flex w-4 shrink-0 justify-center pt-1.5">
            <span className="h-3.5 w-3.5 rounded-full border-2 border-red bg-offwhite" />
          </div>
          <div className="flex-1">
            <span className="font-display text-sm text-red">{milestone.mark}</span>
            <h3 className="mt-1 font-display text-xl tracking-tight text-ink">
              {milestone.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-500">
              {milestone.text}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

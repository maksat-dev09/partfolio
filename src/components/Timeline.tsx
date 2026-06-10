import SectionHeading from "./SectionHeading";
import { timeline } from "../data";

export default function Timeline() {
  return (
    <section className="glass-panel" id="timeline">
      <SectionHeading title="Experience Timeline" subtitle="Growth Journey" />
      <div className="relative space-y-8">
        <div className="absolute left-5 top-10 h-full w-px bg-white/10 sm:left-6" />
        {timeline.map((item, index) => (
          <div key={item.label} className="relative flex gap-6 sm:gap-10">
            <div className="flex flex-col items-center">
              <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-bg ring-8 ring-bg" />
              {index < timeline.length - 1 && (
                <div className="mt-2 h-full w-px bg-white/10" />
              )}
            </div>
            <div className="space-y-3 rounded-[2rem] border border-white/10 bg-surface p-6 shadow-soft">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {item.label}
                </h3>
                <span className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  {item.period}
                </span>
              </div>
              <p className="text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

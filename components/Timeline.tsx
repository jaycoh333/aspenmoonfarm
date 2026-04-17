import type { TimelineEntry } from "@/data/story";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative">
      <span
        className="absolute left-4 top-2 bottom-2 w-px bg-olive-900/15 sm:left-6"
        aria-hidden
      />
      {entries.map((e, i) => (
        <li
          key={e.year}
          className="relative grid gap-3 pb-10 pl-12 last:pb-0 sm:pl-16"
        >
          <span
            className="absolute left-[9px] top-1 h-4 w-4 rounded-full border-[3px] border-cream-50 bg-gold-400 shadow-soft sm:left-[17px]"
            aria-hidden
          />
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl font-semibold text-olive-900 sm:text-3xl">
              {e.year}
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-olive-700">
              {i === entries.length - 1 ? "Present day" : "Milestone"}
            </span>
          </div>
          <h3 className="font-display text-xl font-semibold text-olive-900">
            {e.title}
          </h3>
          <p className="max-w-2xl text-[15px] leading-relaxed text-olive-800/85">
            {e.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

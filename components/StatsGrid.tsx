export type Stat = {
  value: string;
  label: string;
  caption?: string;
};

export function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-3xl border border-olive-900/8 bg-cream-100/50 p-6"
        >
          <dt className="text-xs font-medium uppercase tracking-[0.2em] text-olive-700">
            {s.label}
          </dt>
          <dd className="mt-2 font-display text-4xl font-semibold text-olive-900">
            {s.value}
          </dd>
          {s.caption && (
            <p className="mt-2 text-sm text-olive-800/80">{s.caption}</p>
          )}
        </div>
      ))}
    </dl>
  );
}

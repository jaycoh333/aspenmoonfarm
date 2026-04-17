import { csaSteps } from "@/data/offerings";

export function CSASteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {csaSteps.map((s, i) => (
        <li
          key={s.step}
          className="card relative flex flex-col gap-3 p-6"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-4xl font-semibold text-gold-500">
              {s.step}
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-olive-700">
              Step {i + 1}
            </span>
          </div>
          <h3 className="font-display text-lg font-semibold text-olive-900">
            {s.title}
          </h3>
          <p className="text-sm leading-relaxed text-olive-800/85">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

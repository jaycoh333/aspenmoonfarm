import Image from "next/image";
import type { Category } from "@/data/offerings";

export function ProductCard({
  category,
  active,
}: {
  category: Category;
  active?: boolean;
}) {
  return (
    <article
      className={
        "card overflow-hidden transition " +
        (active ? "ring-2 ring-olive-800/50" : "")
      }
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <Image
          src={category.image.src}
          alt={category.image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-7">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-olive-900">
            {category.name}
          </h3>
          <span className="rounded-full bg-olive-800/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-olive-800">
            {category.tagline}
          </span>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-olive-800/85">
          {category.description}
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {category.items.map((item) => (
            <li
              key={item.name}
              className="flex items-baseline justify-between gap-3 border-b border-olive-900/5 pb-1.5"
            >
              <span className="text-olive-900">{item.name}</span>
              {item.note && (
                <span className="shrink-0 text-xs text-olive-700">
                  {item.note}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

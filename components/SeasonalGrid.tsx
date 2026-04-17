import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { growCategories } from "@/data/offerings";

export function SeasonalGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {growCategories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/what-we-grow?category=${cat.slug}`}
          className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl"
        >
          <Image
            src={cat.image.src}
            alt={cat.image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-olive-900/85 via-olive-900/20 to-transparent" />
          <div className="relative z-10 p-6 text-cream-50">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream-100/80">
              <span className="h-1 w-1 rounded-full bg-gold-300" aria-hidden />
              {cat.tagline}
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              {cat.name}
            </h3>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold-200 group-hover:text-gold-100">
              Explore
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="card flex h-full flex-col gap-4 p-7">
      <Quote className="h-6 w-6 text-gold-400" aria-hidden />
      <blockquote className="text-[15px] leading-relaxed text-olive-900 sm:text-base">
        "{t.quote}"
      </blockquote>
      <figcaption className="mt-auto border-t border-olive-900/8 pt-4">
        <div className="font-medium text-olive-900">{t.name}</div>
        <div className="mt-0.5 text-xs text-olive-700">
          {t.role}
          {t.since ? ` · ${t.since}` : ""}
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialGrid({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((t) => (
        <TestimonialCard key={t.id} t={t} />
      ))}
    </div>
  );
}

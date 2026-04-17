import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Offering } from "@/data/offerings";

export function QuickActionCard({ offering }: { offering: Offering }) {
  const Tag = offering.external ? "a" : Link;
  const linkProps = offering.external
    ? {
        href: offering.href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { href: offering.href };

  return (
    <Tag
      {...(linkProps as any)}
      className="card-interactive group relative flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden">
        <Image
          src={offering.image.src}
          alt={offering.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          style={{ objectPosition: offering.image.position ?? "center" }}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-900/40 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-olive-700">
          {offering.subtitle}
        </span>
        <h3 className="mt-2 font-display text-2xl font-semibold text-olive-900">
          {offering.title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-olive-800/85">
          {offering.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-700 group-hover:gap-2">
          {offering.cta}
          {offering.external ? (
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          ) : (
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          )}
        </span>
      </div>
    </Tag>
  );
}

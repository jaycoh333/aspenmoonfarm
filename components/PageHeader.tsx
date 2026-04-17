import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
  children,
  tone = "cream",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image?: { src: string; alt: string };
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
  tone?: "cream" | "dark";
}) {
  const dark = tone === "dark" && image;
  return (
    <header
      className={cn(
        "relative isolate overflow-hidden",
        !image && "bg-gradient-to-b from-cream-100 to-cream-50"
      )}
    >
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-olive-900/55 via-olive-900/40 to-olive-900/80" />
        </div>
      )}

      <div
        className={cn(
          "container-farm relative pt-16 sm:pt-20 lg:pt-28",
          image ? "pb-24 lg:pb-28" : "pb-14 lg:pb-20"
        )}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "mb-6 flex flex-wrap items-center gap-1 text-xs",
              dark ? "text-cream-100/80" : "text-olive-700"
            )}
          >
            {breadcrumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 opacity-60" aria-hidden />
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span
            className={cn(
              "eyebrow",
              dark && "text-cream-100"
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
            {eyebrow}
          </span>
        )}
        <h1
          className={cn(
            "mt-4 max-w-3xl font-display text-display-lg font-semibold text-balance",
            dark ? "text-cream-50" : "text-olive-900"
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-5 max-w-2xl text-lg leading-relaxed",
              dark ? "text-cream-100/90" : "text-olive-800/85"
            )}
          >
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { growCategories } from "@/data/offerings";
import { cn } from "@/lib/utils";

const slugs = ["all", ...growCategories.map((c) => c.slug)] as const;

export function GrowCategories() {
  const router = useRouter();
  const params = useSearchParams();
  const active = (params.get("category") ?? "all") as (typeof slugs)[number];

  const visible = useMemo(() => {
    if (active === "all") return growCategories;
    return growCategories.filter((c) => c.slug === active);
  }, [active]);

  const setCategory = (slug: (typeof slugs)[number]) => {
    const next = new URLSearchParams(params.toString());
    if (slug === "all") next.delete("category");
    else next.set("category", slug);
    router.replace(`/what-we-grow${next.toString() ? `?${next}` : ""}`, {
      scroll: false,
    });
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter by category"
        className="flex flex-wrap gap-2"
      >
        {slugs.map((slug) => {
          const label =
            slug === "all"
              ? "All"
              : growCategories.find((c) => c.slug === slug)?.name.split(" ")[0] ??
                slug;
          const isActive = active === slug;
          return (
            <button
              key={slug}
              role="tab"
              aria-selected={isActive}
              onClick={() => setCategory(slug)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-olive-800 text-cream-50 shadow-soft"
                  : "border border-olive-900/15 text-olive-900 hover:bg-olive-900/5"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {visible.map((cat) => (
          <ProductCard key={cat.slug} category={cat} />
        ))}
      </div>
    </div>
  );
}

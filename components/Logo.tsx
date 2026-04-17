import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const color = variant === "light" ? "text-cream-50" : "text-olive-900";
  return (
    <Link
      href="/"
      aria-label="Aspen Moon Farm home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "relative grid h-9 w-9 place-items-center rounded-full border transition-transform group-hover:-rotate-6",
          variant === "light"
            ? "border-cream-50/30 bg-cream-50/10"
            : "border-olive-900/15 bg-cream-100"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className={cn("h-5 w-5", color)}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden
        >
          <path
            d="M12 3c4 4 4 9 0 14M12 3c-4 4-4 9 0 14"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="9" opacity={0.6} />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </span>
      <span className={cn("flex flex-col leading-none", color)}>
        <span className="font-display text-lg font-semibold tracking-tight">
          Aspen Moon
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] opacity-70">
          Biodynamic Farm
        </span>
      </span>
    </Link>
  );
}

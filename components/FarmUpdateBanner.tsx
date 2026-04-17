"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Sprout } from "lucide-react";

export function FarmUpdateBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative z-40 bg-olive-900 text-cream-100">
      <div className="container-farm flex items-center justify-between gap-4 py-2.5 text-sm">
        <div className="flex min-w-0 items-center gap-2">
          <Sprout className="h-4 w-4 shrink-0 text-gold-300" aria-hidden />
          <p className="truncate">
            <span className="font-medium">2026 CSA sign-ups are open.</span>{" "}
            <Link
              href="/csa"
              className="underline decoration-gold-300 decoration-1 underline-offset-4 hover:text-gold-200"
            >
              Reserve your share
            </Link>
            <span className="hidden sm:inline">
              {" "}— early-bird pricing through April.
            </span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Dismiss announcement"
          className="rounded-full p-1 text-cream-100/80 transition hover:bg-cream-100/10 hover:text-cream-100"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}

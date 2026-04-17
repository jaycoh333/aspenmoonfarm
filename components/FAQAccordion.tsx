"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/data/faq";

export function FAQAccordion({
  items,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <ul className="divide-y divide-olive-900/10 rounded-3xl border border-olive-900/10 bg-cream-50">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-olive-900/[0.03]"
            >
              <span className="font-display text-lg font-medium text-olive-900">
                {item.question}
              </span>
              <Plus
                className={cn(
                  "h-5 w-5 shrink-0 text-olive-700 transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
                aria-hidden
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              className={cn(
                "grid overflow-hidden transition-all duration-300",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0">
                <div className="px-6 pb-6 text-[15px] leading-relaxed text-olive-800/90">
                  {item.answer}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

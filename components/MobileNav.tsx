"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { primaryNav, ctaNav } from "@/data/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-olive-900 transition hover:bg-olive-900/5"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-olive-900/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-cream-50 shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-olive-900 hover:bg-olive-900/5"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav aria-label="Mobile primary" className="flex-1 px-3 pb-6">
              <ul className="flex flex-col">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-lg font-medium text-olive-900 hover:bg-olive-900/5"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="ml-3 flex flex-col border-l border-olive-900/10 pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-xl px-3 py-2 text-sm text-olive-800 hover:bg-olive-900/5"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-olive-900/8 px-5 py-5">
              <div className="flex flex-col gap-2">
                {ctaNav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      item.highlight
                        ? "btn-gold w-full justify-center"
                        : "btn-secondary w-full justify-center"
                    }
                  >
                    {item.label}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

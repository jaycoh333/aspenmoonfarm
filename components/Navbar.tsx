"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { primaryNav, ctaNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-olive-900/8 bg-cream-50/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-farm flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-olive-900 transition hover:bg-olive-900/5"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className="h-3.5 w-3.5 opacity-60 transition group-hover:rotate-180"
                      aria-hidden
                    />
                  )}
                </Link>
                {item.children && (
                  <div
                    className="pointer-events-none absolute left-0 top-full z-20 w-[28rem] pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
                  >
                    <div className="card p-2 shadow-lift">
                      <ul className="grid grid-cols-1 gap-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-2xl px-4 py-3 transition hover:bg-olive-900/5"
                            >
                              <div className="text-sm font-medium text-olive-900">
                                {child.label}
                              </div>
                              {child.description && (
                                <div className="mt-0.5 text-xs text-olive-700/80">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {ctaNav.map((item) =>
            item.highlight ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm"
              >
                {item.label}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-olive-800 transition hover:text-gold-600"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-olive-900/10 bg-cream-50/95 shadow-lift backdrop-blur md:hidden">
      <div className="container-farm flex items-center gap-2 py-2.5">
        <Link
          href="/find-us"
          className="btn-secondary flex-1 justify-center text-sm"
        >
          <MapPin className="h-4 w-4" aria-hidden />
          Find Us
        </Link>
        <a
          href={siteConfig.external.csaStorefront}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold flex-1 justify-center text-sm"
        >
          Join CSA
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-farm">
        <div className="relative overflow-hidden rounded-4xl">
          <Image
            src={images.hero.field.src}
            alt={images.hero.field.alt}
            width={images.hero.field.width}
            height={images.hero.field.height}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-olive-900/90 via-olive-900/75 to-olive-900/40" />
          <div className="absolute inset-0 flex items-center p-8 sm:p-14 lg:p-20">
            <div className="max-w-xl text-cream-50">
              <span className="eyebrow text-cream-100">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden />
                Ready to eat in season?
              </span>
              <h2 className="mt-4 font-display text-display-md font-semibold text-cream-50 text-balance">
                Taste the difference biodynamic farming makes.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cream-100/90 sm:text-lg">
                Whether you join our CSA, meet us at the market, or stop by the
                farm stand — we can't wait to share this season's harvest with
                you.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={siteConfig.external.csaStorefront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Join the CSA
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
                <Link
                  href="/find-us"
                  className="btn-secondary border-cream-100/30 bg-cream-50/10 text-cream-50 hover:bg-cream-50/15"
                >
                  Find Us
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

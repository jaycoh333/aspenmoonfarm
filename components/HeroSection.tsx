"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.hero.landscape.src}
          alt={images.hero.landscape.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-olive-900/55 via-olive-900/30 to-cream-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-900/40 via-transparent to-transparent" />
      </div>

      <div className="container-farm relative flex min-h-[82vh] flex-col justify-end pb-16 pt-28 sm:min-h-[88vh] sm:pb-24 sm:pt-36 lg:pb-32 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 bg-olive-900/30 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cream-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden />
            {siteConfig.location.city}, {siteConfig.location.state}
            <span className="opacity-60">·</span>
            Est. {siteConfig.stats.foundedYear}
          </span>

          <h1 className="mt-6 font-display text-display-xl font-semibold leading-[1.02] text-cream-50 text-balance">
            Food grown the way
            <br />
            the land wants to{" "}
            <span className="italic text-gold-300">grow it.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/90 sm:text-xl">
            A biodynamic and certified organic family farm on the Colorado Front
            Range. Vegetables, flowers, plants, and heritage grains — grown with
            intention, harvested within 24 hours of your table.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.external.csaStorefront}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base"
            >
              Join the 2026 CSA
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
            <Link href="/find-us" className="btn-secondary text-base">
              <MapPin className="h-4 w-4" aria-hidden />
              Find Us
            </Link>
            <Link
              href="/what-we-grow"
              className="btn-ghost text-base text-cream-100 hover:bg-cream-100/10"
            >
              See what's growing
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-cream-100/85 sm:max-w-lg">
            <HeroStat value={`${siteConfig.stats.acreage}`} label="Acres" />
            <HeroStat
              value={`${siteConfig.stats.csaMembers}+`}
              label="CSA families"
            />
            <HeroStat
              value={`${siteConfig.stats.cropVarieties}+`}
              label="Crop varieties"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-cream-100/70">
        {label}
      </div>
    </div>
  );
}

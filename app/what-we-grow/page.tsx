import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { GrowCategories } from "@/components/GrowCategories";
import { FinalCTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/images";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What We Grow — Vegetables, Flowers, Plants & Grains",
  description:
    "Explore the full Aspen Moon harvest: 150+ varieties of organic vegetables, heirloom flowers, plant starts, and stone-milled heritage grains.",
};

export default function WhatWeGrowPage() {
  return (
    <>
      <PageHeader
        eyebrow="The full harvest"
        title="Vegetables, flowers, plants, and heritage grains."
        description="From spring starts to winter storage crops, our 90 acres produce more than 150 varieties across four programs. Explore by category."
        image={images.produce.basket}
        tone="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What We Grow" },
        ]}
      />

      <section className="section">
        <div className="container-farm">
          <Suspense fallback={<div className="h-[40rem] animate-pulse rounded-3xl bg-cream-100" />}>
            <GrowCategories />
          </Suspense>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-farm">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <SectionHeader
                  eyebrow="How we grow"
                  title="Biodynamic practices, certified organic results."
                  description="We never use synthetic pesticides, herbicides, or fertilizers. Instead, we build soil through compost, cover crops, animal integration, and biodynamic preparations — all third-party certified every year."
                />
                <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed text-olive-800/90">
                  {[
                    "USDA Certified Organic since 2012",
                    "Biodynamic practices & celestial planting",
                    "Closed-loop fertility — we make our own compost",
                    "Pollinator strips & habitat across the farm",
                    "Harvested within 24 hours of your share",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
                <Image
                  src={images.story.compost.src}
                  alt={images.story.compost.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

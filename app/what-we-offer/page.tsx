import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { QuickActionCard } from "@/components/QuickActionCard";
import { FinalCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { quickActions } from "@/data/offerings";
import { images } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "What We Offer",
  description:
    "Everything Aspen Moon Farm offers the Front Range community — CSA shares, farm stand, Boulder and Longmont markets, wholesale, and more.",
};

const offerings = [
  {
    title: "Weekly CSA Shares",
    body:
      "A 22-week share of just-picked organic vegetables, with optional flower, egg, grain, and pantry add-ons.",
    href: "/csa",
    external: false,
  },
  {
    title: "Farm Stand",
    body:
      "Self-serve stand in Hygiene open Fri–Sun in season — the freshest harvest of the week straight from the fields.",
    href: "/find-us#farm-stand",
    external: false,
  },
  {
    title: "Boulder & Longmont Markets",
    body:
      "Find our full stand Saturdays at both markets, plus Wednesdays at Boulder during peak season.",
    href: "/find-us#markets",
    external: false,
  },
  {
    title: "Plants & Starts",
    body:
      "Thousands of heirloom vegetable, herb, and flower starts each spring — ready for your home garden.",
    href: siteConfig.external.plantStore,
    external: true,
  },
  {
    title: "Heritage Grains",
    body:
      "Stone-milled flours and whole grains grown on our fields — ancient varieties adapted to the high plains.",
    href: "/what-we-grow?category=grains",
    external: false,
  },
  {
    title: "Wholesale",
    body:
      "Direct-from-farm produce, flowers, and grains for restaurants, grocers, florists, and event pros.",
    href: "/wholesale",
    external: false,
  },
];

export default function WhatWeOfferPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we offer"
        title="Every way we share the harvest."
        description="From weekly CSA shares to wholesale partnerships, there are many ways to eat, grow, and gather with Aspen Moon."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What We Offer" },
        ]}
      />

      <section className="section-tight">
        <div className="container-farm">
          <Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {quickActions.map((o) => (
                <QuickActionCard key={o.slug} offering={o} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="The full list"
              title="Six ways to bring Aspen Moon home."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {offerings.map((o, i) => {
              const Tag: any = o.external ? "a" : Link;
              const props: any = o.external
                ? { href: o.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: o.href };
              return (
                <Reveal key={o.title} delay={i * 0.04}>
                  <Tag
                    {...props}
                    className="card-interactive group flex items-start gap-5 p-6"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-olive-800/8 font-display text-lg font-semibold text-olive-800">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-xl font-semibold text-olive-900">
                          {o.title}
                        </h3>
                        {o.external && (
                          <ExternalLink
                            className="h-3.5 w-3.5 text-olive-700"
                            aria-hidden
                          />
                        )}
                      </div>
                      <p className="mt-2 text-[15px] leading-relaxed text-olive-800/85">
                        {o.body}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-700 group-hover:gap-2">
                        Learn more
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </Tag>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-farm">
          <div className="grid items-center gap-10 rounded-4xl bg-cream-100 p-8 sm:p-12 lg:grid-cols-[1fr,1.1fr] lg:p-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={images.flowers.bouquet.src}
                  alt={images.flowers.bouquet.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <SectionHeader
                  eyebrow="Weddings & events"
                  title="Flowers for your big day."
                  description="Our cut flower field supplies weddings, events, and celebrations across the Front Range. Bulk buckets and custom growing by season."
                />
                <Link href="/contact" className="btn-primary mt-6">
                  Inquire about flowers
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

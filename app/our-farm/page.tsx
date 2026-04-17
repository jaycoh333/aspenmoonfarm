import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Sprout, Heart } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { StatsGrid } from "@/components/StatsGrid";
import { FinalCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { farmTimeline, values } from "@/data/story";
import { images } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Our Farm — 90 Acres on the Colorado Front Range",
  description:
    "Aspen Moon Farm is a biodynamic and certified organic farm in Hygiene, Colorado. Meet our team, read our story, and learn how we farm.",
};

export default function OurFarmPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Farm"
        title="A working biodynamic farm on the Front Range."
        description="Ninety acres of vegetables, flowers, grains, pasture, and pollinator habitat — stewarded by a team that believes good food starts with living soil."
        image={images.team.harvest}
        tone="dark"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Farm" }]}
      />

      <section className="section">
        <div className="container-farm">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr,1.3fr]">
            <Reveal>
              <div className="sticky top-28">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
                  Our story
                </span>
                <h2 className="mt-4 font-display text-display-md font-semibold text-olive-900 text-balance">
                  From a small leased plot to 90 acres in Hygiene.
                </h2>
                <p className="mt-5 text-olive-800/85">
                  We've been farming this corner of Boulder County since 2009 —
                  growing the CSA, the market stand, and the soil, one season at a
                  time.
                </p>
                <div className="mt-8">
                  <StatsGrid
                    stats={[
                      { value: `${siteConfig.stats.acreage}`, label: "Acres" },
                      { value: `${new Date().getFullYear() - siteConfig.stats.foundedYear}+`, label: "Years" },
                      { value: `${siteConfig.stats.csaMembers}+`, label: "CSA families" },
                      { value: "2012", label: "Certified organic" },
                    ]}
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Timeline entries={farmTimeline} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="How we farm"
              title="Four values we hold the whole operation to."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((v, i) => {
              const icons = [Leaf, Sprout, Heart, Leaf];
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={v.title} delay={i * 0.05}>
                  <div className="card flex flex-col gap-3 p-7">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-olive-800/8 text-olive-800">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-olive-900">
                      {v.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-olive-800/85">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-farm">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
                <Image
                  src={images.team.hands.src}
                  alt={images.team.hands.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-center">
                <SectionHeader
                  eyebrow="The team"
                  title="A small crew that does the work."
                  description="Aspen Moon is run by a year-round team of farmers, market staff, and interns — joined each season by a crew of field hands. We pay a living wage, operate a real 40-hour week wherever possible, and grow more than just vegetables."
                />
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/employment" className="btn-primary">
                    Join the team
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link href="/our-farm/biodynamic" className="btn-secondary">
                    Biodynamic practices
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-olive-900 text-cream-50">
        <div className="container-farm">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Biodynamic Agriculture",
                body: "The rhythms, preparations, and philosophy behind our growing.",
                href: "/our-farm/biodynamic",
              },
              {
                title: "Find Us",
                body: "Farm stand hours and market schedules across the Front Range.",
                href: "/find-us",
              },
              {
                title: "Community Connections",
                body: "Food donations, school tours, and our sustainability work.",
                href: "/community",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col gap-3 rounded-3xl border border-cream-100/15 bg-cream-50/5 p-7 transition hover:border-gold-300/40 hover:bg-cream-50/10"
              >
                <h3 className="font-display text-2xl font-semibold text-cream-50">
                  {card.title}
                </h3>
                <p className="text-cream-100/85">{card.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-gold-200 group-hover:text-gold-100">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

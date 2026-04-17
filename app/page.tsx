import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { QuickActionCard } from "@/components/QuickActionCard";
import { TrustPoints } from "@/components/TrustPoints";
import { SectionHeader } from "@/components/SectionHeader";
import { SeasonalGrid } from "@/components/SeasonalGrid";
import { CSASteps } from "@/components/CSASteps";
import { StatsGrid } from "@/components/StatsGrid";
import { TestimonialGrid } from "@/components/TestimonialCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { FinalCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { quickActions } from "@/data/offerings";
import { testimonials } from "@/data/testimonials";
import { images } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-tight relative -mt-12 sm:-mt-16 lg:-mt-24">
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

      <section className="section-tight">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="Why Aspen Moon"
              title="Food you can trace to the soil it grew in."
              description="Since 2009, we've built our farm around a simple idea: treat the land well and the food will follow. Here's what that looks like in practice."
            />
          </Reveal>
          <div className="mt-12">
            <Reveal delay={0.1}>
              <TrustPoints />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-farm">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <SectionHeader
                eyebrow="In season now"
                title="A full season of color, flavor, and grain."
                description="From spring starts to fall flowers, the harvest shifts every few weeks. Explore what we grow and what's in the CSA box this month."
              />
              <Link
                href="/what-we-grow"
                className="btn-ghost shrink-0 text-sm"
              >
                See everything we grow
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12">
            <Reveal delay={0.1}>
              <SeasonalGrid />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="How the CSA works"
              title="A weekly box, harvested the day it goes home."
              description="Join the CSA and get a curated share of our best each week — June through November."
            />
          </Reveal>
          <div className="mt-12">
            <Reveal delay={0.1}>
              <CSASteps />
            </Reveal>
          </div>
          <div className="mt-10">
            <a
              href={siteConfig.external.csaStorefront}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              See 2026 share options
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-olive-900 text-cream-50">
        <div className="container-farm">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[5/6] overflow-hidden rounded-4xl">
                <Image
                  src={images.story.sunrise.src}
                  alt={images.story.sunrise.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <span className="eyebrow text-cream-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden />
                  Our story
                </span>
                <h2 className="mt-4 font-display text-display-md font-semibold text-cream-50 text-balance">
                  Fifteen years of building soil on the Front Range.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-cream-100/85">
                  Aspen Moon began in 2009 on a small leased plot outside
                  Longmont. Today we steward 90 acres — growing vegetables,
                  flowers, and heritage grains with biodynamic and certified
                  organic practices, feeding more than 500 Front Range families
                  each season.
                </p>
                <div className="mt-8">
                  <StatsGrid
                    stats={[
                      { value: `${siteConfig.stats.acreage}`, label: "Acres stewarded" },
                      { value: `${new Date().getFullYear() - siteConfig.stats.foundedYear}`, label: "Years in practice" },
                      { value: `${siteConfig.stats.csaMembers}+`, label: "CSA families" },
                      { value: `${siteConfig.stats.cropVarieties}+`, label: "Crop varieties" },
                    ]}
                  />
                </div>
                <div className="mt-8">
                  <Link
                    href="/our-farm"
                    className="btn-secondary bg-cream-50/10 border-cream-100/30 text-cream-50 hover:bg-cream-50/15"
                  >
                    Meet the farm
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="From our community"
              title="Fifteen seasons of shared meals."
              description="What our CSA members, wholesale partners, and neighbors say about eating with us."
              align="center"
            />
          </Reveal>
          <div className="mt-12">
            <Reveal delay={0.1}>
              <TestimonialGrid items={testimonials.slice(0, 3)} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-farm">
          <div className="overflow-hidden rounded-4xl bg-gradient-to-br from-cream-100 via-cream-50 to-gold-100 p-8 sm:p-12 lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr,1fr]">
              <div>
                <span className="eyebrow">
                  <Sparkles className="h-3.5 w-3.5 text-gold-500" aria-hidden />
                  Farm news & recipes
                </span>
                <h2 className="mt-4 font-display text-display-sm font-semibold text-olive-900 text-balance">
                  Seasonal updates, recipes, and first dibs on CSA sign-ups.
                </h2>
                <p className="mt-3 max-w-md text-olive-800/85">
                  One thoughtful email a month. No spam, ever — we're too busy
                  farming.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

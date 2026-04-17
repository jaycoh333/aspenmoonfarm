import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { CSASteps } from "@/components/CSASteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TestimonialGrid } from "@/components/TestimonialCard";
import { FinalCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { csaFeatures } from "@/data/offerings";
import { csaFaq } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import { images } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Join the CSA — 22 weeks of organic produce",
  description:
    "Join Aspen Moon Farm's biodynamic CSA for 22 weeks of just-picked organic vegetables, flowers, and heritage grains in Boulder and Longmont, Colorado.",
};

type ShareOption = {
  name: string;
  ideal: string;
  price: string;
  details: string;
  highlight?: boolean;
};

const shareOptions: ShareOption[] = [
  {
    name: "Small Share",
    ideal: "1–2 people",
    price: "$30/week",
    details: "A curated box of 6–8 varieties each week. Perfect for couples and light eaters.",
  },
  {
    name: "Medium Share",
    ideal: "2–4 people",
    price: "$42/week",
    details: "Our most popular option: 9–12 varieties with enough for full meals all week.",
    highlight: true,
  },
  {
    name: "Large Share",
    ideal: "Family of 4+",
    price: "$58/week",
    details: "12–16 varieties with extra of the staples you cook with every day.",
  },
];

const addOns = [
  "Weekly flower share",
  "Pasture-raised egg share",
  "Heritage grain & flour share",
  "Fermentation & pantry share",
];

export default function CSAPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community Supported Agriculture"
        title="A 22-week season of the best we grow."
        description="Reserve a share and get a weekly box of just-picked, biodynamic produce from our Hygiene farm — June through early November."
        image={images.csa.box}
        tone="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "CSA" },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={siteConfig.external.csaStorefront}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Sign up for 2026
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={siteConfig.external.csaLogin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary border-cream-100/30 bg-cream-50/10 text-cream-50 hover:bg-cream-50/15"
          >
            Member Login
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </PageHeader>

      <section className="section">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="Why members love it"
              title="Four reasons people renew every year."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {csaFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="card flex flex-col gap-3 p-7">
                  <span className="font-display text-4xl font-semibold text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-olive-900">
                    {f.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-olive-800/85">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="How it works"
              title="Four steps from sign-up to supper."
            />
          </Reveal>
          <div className="mt-12">
            <Reveal delay={0.1}>
              <CSASteps />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="Share sizes"
              title="Choose a size that fits your kitchen."
              description="Indicative pricing — final rates and share content are confirmed at sign-up on our secure storefront."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {shareOptions.map((s) => (
              <div
                key={s.name}
                className={
                  "card flex flex-col gap-4 p-7 " +
                  (s.highlight
                    ? "relative ring-2 ring-olive-800/50 shadow-lift"
                    : "")
                }
              >
                {s.highlight && (
                  <span className="absolute right-5 top-5 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-olive-900">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold text-olive-900">
                  {s.name}
                </h3>
                <div className="text-sm text-olive-700">Ideal for {s.ideal}</div>
                <div className="font-display text-3xl font-semibold text-olive-900">
                  {s.price}
                </div>
                <p className="text-[15px] leading-relaxed text-olive-800/85">
                  {s.details}
                </p>
                <a
                  href={siteConfig.external.csaStorefront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    s.highlight ? "btn-primary mt-auto" : "btn-secondary mt-auto"
                  }
                >
                  Reserve this share
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-olive-900/8 bg-cream-50">
            <div className="grid items-center lg:grid-cols-[1fr,1.2fr]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                <Image
                  src={images.flowers.bouquet.src}
                  alt={images.flowers.bouquet.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-10 lg:p-12">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
                  Make it yours
                </span>
                <h3 className="mt-4 font-display text-display-sm font-semibold text-olive-900">
                  Add to any share.
                </h3>
                <p className="mt-3 text-olive-800/85">
                  Customize your CSA with weekly add-ons. Pick one or bundle them all.
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {addOns.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-2.5 rounded-2xl bg-cream-100 px-4 py-2.5 text-sm text-olive-900"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-farm">
          <Reveal>
            <SectionHeader eyebrow="From members" title="Why they keep coming back." />
          </Reveal>
          <div className="mt-10">
            <Reveal delay={0.1}>
              <TestimonialGrid items={testimonials.slice(0, 3)} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-farm">
          <div className="grid gap-10 lg:grid-cols-[1fr,1.5fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Questions"
                title="Everything you need to know before joining."
                as="h2"
              />
              <p className="mt-4 text-olive-800/85">
                Still have a question?{" "}
                <Link href="/contact" className="link-underline">
                  Get in touch
                </Link>{" "}
                and we'll get back to you within a day.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <FAQAccordion items={csaFaq} />
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

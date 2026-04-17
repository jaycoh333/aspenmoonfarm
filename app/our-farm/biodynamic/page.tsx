import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { FinalCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Biodynamic Agriculture",
  description:
    "How Aspen Moon Farm practices biodynamic agriculture in Colorado — closed-loop fertility, celestial rhythms, and regenerative soil building.",
};

const pillars = [
  {
    title: "Living soil",
    body:
      "We build fertility on-farm through compost, cover crops, crop rotation, and biodynamic preparations. Healthy soil is the difference between fine food and extraordinary food.",
  },
  {
    title: "Closed-loop fertility",
    body:
      "Pasture animals, compost piles, and mineral inputs complete the farm's nutrient cycle. We aim to produce our own fertility rather than import it.",
  },
  {
    title: "Celestial rhythms",
    body:
      "Planting, harvesting, and cultivation follow the biodynamic calendar — working with the rhythms of moon, earth, and season.",
  },
  {
    title: "The farm as organism",
    body:
      "A biodynamic farm is treated as a single living organism. Hedgerows, ponds, pollinators, animals, and fields all support one another.",
  },
];

export default function BiodynamicPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our practice"
        title="Biodynamic agriculture, explained plainly."
        description="Biodynamic farming goes beyond organic. It treats the farm as a living organism — building soil, closing loops, and working with natural rhythms."
        image={images.story.cows}
        tone="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Farm", href: "/our-farm" },
          { label: "Biodynamic Agriculture" },
        ]}
      />

      <section className="section">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="Four pillars"
              title="The principles behind every decision on the farm."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="card flex flex-col gap-3 p-7">
                  <span className="font-display text-sm font-medium uppercase tracking-[0.22em] text-gold-700">
                    Pillar {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-olive-900">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-olive-800/85">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-farm">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,1fr]">
            <Reveal>
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
            <Reveal delay={0.1}>
              <div>
                <SectionHeader
                  eyebrow="Biodynamic vs. organic"
                  title="Organic is a floor, not a ceiling."
                  description="Certified organic means no synthetic inputs — a great starting point. Biodynamic practice asks more: how do we actively build soil, close loops, and regenerate the land? We do both."
                />
                <ul className="mt-6 grid gap-3 text-olive-800/90">
                  {[
                    "USDA Certified Organic since 2012.",
                    "Biodynamic preparations applied at key moments in the season.",
                    "On-farm composting, animal integration, and crop rotations.",
                    "Native habitat & pollinator strips across the farm.",
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
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

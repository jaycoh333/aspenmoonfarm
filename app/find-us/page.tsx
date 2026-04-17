import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { LocationCard } from "@/components/LocationCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/data/locations";
import { siteConfig } from "@/data/siteConfig";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Find Us — Farm Stand, Boulder & Longmont Markets",
  description:
    "Visit Aspen Moon Farm at our Hygiene farm stand or meet us at the Boulder and Longmont Farmers Markets. Hours, directions, and seasons.",
};

export default function FindUsPage() {
  const farmStand = locations.find((l) => l.id === "farm-stand")!;
  const markets = locations.filter((l) => l.kind === "market");

  return (
    <>
      <PageHeader
        eyebrow="Visit us"
        title="Three ways to shop the harvest."
        description="Meet us at the farm, in Boulder, or in Longmont. Here's where to find Aspen Moon produce, flowers, and grains each week."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Find Us" }]}
      />

      <section id="farm-stand" className="section-tight">
        <div className="container-farm">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-4xl lg:aspect-[5/4]">
                <Image
                  src={images.hero.farmStand.src}
                  alt={images.hero.farmStand.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  style={{ objectPosition: images.hero.farmStand.position ?? "center" }}
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <LocationCard location={farmStand} />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="markets" className="section bg-cream-100">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="Farmers markets"
              title="Catch us at the Boulder & Longmont markets."
              description="Full stand with vegetables, flowers, and plants in season. CSA pickup available at both locations."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {markets.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.05}>
                <LocationCard location={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-farm">
          <div className="grid gap-8 rounded-4xl bg-gradient-to-br from-olive-900 to-moss-800 p-8 text-cream-100 sm:p-12 lg:grid-cols-[2fr,1fr] lg:p-16">
            <div>
              <span className="eyebrow text-cream-100">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden />
                Stay in the loop
              </span>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-cream-50 text-balance">
                Market schedule changes with the weather.
              </h2>
              <p className="mt-3 text-cream-100/85">
                Our weekly newsletter shares what's fresh, where we'll be, and any
                last-minute changes due to storms or harvest timing.
              </p>
            </div>
            <div className="self-center">
              <NewsletterSignup variant="dark" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-farm">
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="card-interactive flex items-center gap-4 p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-olive-800/8 text-olive-800">
                <Mail className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-olive-700">
                  Email
                </div>
                <div className="font-medium text-olive-900">
                  {siteConfig.contact.email}
                </div>
              </div>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="card-interactive flex items-center gap-4 p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-olive-800/8 text-olive-800">
                <Phone className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-olive-700">
                  Call
                </div>
                <div className="font-medium text-olive-900">
                  {siteConfig.contact.phone}
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Wholesale",
  description:
    "Wholesale organic produce, flowers, and heritage grains for restaurants, grocers, and florists along the Colorado Front Range.",
};

const customerTypes = [
  {
    title: "Restaurants",
    body:
      "Weekly availability lists, delivery to Boulder and Longmont, and menu planning support for chef-driven kitchens.",
  },
  {
    title: "Grocers & Co-ops",
    body:
      "Case-quantity vegetables and flowers, consistent quality, and local grower stories your customers will love.",
  },
  {
    title: "Florists & Event Pros",
    body:
      "Bulk buckets of seasonal cut flowers — peonies, dahlias, zinnias, and more. Wedding and event scheduling.",
  },
];

export default function WholesalePage() {
  return (
    <>
      <PageHeader
        eyebrow="Wholesale"
        title="Partner with a working biodynamic farm."
        description="We work with chefs, grocers, and florists across the Front Range who want the freshest organic produce, heritage grains, and flowers in Colorado."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wholesale" }]}
      />

      <section className="section">
        <div className="container-farm">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr,1fr]">
            <Reveal>
              <div>
                <SectionHeader
                  eyebrow="What we offer"
                  title="Wholesale built around your menu and schedule."
                />
                <ul className="mt-8 flex flex-col gap-4">
                  {[
                    "Weekly availability list emailed every Sunday",
                    "Restaurant delivery Tuesdays and Fridays",
                    "Case-quantity vegetables, flowers, and grains",
                    "Dedicated contact for your account",
                    "USDA Certified Organic & biodynamic on every order",
                    "Flexible standing orders and pre-bookings",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] text-olive-900"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
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
                  src={images.produce.basket.src}
                  alt={images.produce.basket.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-farm">
          <Reveal>
            <SectionHeader
              eyebrow="Who we work with"
              title="Three kinds of partners."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {customerTypes.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="card flex flex-col gap-3 p-7">
                  <span className="font-display text-4xl font-semibold text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-olive-900">
                    {c.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-olive-800/85">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-farm">
          <div className="overflow-hidden rounded-4xl bg-olive-900 p-8 text-cream-100 sm:p-12 lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-[2fr,1fr]">
              <div>
                <span className="eyebrow text-cream-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden />
                  Let's talk
                </span>
                <h2 className="mt-4 font-display text-display-md font-semibold text-cream-50 text-balance">
                  Request our wholesale list.
                </h2>
                <p className="mt-3 max-w-xl text-cream-100/85">
                  Send us a note and we'll follow up within one business day with
                  our current availability, pricing, and delivery schedule.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:justify-self-end">
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Wholesale%20inquiry`}
                  className="btn-gold justify-center"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Email wholesale team
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary justify-center border-cream-100/30 bg-cream-50/10 text-cream-50 hover:bg-cream-50/15"
                >
                  Contact form
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

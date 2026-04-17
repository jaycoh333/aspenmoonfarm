import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { FinalCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { communityPrograms } from "@/data/community";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Community Connections",
  description:
    "Food donations, school tours, SNAP matching, and sustainability initiatives at Aspen Moon Farm.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community Connections"
        title="The farm is a neighbor, too."
        description="Our community work — food donations, school tours, SNAP matching, and ecosystem stewardship — is as central to the farm as the fields themselves."
        image={images.community.donation}
        tone="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Farm", href: "/our-farm" },
          { label: "Community" },
        ]}
      />

      <section className="section">
        <div className="container-farm">
          <div className="space-y-16">
            {communityPrograms.map((program, i) => (
              <Reveal key={program.title} delay={i * 0.05}>
                <div className="grid items-center gap-10 lg:grid-cols-[1fr,1.4fr]">
                  <div className={i % 2 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
                      <Image
                        src={
                          i % 2 === 0
                            ? images.community.donation.src
                            : images.community.tour.src
                        }
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="eyebrow">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
                      {String(i + 1).padStart(2, "0")} of {communityPrograms.length}
                    </span>
                    <h2 className="mt-4 font-display text-display-sm font-semibold text-olive-900 text-balance">
                      {program.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-olive-800/85">
                      {program.summary}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-olive-800/85">
                      {program.body}
                    </p>
                    {program.stat && (
                      <div className="mt-6 inline-flex items-baseline gap-3 rounded-full bg-olive-800/8 px-5 py-3">
                        <span className="font-display text-2xl font-semibold text-olive-900">
                          {program.stat.value}
                        </span>
                        <span className="text-xs font-medium uppercase tracking-[0.22em] text-olive-700">
                          {program.stat.label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-farm">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHeader
                eyebrow="Work together"
                title="Partner with Aspen Moon."
                description="Nonprofits, schools, faith groups, and community organizers — we want to hear from you. Reach out to coordinate a tour, a donation drop, or a SNAP outreach event."
              />
              <div className="mt-6">
                <Link href="/contact" className="btn-primary">
                  Get in touch
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-4xl">
                <Image
                  src={images.community.tour.src}
                  alt={images.community.tour.alt}
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

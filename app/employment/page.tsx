import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Mail } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { openRoles } from "@/data/jobs";
import { images } from "@/data/images";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Employment",
  description:
    "Open positions at Aspen Moon Farm — seasonal field crew, harvest leads, market staff, and full-season internships in Longmont, Colorado.",
};

const benefits = [
  "Living wage, paid weekly",
  "Weekly produce share for every employee",
  "A real 40-hour week where possible",
  "Training in biodynamic & organic practice",
  "Housing stipend for full-season interns",
  "Farm meals during peak season",
];

export default function EmploymentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join the team"
        title="Good food needs good people."
        description="We're hiring for the 2026 season. Field, harvest, market, and internship roles — all positions paid fairly with benefits that reflect how much we value our crew."
        image={images.team.harvest}
        tone="dark"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Employment" },
        ]}
      />

      <section className="section">
        <div className="container-farm">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <SectionHeader
                eyebrow="Open roles"
                title="Current openings."
              />
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Employment%20inquiry`}
                className="btn-secondary"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Email a resume
              </a>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {openRoles.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.05}>
                <article className="card flex h-full flex-col gap-4 p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-olive-800/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-olive-800">
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-olive-700">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-olive-900">
                    {job.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-olive-800/85">
                    {job.summary}
                  </p>
                  <ul className="mt-2 flex flex-col gap-2">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-olive-900"
                      >
                        <Clock
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-olive-700"
                          aria-hidden
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=Application%20-%20${encodeURIComponent(job.title)}`}
                    className="btn-primary mt-auto self-start"
                  >
                    Apply by email
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-farm">
          <div className="grid items-center gap-12 lg:grid-cols-2">
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
              <div>
                <SectionHeader
                  eyebrow="The work"
                  title="Real farming, on a real team."
                  description="Expect physical work, long days during peak season, incredible food, and a crew that knows each other's names. We train every role from the ground up — the only thing we require is that you show up curious and ready to work."
                />
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 rounded-2xl bg-cream-50 px-4 py-2.5 text-sm text-olive-900"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-farm">
          <div className="rounded-4xl border border-olive-900/8 bg-cream-50 p-8 sm:p-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-olive-900">
                  Don't see the right role?
                </h3>
                <p className="mt-2 text-olive-800/85">
                  We're always open to meeting people who love this work. Drop us
                  a line any time.
                </p>
              </div>
              <Link href="/contact" className="btn-primary self-start">
                Reach out
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

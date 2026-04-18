import type { Metadata } from "next";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aspen Moon Farm — questions about the CSA, wholesale, employment, or just to say hello.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Drop us a line."
        description="CSA questions, wholesale inquiries, tour requests, or just to say hello — we'd love to hear from you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-tight">
        <div className="container-farm">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <InfoRow
                  icon={<Mail className="h-5 w-5" aria-hidden />}
                  label="Email"
                  value={siteConfig.contact.email}
                  href={`mailto:${siteConfig.contact.email}`}
                />
                <InfoRow
                  icon={<Phone className="h-5 w-5" aria-hidden />}
                  label="Phone"
                  value={siteConfig.contact.phone}
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                />
                <InfoRow
                  icon={<MapPin className="h-5 w-5" aria-hidden />}
                  label="Visit"
                  value={
                    <>
                      {siteConfig.contact.address.street}
                      <br />
                      {siteConfig.contact.address.city},{" "}
                      {siteConfig.contact.address.state}{" "}
                      {siteConfig.contact.address.zip}
                    </>
                  }
                />

                <div className="card flex items-center gap-4 p-6">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid h-11 w-11 place-items-center rounded-2xl bg-olive-800/8 text-olive-800 transition hover:bg-olive-800/15"
                  >
                    <Instagram className="h-5 w-5" aria-hidden />
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid h-11 w-11 place-items-center rounded-2xl bg-olive-800/8 text-olive-800 transition hover:bg-olive-800/15"
                  >
                    <Facebook className="h-5 w-5" aria-hidden />
                  </a>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-[0.18em] text-olive-700">
                      Follow along
                    </div>
                    <div className="font-medium text-olive-900">
                      Seasonal photos, weekly updates
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-olive-900 to-aspen-900 p-6 text-cream-100">
                  <div className="text-xs font-medium uppercase tracking-[0.22em] text-gold-300">
                    Newsletter
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-cream-50">
                    Seasonal updates & recipes
                  </h3>
                  <p className="mt-2 text-sm text-cream-100/85">
                    One email a month, straight from the farm.
                  </p>
                  <div className="mt-4">
                    <NewsletterSignup variant="dark" compact />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const content = (
    <div className="card flex items-start gap-4 p-6">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-olive-800/8 text-olive-800">
        {icon}
      </div>
      <div>
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-olive-700">
          {label}
        </div>
        <div className="mt-1 font-medium text-olive-900">{value}</div>
      </div>
    </div>
  );
  if (!href) return content;
  return (
    <a href={href} className="block transition hover:-translate-y-0.5">
      {content}
    </a>
  );
}

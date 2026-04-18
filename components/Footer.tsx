import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { NewsletterSignup } from "./NewsletterSignup";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-b from-olive-900 via-olive-900 to-aspen-950 text-cream-100">
      <div className="container-farm py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/80">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-cream-100/85">
              <a
                className="inline-flex items-center gap-2 hover:text-gold-200"
                href={`mailto:${siteConfig.contact.email}`}
              >
                <Mail className="h-4 w-4" aria-hidden />
                {siteConfig.contact.email}
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-gold-200"
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              >
                <Phone className="h-4 w-4" aria-hidden />
                {siteConfig.contact.phone}
              </a>
              <span className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {siteConfig.contact.address.street}, {siteConfig.contact.address.city},{" "}
                {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream-100/20 transition hover:border-gold-300 hover:text-gold-200"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream-100/20 transition hover:border-gold-300 hover:text-gold-200"
              >
                <Facebook className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-4">
            <FooterColumn title="Shop" items={footerNav.shop} />
            <FooterColumn title="The Farm" items={footerNav.farm} />
            <FooterColumn title="Business" items={footerNav.business} />
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
              Stay in touch
            </h4>
            <p className="mt-3 text-sm text-cream-100/80">
              Seasonal updates, recipes, and first dibs on CSA sign-ups.
            </p>
            <div className="mt-5">
              <NewsletterSignup variant="dark" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream-100/10 pt-6 text-xs text-cream-100/60 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Grown with care in{" "}
            {siteConfig.location.city}, {siteConfig.location.state}.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/wholesale" className="hover:text-gold-200">
              Wholesale
            </Link>
            <Link href="/employment" className="hover:text-gold-200">
              Employment
            </Link>
            <Link href="/contact" className="hover:text-gold-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
        {title}
      </h4>
      <ul className="mt-4 flex flex-col gap-2.5 text-sm">
        {items.map((item) =>
          item.external ? (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cream-100/80 transition hover:text-gold-200"
              >
                {item.label}
                <ExternalLink className="h-3 w-3 opacity-70" aria-hidden />
              </a>
            </li>
          ) : (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-cream-100/80 transition hover:text-gold-200"
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

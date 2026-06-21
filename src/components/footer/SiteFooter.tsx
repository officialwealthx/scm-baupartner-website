import Link from "next/link";
import { footerServices } from "@/content/services";
import { regions } from "@/content/regions";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--color-deep-green)]">Projektstart</h2>
          <p className="text-sm text-[var(--color-soft-graphite)]">Starten Sie mit einer klaren Anfrage für Ihr Oberflächen- oder Renovationsprojekt.</p>
          <div className="flex flex-wrap gap-2">
            <Button href="/offerte">Offerte anfragen</Button>
            <Button href={siteConfig.whatsappUrl} variant="secondary">
              WhatsApp schreiben
            </Button>
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-deep-green)]">Kontakt</h3>
          <ul className="space-y-2 text-sm text-[var(--color-soft-graphite)]">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneTechnical}`}>{siteConfig.phoneDisplay}</a>
            </li>
            <li>{siteConfig.address.label}</li>
            <li>{siteConfig.address.line1}</li>
            <li>{siteConfig.address.line2}</li>
            <li>{siteConfig.address.line3}</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-deep-green)]">Leistungen</h3>
          <ul className="space-y-2 text-sm text-[var(--color-soft-graphite)]">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-deep-green)]">Region & Zeiten</h3>
          <ul className="mb-4 space-y-1 text-sm text-[var(--color-soft-graphite)]">
            {regions.map((region) => (
              <li key={region}>{region}</li>
            ))}
          </ul>
          <p className="mb-2 text-sm font-medium text-[var(--color-deep-green)]">Öffnungszeiten</p>
          <ul className="mb-4 text-sm text-[var(--color-soft-graphite)]">
            {siteConfig.openingHours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
          <p className="text-sm text-[var(--color-soft-graphite)]">Sprache: DE | EN (Platzhalter)</p>
          <div className="mt-3 flex gap-3 text-sm">
            <Link href="/impressum" className="text-[var(--color-deep-green)]">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-[var(--color-deep-green)]">
              Datenschutz
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}

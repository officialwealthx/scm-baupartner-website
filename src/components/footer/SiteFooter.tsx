import Link from "next/link";
import { footerServices } from "@/content/services";
import { regionGroups } from "@/content/regions";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section>
            <h2 className="max-w-2xl text-balance text-2xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-3xl lg:text-[2.4rem] lg:leading-[1.08]">
              Reden wir über Ihr nächstes Projekt für Oberfläche, Fassade und Raum.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
              Klare Projektklärung, präzise Ausführung und saubere Übergabe.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/offerte" variant="primaryDark" className="bg-white text-[var(--color-deep-green)] hover:bg-[var(--color-soft-green)] hover:text-[var(--color-deep-green)]">
                Offerte anfragen
              </Button>
              <Button href={siteConfig.whatsappUrl} variant="secondaryLight">
                WhatsApp schreiben
              </Button>
              <Button href={`tel:${siteConfig.phoneTechnical}`} variant="ghost">
                Anrufen
              </Button>
            </div>
          </section>

          <section className="rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Kontakt</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[var(--color-soft-graphite)]">E-Mail</dt>
                <dd>
                  <a className="font-medium text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[var(--color-soft-graphite)]">Telefon</dt>
                <dd>
                  <a className="font-medium text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href={`tel:${siteConfig.phoneTechnical}`}>
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-5 border-t border-[var(--color-border-green-gray)] pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">{siteConfig.address.label}</p>
              <address className="mt-2 not-italic text-sm leading-relaxed text-[var(--color-soft-graphite)]">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.line3}
              </address>
            </div>
          </section>
        </div>
      </div>

      <div className="border-t border-[var(--color-border-green-gray)] bg-white">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          <section>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Kontakt</h3>
          <ul className="space-y-2 text-sm text-[var(--color-soft-graphite)]">
            <li>
              <a className="text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a className="text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href={`tel:${siteConfig.phoneTechnical}`}>
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="pt-1">
              {siteConfig.address.label}
              <br />
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </li>
            </ul>
          </section>

          <section>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Leistungen</h3>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-[var(--color-soft-graphite)]">
            {footerServices.map((service) => (
              <li key={service}>
                <Link href="/leistungen" className="hover:text-[var(--color-deep-green)]">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Unternehmen</h3>
          <div className="space-y-2 text-sm">
            <Link className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href="/ueber-uns">
              Über uns
            </Link>
            <Link className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href="/projekte">
              Einblicke
            </Link>
            <Link className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href="/ratgeber">
              Ratgeber
            </Link>
            <Link className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href="/kontakt">
              Kontakt
            </Link>
            <Link className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href="/login">
              Login
            </Link>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Einsatzgebiet</h3>
          <p className="text-sm font-medium text-[var(--color-deep-green)]">Hauptgebiet: {regionGroups.main}</p>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-soft-graphite)]">
            {regionGroups.expanded.map((region) => (
              <li key={region}>{region}</li>
            ))}
          </ul>
        </section>
      </div>

        <div className="border-t border-[var(--color-border-green-gray)]">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 text-sm text-[var(--color-soft-graphite)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} {siteConfig.name}</p>
            <nav aria-label="Rechtliches" className="flex gap-5">
              <Link href="/impressum" className="text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]">
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

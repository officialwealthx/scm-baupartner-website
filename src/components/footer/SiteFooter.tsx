import Link from "next/link";
import { footerServices } from "@/content/services";
import { regions } from "@/content/regions";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";

export function SiteFooter() {
  return (
    <footer className="mt-20">
      {/* Deep Green closing stage */}
      <div className="bg-[var(--color-deep-green)] text-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-active-green)]">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-active-green)]" />
                SCM Baupartner Studio
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                Bereit für ein Projekt, das sauber geplant und präzise umgesetzt wird?
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/offerte" variant="dark">
                  Offerte anfragen
                </Button>
                <Button href={siteConfig.whatsappUrl} variant="portal">
                  WhatsApp schreiben
                </Button>
                <Button href={`tel:${siteConfig.phoneTechnical}`} variant="ghost" className="text-white hover:bg-white/10">
                  Anrufen
                </Button>
              </div>
            </div>

            {/* Contact Studio Card */}
            <div className="rounded-[var(--radius-xl)] border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">Kontakt Studio</p>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li>
                  <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href={`tel:${siteConfig.phoneTechnical}`}>
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
              </ul>
              <div className="mt-5 border-t border-white/15 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">{siteConfig.address.label}</p>
                <address className="mt-2 not-italic text-sm text-white/85">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.line3}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower footer surface */}
      <div className="border-t border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
          <section>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-deep-green)]">Leistungen</h3>
            <ul className="grid grid-cols-1 gap-2 text-sm text-[var(--color-soft-graphite)] sm:grid-cols-2">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-deep-green)]">Region</h3>
            <ul className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <li
                  key={region}
                  className="rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-3 py-1.5 text-xs font-medium text-[var(--color-deep-green)]"
                >
                  {region}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-deep-green)]">Öffnungszeiten</h3>
            <ul className="space-y-1 text-sm text-[var(--color-soft-graphite)]">
              {siteConfig.openingHours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
            <div className="mt-5">
              <p className="mb-2 text-xs font-medium text-[var(--color-soft-graphite)]">Sprache (Platzhalter)</p>
              <LanguageSwitcher />
            </div>
          </section>
        </div>

        <div className="border-t border-[var(--color-border-green-gray)]">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-4 py-6 text-sm text-[var(--color-soft-graphite)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} {siteConfig.name}</p>
            <nav aria-label="Rechtliches" className="flex gap-4">
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

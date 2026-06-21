import Link from "next/link";
import { footerServices } from "@/content/services";
import { regions } from "@/content/regions";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";

export function SiteFooter() {
  return (
    <footer className="mt-20">
      <div className="relative overflow-hidden bg-[var(--color-deep-green)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            background:
              "radial-gradient(110% 90% at 100% 0%, rgba(53,166,106,0.2) 0%, transparent 58%), radial-gradient(90% 95% at 0% 100%, rgba(47,143,91,0.16) 0%, transparent 54%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <section>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-active-green)]">
                Signature Footer
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-[2.6rem] lg:leading-[1.08]">
                Reden wir über Ihr nächstes Projekt für Oberfläche, Fassade und Raum.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">
                Von der Anfrage bis zur Übergabe: klare Kommunikation, saubere Ausführung.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/offerte" variant="primaryDark">
                  Offerte anfragen
                </Button>
                <Button href={siteConfig.whatsappUrl} variant="secondaryDark">
                  WhatsApp schreiben
                </Button>
                <Button href={`tel:${siteConfig.phoneTechnical}`} variant="ghostDark">
                  Anrufen
                </Button>
              </div>
            </section>

            <section className="rounded-[var(--radius-xl)] border border-white/15 bg-white/[0.06] p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Kontakt</h3>
                <LanguageSwitcher tone="dark" />
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-white/60">E-Mail</dt>
                  <dd>
                    <a className="font-medium text-white hover:text-[var(--color-active-green)]" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-white/60">Telefon</dt>
                  <dd>
                    <a className="font-medium text-white hover:text-[var(--color-active-green)]" href={`tel:${siteConfig.phoneTechnical}`}>
                      {siteConfig.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-5 border-t border-white/15 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{siteConfig.address.label}</p>
                <address className="mt-2 not-italic text-sm leading-relaxed text-white/85">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.line3}
                </address>
              </div>
              <p className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-[0.65rem] font-semibold text-white/85 ring-1 ring-white/15">
                Portal &amp; App · geplant
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_0.9fr] lg:px-8">
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
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Regionen</h3>
            <ul className="space-y-1.5 text-sm text-[var(--color-soft-graphite)]">
              {regions.map((region) => (
                <li key={region}>{region}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Öffnungszeiten</h3>
            <ul className="space-y-1 text-sm text-[var(--color-soft-graphite)]">
              {siteConfig.openingHours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Direkt</h3>
            <div className="space-y-2 text-sm">
              <Link className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href="/kontakt">
                Kontakt
              </Link>
              <Link className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href="/offerte">
                Offerte anfragen
              </Link>
              <Link className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href="/login">
                Kundenlogin
              </Link>
            </div>
          </section>
        </div>

        <div className="border-t border-[var(--color-border-green-gray)]">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-4 py-6 text-sm text-[var(--color-soft-graphite)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
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

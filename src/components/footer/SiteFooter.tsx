import Link from "next/link";
import { footerServices } from "@/content/services";
import { regions } from "@/content/regions";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";

export function SiteFooter() {
  return (
    <footer className="mt-20">
      {/* Deep Green closing studio */}
      <div className="relative overflow-hidden bg-[var(--color-deep-green)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            background:
              "radial-gradient(90% 90% at 100% 0%, rgba(53,166,106,0.22) 0%, transparent 55%), radial-gradient(80% 80% at 0% 100%, rgba(47,143,91,0.18) 0%, transparent 50%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8" data-reveal="fade-up">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="flex flex-col">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-active-green)]">
                <span aria-hidden="true" className="h-px w-7 bg-[var(--color-active-green)]" />
                Sauber geplant, präzise umgesetzt
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-[2.6rem] lg:leading-[1.08]">
                Reden wir über Ihr nächstes Projekt für Oberfläche, Fassade und Raum.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75">
                Eine Anfrage genügt. Wir schätzen Ihr Anliegen ein und stimmen die nächsten Schritte transparent mit Ihnen ab.
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
            </div>

            {/* Contact Studio Card */}
            <div className="flex flex-col rounded-[var(--radius-xl)] border border-white/15 bg-white/[0.06] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Kontakt</p>
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
              <p className="mt-4 inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-[0.65rem] font-semibold text-white/85 ring-1 ring-white/15">
                Kundenportal &amp; App · in Vorbereitung
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower footer surface */}
      <div className="border-t border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <section>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Leistungen</h3>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-[var(--color-soft-graphite)] sm:grid-cols-2">
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
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Region</h3>
            <ul className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <li
                  key={region}
                  className="rounded-full border border-[var(--color-border-green-gray)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-deep-green)]"
                >
                  {region}
                </li>
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
            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="text-xs font-medium text-[var(--color-soft-graphite)]">Sprache</span>
              <LanguageSwitcher />
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

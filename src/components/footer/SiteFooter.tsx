import Link from "next/link";
import Image from "next/image";
import { footerServices } from "@/content/services";
import { regionGroups } from "@/content/regions";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]" data-reveal="fade-up">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative grid gap-8 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-warm-off-white)] p-6 sm:p-8 lg:grid-cols-[1.06fr_0.94fr] lg:p-10">
          <section className="relative z-10">
            <h2 className="max-w-2xl text-balance text-2xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-3xl lg:text-[2.45rem] lg:leading-[1.08]">
              Bereit für eine saubere Umsetzung?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
              Senden Sie uns die wichtigsten Eckdaten. SCM Baupartner prüft Ihr Projekt und meldet sich mit den nächsten sinnvollen Schritten.
            </p>
            <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fresh-green)]">Kontaktwege</p>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-soft-graphite)]">
                <li>Offerte für konkrete Projekte</li>
                <li>Kontaktformular für allgemeine Anfrage</li>
                <li>WhatsApp für schnelle Rückfrage</li>
                <li>Telefon für direkte Abstimmung</li>
              </ul>
            </div>
            <div className="mt-7 max-w-xl">
              <Button href="/offerte" variant="primaryLight" className="w-full justify-center whitespace-nowrap">
                Kostenlose Offerte
              </Button>
              <div className="mt-3 rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white p-3">
                <div className="grid gap-3 sm:grid-cols-3">
                <Button href="/kontakt" variant="secondaryLight" className="w-full justify-center whitespace-nowrap">
                  Kontaktformular
                </Button>
                <Button href={siteConfig.whatsappUrl} variant="secondaryLight" className="w-full justify-center whitespace-nowrap">
                  WhatsApp schreiben
                </Button>
                <Button
                  href={`tel:${siteConfig.phoneTechnical}`}
                  variant="secondaryLight"
                  className="w-full justify-center whitespace-nowrap border-[var(--color-border-green-gray)] bg-white hover:bg-[var(--color-mist-green)]"
                >
                  Anrufen
                </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="relative z-20 rounded-[var(--radius-xl)] border border-white/15 bg-[linear-gradient(155deg,var(--color-deep-green)_0%,var(--color-mineral-green)_100%)] p-6 text-white shadow-[0_24px_60px_-34px_rgba(18,60,46,0.8)]">
            <Image
              src="/brand/scm-logo-white-transparent.png"
              alt="SCM Baupartner"
              width={240}
              height={72}
              className="h-10 w-auto sm:h-11"
            />
            <p className="mt-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/90">
              Antwort in der Regel zeitnah
            </p>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/90">Kontakt</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="grid gap-1">
                <dt className="text-white/70">E-Mail</dt>
                <dd>
                  <a className="font-medium text-white hover:text-[var(--color-active-green)]" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1">
                <dt className="text-white/70">Telefon</dt>
                <dd>
                  <a className="font-medium text-white hover:text-[var(--color-active-green)]" href={`tel:${siteConfig.phoneTechnical}`}>
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-sm font-medium text-white/90">Für Offerten und Rückfragen sind wir direkt erreichbar.</p>
          </section>
        </div>

        <div className="mt-10 grid gap-10 border-t border-[var(--color-border-green-gray)] pt-10 lg:grid-cols-4">
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
                Projekte
              </Link>
              <Link className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href="/ratgeber">
                Ratgeber
              </Link>
              <Link className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]" href="/portal">
                Portal
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

          <section>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Rechtliches</h3>
            <nav aria-label="Rechtliches" className="space-y-2 text-sm">
              <Link href="/impressum" className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block text-[var(--color-deep-green)] hover:text-[var(--color-fresh-green)]">
                Datenschutz
              </Link>
            </nav>
          </section>
        </div>

        <div className="mt-8 border-t border-[var(--color-border-green-gray)] pt-6">
          <div className="flex w-full flex-col gap-4 text-sm text-[var(--color-soft-graphite)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

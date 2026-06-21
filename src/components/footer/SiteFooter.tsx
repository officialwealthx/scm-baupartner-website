import Link from "next/link";
import { footerServices } from "@/content/services";
import { regionGroups } from "@/content/regions";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]" data-reveal="fade-up">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative grid gap-8 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-warm-off-white)] p-6 sm:p-8 lg:grid-cols-[1.06fr_0.94fr] lg:p-10">
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--color-border-green-gray)]/80" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-[56%] hidden w-px bg-[var(--color-border-green-gray)]/65 lg:block" />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-5 right-4 text-[3.6rem] font-semibold tracking-[0.08em] text-[var(--color-deep-green)]/5 sm:text-[5.2rem]"
          >
            SCM BAUPARTNER
          </span>
          <section className="relative">
            <h2 className="max-w-2xl text-balance text-2xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-3xl lg:text-[2.45rem] lg:leading-[1.08]">
              Bereit für eine saubere Umsetzung?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
              Senden Sie uns die wichtigsten Eckdaten. SCM Baupartner prüft Ihr Projekt und meldet sich mit den nächsten sinnvollen Schritten.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/offerte" variant="primaryLight" className="whitespace-nowrap">
                Kostenlose Offerte
              </Button>
              <Button href={siteConfig.whatsappUrl} variant="secondaryLight" className="whitespace-nowrap">
                WhatsApp schreiben
              </Button>
              <Button href={`tel:${siteConfig.phoneTechnical}`} variant="ghost" className="whitespace-nowrap">
                Anrufen
              </Button>
            </div>
          </section>

          <section className="rounded-[var(--radius-xl)] border border-white/15 bg-[linear-gradient(155deg,var(--color-deep-green)_0%,var(--color-mineral-green)_100%)] p-6 text-white shadow-[0_24px_60px_-34px_rgba(18,60,46,0.8)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">Kontakt</h3>
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
            <div className="mt-5 border-t border-white/20 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">{siteConfig.address.label}</p>
              <address className="mt-2 not-italic text-sm leading-relaxed text-white/85">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.line3}
              </address>
            </div>
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
            <p>Zürich und Umgebung</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

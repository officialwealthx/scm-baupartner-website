import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";

const footerColumns = [
  {
    title: "Leistungen",
    links: [
      { label: "Malerarbeiten", href: "/leistungen" },
      { label: "Gipserarbeiten und Verputz", href: "/leistungen" },
      { label: "Nassbau und Trockenbau", href: "/leistungen" },
      { label: "Fassadenarbeiten", href: "/leistungen" },
      { label: "Renovationen", href: "/leistungen" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über SCM Baupartner", href: "/ueber-uns" },
      { label: "Unsere Geschichte", href: "/ueber-uns#geschichte" },
      { label: "Team", href: "/ueber-uns#team" },
      { label: "Qualität und Sicherheit", href: "/ueber-uns#qualitaet" },
      { label: "Versicherungsschutz in Vorbereitung", href: "/ueber-uns#versicherung" },
      { label: "Karriere", href: "/ueber-uns#karriere" },
      { label: "Lehrstellen", href: "/ueber-uns#lehrstellen" },
    ],
  },
  {
    title: "Portal und App",
    links: [
      { label: "Kundenportal", href: "/portal" },
      { label: "Projektstatus", href: "/portal" },
      { label: "Offerten und Freigaben", href: "/portal" },
      { label: "Zahlungen und Quittungen", href: "/portal" },
      { label: "Login", href: "/login" },
    ],
  },
  {
    title: "Ratgeber",
    links: [
      { label: "Malerarbeiten", href: "/ratgeber" },
      { label: "Schimmel und Schäden", href: "/ratgeber" },
      { label: "Graffiti und Schutz", href: "/ratgeber" },
      { label: "Unterhalt und Pflege", href: "/ratgeber" },
      { label: "Vorbereitung und Ablauf", href: "/ratgeber" },
    ],
  },
] as const;

function ArrowGlyph() {
  return (
    <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center text-[var(--color-fresh-green)]">
      ▸
    </span>
  );
}

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="scm-text-link inline-flex min-h-10 items-center gap-1.5 py-1 text-sm">
      <ArrowGlyph />
      <span>{label}</span>
    </Link>
  );
}

function ArrowAnchor({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="scm-text-link inline-flex min-h-10 items-center gap-1.5 py-1 text-sm">
      <ArrowGlyph />
      <span>{label}</span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] sm:mt-24" data-reveal="fade-up">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[var(--radius-xl)] bg-[linear-gradient(150deg,var(--color-deep-green)_0%,var(--color-mineral-green)_100%)] p-6 text-white sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Image src="/brand/scm-logo-white-transparent.png" alt="SCM Baupartner" width={240} height={72} className="pointer-events-none h-10 w-auto select-none" draggable={false} />
            <Link
              href="/offerte"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Offerte anfragen
            </Link>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85">
            Saubere Oberflächen, klare Abläufe und verlässliche Umsetzung für Projekte in Zürich und ausgewählten Regionen.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {footerColumns.map((column) => (
            <section key={column.title}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">{column.title}</h3>
              <ul className="space-y-0.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <ArrowLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">Kontakt</h3>
            <ul className="space-y-0.5">
              <li>
                <ArrowAnchor href={`mailto:${siteConfig.email}`} label={siteConfig.email} />
              </li>
              <li>
                <ArrowAnchor href={`tel:${siteConfig.phoneTechnical}`} label={siteConfig.phoneDisplay} />
              </li>
              <li>
                <ArrowLink href="/offerte" label="Offerte anfragen" />
              </li>
              <li>
                <ArrowLink href="/kontakt" label="Kontaktformular" />
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-8 border-t border-[var(--color-border-green-gray)] pt-5">
          <div className="flex flex-col gap-2 text-sm text-[var(--color-soft-graphite)] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href="/impressum" className="scm-text-link inline-flex items-center text-sm">
                Impressum
              </Link>
              <Link href="/datenschutz" className="scm-text-link inline-flex items-center text-sm">
                Datenschutz
              </Link>
            </div>
            <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

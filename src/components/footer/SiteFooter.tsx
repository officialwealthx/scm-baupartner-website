"use client";

import Link from "next/link";
import { useState } from "react";
import { MainLogo } from "@/components/brand/BrandImageLogo";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

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
      { label: "Unsere Geschichte", href: "/ueber-uns" },
      { label: "Team", href: "/ueber-uns" },
      { label: "Qualität und Sicherheit", href: "/ueber-uns" },
      { label: "Versicherungsschutz in Vorbereitung", href: "/ueber-uns" },
      { label: "Karriere", href: "/ueber-uns" },
      { label: "Lehrstellen", href: "/ueber-uns" },
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
      { label: "Blog", href: "/blog" },
      { label: "Malerarbeiten", href: "/ratgeber" },
      { label: "Schimmel und Schäden", href: "/ratgeber" },
      { label: "Graffiti und Schutz", href: "/ratgeber" },
      { label: "Unterhalt und Pflege", href: "/ratgeber" },
      { label: "Vorbereitung und Ablauf", href: "/ratgeber" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "Offerte anfragen", href: "/offerte" },
      { label: "WhatsApp schreiben", href: siteConfig.whatsappUrl },
      { label: "Anrufen", href: `tel:${siteConfig.phoneTechnical}` },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
] as const;

function ArrowLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");
  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="scm-text-link scm-text-link-arrow inline-flex min-h-10 items-center py-1 text-sm"
      >
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className="scm-text-link scm-text-link-arrow inline-flex min-h-10 items-center py-1 text-sm">
      {label}
    </Link>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className={cn("h-4 w-4 text-[var(--color-deep-green)] transition-transform", open ? "rotate-180" : "rotate-0")}
      aria-hidden="true"
    >
      <path d="m5 7 5 6 5-6" />
    </svg>
  );
}

export function SiteFooter() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <footer
      className="mt-20 border-t border-[var(--color-border-green-gray)] bg-[linear-gradient(180deg,var(--color-warm-off-white)_0%,var(--color-porcelain-surface)_100%)] sm:mt-24"
      data-reveal="fade-up"
    >
      <div className="mx-auto w-full max-w-[1280px] overflow-x-clip px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[var(--radius-xl)] bg-[linear-gradient(150deg,var(--color-deep-green)_0%,var(--color-mineral-green)_100%)] p-6 text-white sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <MainLogo tone="dark" />
              </div>
              <h2 className="mt-4 text-balance text-[1.5rem] font-semibold leading-tight text-white sm:text-[1.72rem] lg:text-[1.9rem]">
                Bereit für eine saubere Umsetzung?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                Saubere Oberflächen, klare Abläufe und verlässliche Umsetzung für Projekte in Zürich und ausgewählten Regionen.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/offerte"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/20 lg:w-auto"
              >
                Offerte anfragen
              </Link>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 lg:justify-end">
                <Link href="/kontakt" className="inline-flex min-h-10 items-center gap-1 text-sm text-white transition-colors hover:text-white/80">
                  Kontaktformular
                  <span aria-hidden="true">›</span>
                </Link>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center gap-1 text-sm text-white transition-colors hover:text-white/80"
                >
                  WhatsApp schreiben
                  <span aria-hidden="true">›</span>
                </a>
                <a href={`tel:${siteConfig.phoneTechnical}`} className="inline-flex min-h-10 items-center gap-1 text-sm text-white transition-colors hover:text-white/80">
                  Anrufen
                  <span aria-hidden="true">›</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 hidden gap-8 min-[1200px]:grid min-[1200px]:grid-cols-5">
          {footerColumns.map((column) => (
            <section key={`desktop-${column.title}`}>
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
        </div>

        <div className="mt-10 min-[1200px]:hidden">
          <ul className="divide-y divide-[var(--color-border-green-gray)] border-y border-[var(--color-border-green-gray)]">
            {footerColumns.map((column) => {
              const open = openAccordion === column.title;
              const id = `footer-${column.title.toLowerCase().replaceAll(" ", "-")}`;
              return (
                <li key={`mobile-${column.title}`}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={id}
                    onClick={() => setOpenAccordion((current) => (current === column.title ? null : column.title))}
                    className="flex min-h-12 w-full items-center justify-between gap-3 py-2 text-left"
                  >
                    <span className="text-base font-semibold text-[var(--color-deep-green)]">{column.title}</span>
                    <ChevronIcon open={open} />
                  </button>
                  {open ? (
                    <ul id={id} className="grid gap-1 pb-3">
                      {column.links.map((link) => (
                        <li key={`${column.title}-mobile-${link.label}`}>
                          <ArrowLink href={link.href} label={link.label} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-8 border-t border-[var(--color-border-green-gray)] pt-5">
          <div className="flex flex-col gap-2 text-sm text-[var(--color-soft-graphite)] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href="/impressum" className="scm-text-link scm-text-link-arrow inline-flex min-h-11 items-center text-sm">
                Impressum
              </Link>
              <Link href="/datenschutz" className="scm-text-link scm-text-link-arrow inline-flex min-h-11 items-center text-sm">
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

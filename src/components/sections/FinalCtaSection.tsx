import Link from "next/link";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { siteConfig } from "@/content/site";

export function FinalCtaSection() {
  return (
    <section className="mt-14 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-deep-green)] p-6 text-white sm:p-8">
      <BrandLockup tone="dark" />
      <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight sm:text-[1.95rem]">Bereit für eine saubere Umsetzung?</h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
        Saubere Oberflächen, klare Abläufe und verlässliche Umsetzung für Projekte in Zürich und ausgewählten Regionen.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Link
          href="/offerte"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
        >
          Offerte anfragen
        </Link>
        <Link href="/kontakt" className="inline-flex min-h-11 items-center gap-1 text-sm text-white transition-colors hover:text-white/80">
          Kontaktformular
          <span aria-hidden="true">›</span>
        </Link>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1 text-sm text-white transition-colors hover:text-white/80"
        >
          WhatsApp schreiben
          <span aria-hidden="true">›</span>
        </a>
        <a href={`tel:${siteConfig.phoneTechnical}`} className="inline-flex min-h-11 items-center gap-1 text-sm text-white transition-colors hover:text-white/80">
          Anrufen
          <span aria-hidden="true">›</span>
        </a>
      </div>
    </section>
  );
}

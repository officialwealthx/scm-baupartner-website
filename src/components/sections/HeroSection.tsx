import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const heroTrust = [
  "8 Mitarbeitende",
  "45+ Jahre kombinierte Familienerfahrung",
  "Zürich und erweiterte Region",
];

const materialStrips = [
  { label: "Oberfläche", tone: "var(--color-soft-green)" },
  { label: "Fassade", tone: "var(--color-mist-green)" },
  { label: "Innenraum", tone: "var(--color-porcelain-surface)" },
];

const portalRows = [
  { label: "Projektstatus", hint: "geplant" },
  { label: "Nächster Termin", hint: "geplant" },
  { label: "Dokumente", hint: "geplant" },
];

export function HeroSection() {
  return (
    <section className="scm-surface-wipe relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
      {/* Cinematic green depth — soft radial light, no checkered or AI grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          background:
            "radial-gradient(120% 120% at 100% 0%, var(--color-mist-green) 0%, transparent 48%), radial-gradient(95% 95% at 0% 100%, var(--color-soft-green) 0%, transparent 42%)",
        }}
      />

      <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:p-12">
        {/* Left: editorial content column */}
        <div data-reveal="fade-up" className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-fresh-green)]">
            Maler · Gipser · Fassaden · Renovation
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.05]">
            Oberflächen, Räume und Fassaden — sauber geplant, präzise umgesetzt.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)]">
            SCM Baupartner verbindet Maler-, Gipser-, Fassaden- und Renovationsarbeiten mit moderner Projektkommunikation für Zürich und die erweiterte Region.
          </p>

          {/* Fine line accent under the lead copy */}
          <span
            aria-hidden="true"
            data-reveal="line"
            className="mt-7 block h-px w-40 bg-gradient-to-r from-[var(--color-fresh-green)] to-transparent"
          />

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/offerte" variant="primaryLight">
              Offerte anfragen
            </Button>
            <Button href="/portal" variant="secondaryLight">
              Kundenportal ansehen
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="ghost">
              WhatsApp schreiben
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-[var(--color-soft-graphite)]">
            {heroTrust.map((fact, index) => (
              <li key={fact} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[var(--color-fresh-green)]" />
                )}
                {fact}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: layered surface stage (placeholders only, no fake image) */}
        <div data-reveal="pop" className="relative min-w-0">
          {/* Large image / surface stage, ready for a real SCM photograph */}
          <figure className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)]">
            <div
              data-reveal="mask"
              className="relative aspect-[16/11] w-full bg-gradient-to-br from-[var(--color-mist-green)] via-white to-[var(--color-soft-green)]"
              aria-hidden="true"
            >
              {/* Corner ticks suggest a framed, considered composition */}
              <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-[var(--color-fresh-green)]/55" />
              <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-[var(--color-fresh-green)]/55" />
              <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[var(--color-fresh-green)]/55" />
              <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[var(--color-fresh-green)]/55" />
              {/* Subtle material seam */}
              <span className="absolute inset-y-8 left-1/2 w-px bg-[var(--color-border-green-gray)]/70" />
            </div>
            <figcaption className="flex items-center justify-between gap-3 border-t border-[var(--color-border-green-gray)] px-4 py-3">
              <span className="text-xs font-medium text-[var(--color-soft-graphite)]">
                Bildfläche — echte SCM-Aufnahmen folgen.
              </span>
              <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">
                Platzhalter
              </span>
            </figcaption>
          </figure>

          {/* Material strips: a quiet sample row, not a card wall */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {materialStrips.map((strip) => (
              <div
                key={strip.label}
                className="flex h-14 items-end rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] px-2.5 pb-2"
                style={{ background: strip.tone }}
              >
                <span className="text-[0.7rem] font-medium text-[var(--color-deep-green)]">{strip.label}</span>
              </div>
            ))}
          </div>

          {/* Single, honest portal preview — overlaps the stage for depth */}
          <div className="relative z-10 mt-4 rounded-[var(--radius-lg)] border border-white/10 bg-[var(--color-deep-green)] p-4 text-white shadow-[var(--shadow-soft)] sm:-mt-2 sm:ml-auto sm:w-[20rem]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/85">Kundenportal</p>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--color-active-green)] ring-1 ring-white/15">
                in Vorbereitung
              </span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {portalRows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between rounded-[var(--radius-md)] bg-white/5 px-2.5 py-1.5"
                >
                  <span className="text-[0.72rem] font-medium text-white/90">{row.label}</span>
                  <span className="text-[0.6rem] font-medium uppercase tracking-wide text-white/65">
                    {row.hint}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

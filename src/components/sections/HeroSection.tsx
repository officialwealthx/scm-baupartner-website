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

const appRows = [
  { label: "Projektstatus", hint: "geplant" },
  { label: "Nächster Termin", hint: "geplant" },
  { label: "Dokumente", hint: "geplant" },
];

export function HeroSection() {
  return (
    <section className="scm-surface-wipe relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
      {/* Cinematic green depth + fine construction lines, no checkered grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          background:
            "radial-gradient(120% 120% at 100% 0%, var(--color-mist-green) 0%, transparent 48%), radial-gradient(95% 95% at 0% 100%, var(--color-soft-green) 0%, transparent 42%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-[var(--color-border-green-gray)] to-transparent lg:block"
      />

      <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:p-12">
        {/* Left: content */}
        <div className="scm-fade-up min-w-0">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fresh-green)]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-active-green)]" />
            SCM Baupartner · Surface Studio
          </p>
          <h1 className="text-balance text-3xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.05]">
            Oberflächen, Räume und Fassaden — sauber geplant, präzise umgesetzt.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)]">
            SCM Baupartner verbindet Maler-, Gipser-, Fassaden- und Renovationsarbeiten mit moderner Projektkommunikation für Zürich und die erweiterte Region.
          </p>

          {/* Fine line-draw accent under the lead copy */}
          <span
            aria-hidden="true"
            className="scm-line-draw-ready mt-7 block h-px w-40 bg-gradient-to-r from-[var(--color-fresh-green)] to-transparent"
          />

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/offerte">Offerte anfragen</Button>
            <Button href="/portal" variant="secondary">
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

        {/* Right: cinematic surface composition (placeholders only, no fake image) */}
        <div className="scm-fade-up relative min-w-0" style={{ animationDelay: "120ms" }}>
          {/* Large surface / image placeholder frame */}
          <div className="relative rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-deep-green)]">
                Surface Composition
              </p>
              <span className="rounded-full bg-[var(--color-mist-green)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">
                Platzhalter
              </span>
            </div>

            {/* Main image frame with corner ticks and depth */}
            <div className="relative mt-4 overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-green-gray)] bg-gradient-to-br from-[var(--color-mist-green)] to-[var(--color-soft-green)]">
              <div className="relative aspect-[16/10] w-full" aria-hidden="true">
                <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-[var(--color-fresh-green)]/60" />
                <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-[var(--color-fresh-green)]/60" />
                <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-[var(--color-fresh-green)]/60" />
                <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[var(--color-fresh-green)]/60" />
              </div>
              <p className="absolute inset-x-0 bottom-0 bg-white/70 px-3 py-2 text-center text-[0.7rem] font-medium text-[var(--color-soft-graphite)] backdrop-blur-sm">
                Bildflächen werden später mit echten SCM-Aufnahmen ersetzt.
              </p>
            </div>

            {/* Layered material strips */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {materialStrips.map((strip) => (
                <div
                  key={strip.label}
                  className="flex h-16 flex-col justify-end rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] p-2"
                  style={{ background: strip.tone }}
                >
                  <span className="text-[0.7rem] font-medium text-[var(--color-deep-green)]">{strip.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating portal mini card + app status card */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[var(--color-deep-green)] p-4 text-white shadow-[var(--shadow-soft)]">
              <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-active-green)]" />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Kundenportal</p>
                <p className="mt-1 text-sm font-semibold">Projektstatus im Blick</p>
                <p className="mt-0.5 text-[0.7rem] text-white/70">Preview · in Vorbereitung</p>
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-4 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-deep-green)]">SCM App</p>
                <span className="rounded-full bg-[var(--color-mist-green)] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">
                  Preview
                </span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {appRows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between rounded-[var(--radius-md)] bg-[var(--color-porcelain-surface)] px-2.5 py-1.5"
                  >
                    <span className="text-[0.7rem] font-medium text-[var(--color-deep-green)]">{row.label}</span>
                    <span className="text-[0.6rem] font-medium uppercase tracking-wide text-[var(--color-fresh-green)]">
                      {row.hint}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

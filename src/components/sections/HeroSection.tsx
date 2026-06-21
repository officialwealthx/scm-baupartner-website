import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const heroTrust = [
  "8 Mitarbeitende",
  "45+ Jahre kombinierte Familienerfahrung",
  "Zürich und erweiterte Region",
];

const materialPanels = [
  { label: "Oberfläche", tone: "bg-[var(--color-soft-green)]" },
  { label: "Fassade", tone: "bg-[var(--color-mist-green)]" },
  { label: "Innenraum", tone: "bg-[var(--color-porcelain-surface)]" },
];

export function HeroSection() {
  return (
    <section className="scm-surface-wipe relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
      {/* Subtle green depth + fine lines, no checkered grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(120% 120% at 100% 0%, var(--color-mist-green) 0%, transparent 45%), radial-gradient(90% 90% at 0% 100%, var(--color-soft-green) 0%, transparent 40%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-[var(--color-border-green-gray)] lg:block"
      />

      <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        {/* Left: content */}
        <div className="scm-fade-up min-w-0">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fresh-green)]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-active-green)]" />
            SCM Baupartner Studio
          </p>
          <h1 className="text-balance text-3xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-4xl lg:text-5xl">
            Oberflächen, Räume und Fassaden — sauber geplant, präzise umgesetzt.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)]">
            SCM Baupartner verbindet Maler-, Gipser-, Fassaden- und Renovationsarbeiten mit moderner Projektkommunikation für Zürich und die erweiterte Region.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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

        {/* Right: visual composition (placeholder surfaces, no fake image) */}
        <div className="scm-fade-up relative min-w-0" style={{ animationDelay: "120ms" }}>
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-deep-green)]">
                Surface Composition
              </p>
              <span className="rounded-full bg-[var(--color-mist-green)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">
                Platzhalter
              </span>
            </div>

            {/* Material layers — fine lines + green-based depth */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {materialPanels.map((panel) => (
                <div
                  key={panel.label}
                  className={`flex h-24 flex-col justify-end rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] p-2 ${panel.tone}`}
                >
                  <span className="text-[0.7rem] font-medium text-[var(--color-deep-green)]">{panel.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[0.7rem] leading-relaxed text-[var(--color-soft-graphite)]">
              Bildflächen für reale Material-, Innenraum- und Fassadenaufnahmen. Inhalte folgen.
            </p>
          </div>

          {/* Portal-preview mini card */}
          <div className="mt-4 flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[var(--color-deep-green)] p-4 text-white shadow-[var(--shadow-soft)]">
            <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-active-green)]" />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Kundenportal</p>
              <p className="mt-1 text-sm font-semibold">Projektstatus im Blick</p>
              <p className="mt-0.5 text-[0.7rem] text-white/70">Preview · in Vorbereitung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const materialStrips = [
  { label: "Oberfläche", tone: "var(--color-soft-green)" },
  { label: "Fassade", tone: "var(--color-mist-green)" },
  { label: "Innenraum", tone: "var(--color-porcelain-surface)" },
];

export function HeroSection() {
  return (
    <section className="scm-surface-wipe relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          background:
            "radial-gradient(120% 120% at 100% 0%, var(--color-mist-green) 0%, transparent 48%), radial-gradient(95% 95% at 0% 100%, var(--color-soft-green) 0%, transparent 42%)",
        }}
      />
      <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:p-12">
        <div data-reveal="fade-up" className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-fresh-green)]">
            Maler · Gipser · Fassaden · Renovation
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.05]">
            Oberflächen, Räume und Fassaden — sauber geplant, präzise umgesetzt.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)]">
            SCM Baupartner verbindet Maler-, Gipser-, Fassaden- und Renovationsarbeiten mit klarer Kommunikation für Zürich und die erweiterte Region.
          </p>
          <span
            aria-hidden="true"
            data-reveal="line"
            className="mt-7 block h-px w-40 bg-gradient-to-r from-[var(--color-fresh-green)] to-transparent"
          />

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/offerte" variant="primaryLight">
              Offerte anfragen
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="secondaryLight">
              WhatsApp schreiben
            </Button>
          </div>
          <Button href="/portal" variant="ghost" className="mt-3 px-0 py-1 text-sm font-medium">
            Kundenportal ansehen
          </Button>
        </div>

        <div data-reveal="pop" className="relative min-w-0">
          <figure className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)]">
            <div
              data-reveal="mask"
              className="relative aspect-[16/11] w-full bg-gradient-to-br from-[var(--color-mist-green)] via-white to-[var(--color-soft-green)]"
              aria-hidden="true"
            >
              <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-[var(--color-fresh-green)]/55" />
              <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-[var(--color-fresh-green)]/55" />
              <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[var(--color-fresh-green)]/55" />
              <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[var(--color-fresh-green)]/55" />
              <span className="absolute inset-y-8 left-1/2 w-px bg-[var(--color-border-green-gray)]/70" />
            </div>
            <figcaption className="flex items-center justify-between gap-3 border-t border-[var(--color-border-green-gray)] px-4 py-3">
              <span className="text-xs font-medium text-[var(--color-soft-graphite)]">
                Echte SCM-Aufnahmen folgen.
              </span>
              <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">
                Platzhalter
              </span>
            </figcaption>
          </figure>

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
        </div>
      </div>
    </section>
  );
}

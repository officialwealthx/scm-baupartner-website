import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const materialStrips = [
  { label: "Mineralische Fläche", tone: "var(--color-soft-green)" },
  { label: "Fassadenstruktur", tone: "var(--color-mist-green)" },
  { label: "Innenraumoberfläche", tone: "var(--color-porcelain-surface)" },
] as const;

export function HeroSection() {
  return (
    <section className="scm-surface-wipe relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.65]"
        style={{
          background:
            "radial-gradient(120% 120% at 100% 0%, var(--color-mist-green) 0%, transparent 48%), radial-gradient(95% 95% at 0% 100%, var(--color-soft-green) 0%, transparent 42%)",
        }}
      />
      <div className="relative grid gap-9 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:p-12">
        <div data-reveal="fade-up" className="min-w-0">
          <h1 className="text-balance text-[2.05rem] font-semibold leading-[1.08] text-[var(--color-deep-green)] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.03]">
            Saubere Oberflächen. Klare Abläufe. Verlässliche Ausführung.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)] sm:text-lg">
            SCM Baupartner verbindet Maler-, Gipser-, Fassaden- und Renovationsarbeiten mit klarer Kommunikation für Zürich und die erweiterte Region.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/offerte" variant="primaryLight">
              Offerte anfragen
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="secondaryLight">
              WhatsApp schreiben
            </Button>
            <Button href="/login" variant="ghost">
              Login
            </Button>
          </div>

          <p className="mt-6 text-sm font-medium text-[var(--color-deep-green)]">
            8 Mitarbeitende · 45+ Jahre kombinierte Familienerfahrung · Zürich und Umgebung
          </p>
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
              <span className="absolute inset-x-7 top-1/2 h-px bg-[var(--color-border-green-gray)]/65" />
            </div>
            <figcaption className="flex items-center justify-between gap-3 border-t border-[var(--color-border-green-gray)] px-4 py-3">
              <span className="text-xs font-medium text-[var(--color-soft-graphite)]">Ruhige Materialfläche für die Projektvorschau.</span>
              <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">Bildfläche</span>
            </figcaption>
          </figure>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {materialStrips.map((strip) => (
              <div
                key={strip.label}
                className="flex h-14 items-end rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] px-2.5 pb-2"
                style={{ background: strip.tone }}
              >
                <span className="text-[0.65rem] font-medium text-[var(--color-deep-green)]">{strip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

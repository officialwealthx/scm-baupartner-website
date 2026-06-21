import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const confidenceCards = [
  { title: "Besichtigung", text: "Projekt klären" },
  { title: "Transparente Offerte", text: "sauber nachvollziehbar" },
  { title: "Saubere Übergabe", text: "mit Qualitätscheck" },
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
        <div className="min-w-0">
          <h1 data-reveal="fade-up" className="text-balance text-[2.05rem] font-semibold leading-[1.08] text-[var(--color-deep-green)] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.03]">
            Saubere Oberflächen. Klare Abläufe. Verlässliche Ausführung.
          </h1>
          <p data-reveal="fade-up" className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)] sm:text-lg">
            SCM Baupartner übernimmt Malerarbeiten, Gipserarbeiten, Fassaden, Renovationen und Ausbesserungen für Privatkunden, Verwaltungen und Immobilienbesitzer in Zürich und Umgebung.
          </p>

          <div data-reveal="fade-up" className="mt-7 flex flex-wrap gap-3">
            <Button href="/offerte" variant="primaryLight">
              Kostenlose Offerte
            </Button>
            <Button href="/leistungen" variant="secondaryLight">
              Leistungen ansehen
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="ghost">
              WhatsApp schreiben
            </Button>
          </div>

          <p data-reveal="fade-up" className="mt-6 text-sm font-medium text-[var(--color-deep-green)]">
            Besichtigung nach Projektklärung · transparente Offerte · saubere Übergabe
          </p>
        </div>

        <div data-reveal="pop" className="relative min-w-0">
          <figure className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)]">
            <div
              data-reveal="mask"
              className="relative aspect-[16/11] w-full overflow-hidden bg-[linear-gradient(150deg,var(--color-porcelain-surface)_0%,white_48%,var(--color-mist-green)_100%)]"
              aria-hidden="true"
            >
              <span className="absolute inset-0 opacity-35" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(18,60,46,0.08) 1px, transparent 0)", backgroundSize: "10px 10px" }} />
              <span className="absolute inset-x-8 top-7 h-px bg-[var(--color-border-green-gray)]/70" />
              <span className="absolute inset-x-8 bottom-7 h-px bg-[var(--color-border-green-gray)]/70" />
              <span className="absolute inset-y-7 left-8 w-px bg-[var(--color-border-green-gray)]/70" />
              <span className="absolute inset-y-7 right-8 w-px bg-[var(--color-border-green-gray)]/70" />
            </div>
          </figure>

          <div data-reveal-stagger className="mt-4 grid gap-2.5 sm:grid-cols-3">
            {confidenceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white/90 px-3 py-3"
              >
                <p className="text-xs font-semibold text-[var(--color-deep-green)]">{card.title}</p>
                <p className="mt-1 text-[0.74rem] text-[var(--color-soft-graphite)]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

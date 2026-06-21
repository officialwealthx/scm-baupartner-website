import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const floatingCards = [
  { title: "Klare Offerte", text: "Transparent aufgebaut und nachvollziehbar." },
  { title: "Saubere Übergabe", text: "Strukturiert ausgeführt mit Qualitätsfokus." },
] as const;

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden rounded-[1.9rem] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.72]"
        style={{
          background:
            "radial-gradient(120% 110% at 100% 0%, var(--color-soft-green) 0%, transparent 54%), radial-gradient(85% 100% at 0% 100%, var(--color-mist-green) 0%, transparent 48%)",
        }}
      />
      <div className="relative grid min-h-[31rem] gap-10 p-6 sm:p-10 lg:min-h-[72vh] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:p-14 xl:min-h-[80vh]">
        <div className="min-w-0 max-w-3xl">
          <h1 data-reveal="fade-up" className="text-balance text-[2.05rem] font-semibold leading-[1.05] text-[var(--color-deep-green)] sm:text-5xl lg:text-[3.7rem]">
            Malerarbeiten, Gipserarbeiten und Renovationen in Zürich sauber umgesetzt.
          </h1>
          <p data-reveal="fade-up" className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)] sm:text-lg">
            SCM Baupartner ist Ihr zuverlässiger Partner für Malerarbeiten, Gipserarbeiten, Fassaden, Renovationen und Ausbesserungen in Zürich und Umgebung.
          </p>
          <p data-reveal="fade-up" className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            Professionell, sauber und nachvollziehbar – mit klarer Offerte, geschützter Umgebung und strukturierter Ausführung.
          </p>

          <div data-reveal="fade-up" className="mt-7 flex flex-wrap gap-3">
            <Button href="/offerte" variant="primaryLight">
              Kostenlose Offerte
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="secondaryLight">
              WhatsApp schreiben
            </Button>
          </div>
        </div>

        <div data-reveal="pop" className="relative min-w-0 lg:justify-self-end">
          <figure className="relative overflow-hidden rounded-[1.7rem] border border-[var(--color-border-green-gray)] bg-white shadow-[0_30px_80px_-40px_rgba(18,60,46,0.52)]">
            <div
              data-reveal="mask"
              className="relative aspect-[4/4.3] w-full overflow-hidden bg-[linear-gradient(145deg,var(--color-porcelain-surface)_0%,white_42%,var(--color-mist-green)_100%)] sm:aspect-[6/5] lg:aspect-[5/6] lg:w-[27rem]"
              aria-hidden="true"
            >
              <span
                className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, rgba(18,60,46,0.08) 1px, transparent 0)",
                  backgroundSize: "10px 10px",
                }}
              />
              <span className="absolute inset-x-8 top-8 h-px bg-[var(--color-border-green-gray)]/75" />
              <span className="absolute inset-x-8 bottom-8 h-px bg-[var(--color-border-green-gray)]/75" />
              <span className="absolute inset-y-8 left-8 w-px bg-[var(--color-border-green-gray)]/75" />
              <span className="absolute inset-y-8 right-8 w-px bg-[var(--color-border-green-gray)]/75" />
              <span className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--color-soft-green)]/55 blur-3xl" />
              <span className="absolute -bottom-24 -left-14 h-56 w-56 rounded-full bg-[var(--color-mist-green)]/80 blur-3xl" />
            </div>
          </figure>

          <div data-reveal-stagger className="mt-4 grid gap-3 sm:grid-cols-2">
            {floatingCards.map((card) => (
              <div
                key={card.title}
                className="scm-lift rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white/96 px-4 py-3"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-fresh-green)]">{card.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

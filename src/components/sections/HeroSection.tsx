import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const detailPills = [
  { title: "Klare Offerte", text: "Transparent aufgebaut und nachvollziehbar." },
  { title: "Saubere Übergabe", text: "Strukturiert ausgeführt mit Qualitätsfokus." },
] as const;

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.74]"
        style={{
          background:
            "radial-gradient(130% 115% at 100% 0%, var(--color-soft-green) 0%, transparent 55%), radial-gradient(92% 105% at 0% 100%, var(--color-mist-green) 0%, transparent 50%)",
        }}
      />
      <div className="relative grid min-h-[32rem] gap-9 p-6 sm:p-10 lg:min-h-[78vh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:p-14 xl:px-16">
        <div className="min-w-0 max-w-3xl">
          <h1
            data-reveal="fade-up"
            className="overflow-visible text-balance text-[2rem] font-semibold leading-[1.12] text-[var(--color-deep-green)] sm:text-5xl lg:text-[3.65rem]"
          >
            Malerarbeiten, Gipserarbeiten und Renovationen in Zürich.
          </h1>
          <p data-reveal="fade-up" className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)] sm:text-lg">
            SCM Baupartner ist Ihr zuverlässiger Partner für Malerarbeiten, Gipserarbeiten, Fassaden, Renovationen und Ausbesserungen in Zürich und Umgebung.
          </p>
          <p data-reveal="fade-up" className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            Professionell, sauber und persönlich. Mit klarer Offerte, geschützter Umgebung und zuverlässiger Ausführung.
          </p>

          <div data-reveal="fade-up" className="mt-7 flex flex-wrap gap-3">
            <Button href="/offerte" variant="primaryLight">
              Kostenlose Offerte
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="secondaryLight">
              WhatsApp schreiben
            </Button>
            <Button href={`tel:${siteConfig.phoneTechnical}`} variant="secondaryLight" className="border-[var(--color-border-green-gray)] bg-transparent">
              Telefon
            </Button>
          </div>
        </div>

        <div data-reveal="pop" className="relative min-w-0 lg:justify-self-end">
          <figure className="relative overflow-hidden rounded-[1.8rem] border border-[var(--color-border-green-gray)] bg-white shadow-[0_30px_80px_-40px_rgba(18,60,46,0.52)]">
            <div
              data-reveal="mask"
              className="relative aspect-[4/4.1] w-full overflow-hidden bg-[linear-gradient(145deg,var(--color-porcelain-surface)_0%,white_44%,var(--color-mist-green)_100%)] sm:aspect-[6/5] lg:aspect-[5/6] lg:w-[29rem]"
              aria-hidden="true"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(18,60,46,0.08)_1px,transparent_0)] [background-size:12px_12px] opacity-35" />
              <span className="absolute inset-x-7 top-7 h-px bg-[var(--color-border-green-gray)]/80" />
              <span className="absolute inset-x-7 bottom-7 h-px bg-[var(--color-border-green-gray)]/80" />
              <span className="absolute inset-y-7 left-7 w-px bg-[var(--color-border-green-gray)]/80" />
              <span className="absolute inset-y-7 right-7 w-px bg-[var(--color-border-green-gray)]/80" />
              <span className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-[var(--color-border-green-gray)]/70 bg-white/45" />
              <span className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[var(--color-soft-green)]/60 blur-3xl" />
              <span className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[var(--color-mist-green)]/85 blur-3xl" />
            </div>
          </figure>

          <div data-reveal-stagger className="mt-4 grid gap-3 sm:grid-cols-2">
            {detailPills.map((card) => (
              <div
                key={card.title}
                className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white/95 px-4 py-2.5"
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

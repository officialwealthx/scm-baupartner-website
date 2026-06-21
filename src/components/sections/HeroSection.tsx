import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const microFacts = [
  "Klare Offerte und nachvollziehbare Schritte",
  "Saubere Übergabe mit Qualitätsfokus",
] as const;

export function HeroSection() {
  return (
    <section className="relative isolate -mx-4 overflow-hidden bg-[var(--color-porcelain-surface)] sm:-mx-6 lg:-mx-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.9]"
        style={{
          background:
            "radial-gradient(120% 110% at 100% 0%, rgba(232,243,237,0.95) 0%, rgba(240,247,243,0.2) 54%, transparent 72%), radial-gradient(95% 90% at 0% 100%, rgba(240,247,243,0.9) 0%, rgba(255,255,255,0.35) 58%, transparent 76%)",
        }}
      />
      <div className="relative mx-auto grid min-h-[62vh] w-full max-w-[1360px] gap-8 px-4 py-12 sm:min-h-[68vh] sm:px-6 sm:py-14 md:min-h-[76vh] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:px-8 lg:py-16 xl:min-h-[82vh]">
        <div className="min-w-0 max-w-3xl lg:pr-3">
          <h1
            data-reveal="fade-up"
            className="overflow-visible text-balance text-[1.95rem] font-semibold leading-[1.14] text-[var(--color-deep-green)] sm:text-[2.7rem] lg:text-[3.45rem] lg:leading-[1.1]"
          >
            Malerarbeiten, Gipserarbeiten und Renovationen in Zürich.
          </h1>
          <p data-reveal="fade-up" className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)] sm:text-lg">
            SCM Baupartner ist Ihr zuverlässiger Partner für Malerarbeiten, Gipserarbeiten, Fassadenarbeiten, Renovationen und Ausbesserungen in Zürich und Umgebung.
          </p>
          <p data-reveal="fade-up" className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            Professionell, sauber und persönlich. Mit klarer Offerte, geschützter Umgebung und zuverlässiger Ausführung.
          </p>

          <div data-reveal="fade-up" className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
            <Button href="/offerte" variant="primaryLight" className="w-full">
              Kostenlose Offerte
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="secondaryLight" className="w-full">
              WhatsApp schreiben
            </Button>
            <Button
              href={`tel:${siteConfig.phoneTechnical}`}
              variant="secondaryLight"
              className="w-full border-[var(--color-border-green-gray)] bg-white sm:col-span-2 sm:max-w-[13.75rem]"
            >
              Telefon
            </Button>
          </div>

          <ul data-reveal-stagger className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-medium text-[var(--color-soft-graphite)] sm:text-sm">
            {microFacts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--color-fresh-green)]/80" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="pop" className="relative min-w-0 lg:justify-self-end">
          <figure className="relative overflow-hidden rounded-[1.4rem] border border-[var(--color-border-green-gray)]/80 bg-white/70 shadow-[0_30px_80px_-40px_rgba(18,60,46,0.45)]">
            <div
              data-reveal="mask"
              className="relative aspect-[4/3.8] w-full overflow-hidden bg-[linear-gradient(142deg,var(--color-porcelain-surface)_0%,white_44%,var(--color-mist-green)_100%)] sm:aspect-[6/4.7] lg:aspect-[4/4.55] lg:w-[35rem]"
              aria-hidden="true"
            >
              <span className="absolute inset-0 opacity-45" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(18,60,46,0.08) 1px, transparent 0)", backgroundSize: "11px 11px" }} />
              <span className="absolute inset-0 opacity-55" style={{ backgroundImage: "linear-gradient(122deg, transparent 0%, transparent 48%, rgba(18,60,46,0.1) 49%, transparent 50%, transparent 100%)", backgroundSize: "180px 180px" }} />
              <span className="absolute left-6 right-6 top-6 h-px bg-[var(--color-border-green-gray)]/80" />
              <span className="absolute left-6 right-6 bottom-6 h-px bg-[var(--color-border-green-gray)]/80" />
              <span className="absolute bottom-[14%] right-[10%] h-[62%] w-[52%] rounded-[1.5rem] border border-[var(--color-border-green-gray)]/90 bg-white/58" />
              <span className="absolute left-[9%] top-[12%] h-[58%] w-[38%] rounded-[1.15rem] border border-[var(--color-border-green-gray)]/80 bg-white/44" />
              <span className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-soft-green)]/75 blur-3xl" />
              <span className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--color-mist-green)]/90 blur-3xl" />
            </div>
          </figure>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_bottom,rgba(247,248,245,0)_0%,rgba(247,248,245,1)_92%)]"
      />
    </section>
  );
}

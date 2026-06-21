import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative isolate -mx-4 -mt-10 overflow-hidden bg-[var(--color-warm-off-white)] sm:-mx-6 lg:-mx-8">
      <div className="relative mx-auto grid min-h-[82svh] w-full max-w-[1360px] grid-cols-1 items-center gap-8 px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-26 md:min-h-[78svh] md:pb-16 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] lg:gap-0 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="relative z-20 min-w-0 max-w-3xl lg:pr-6">
          <p data-reveal="fade-up" className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]/80 sm:text-sm">
            Maler und Gipser in Zürich
          </p>
          <h1
            data-reveal="fade-up"
            className="mt-4 overflow-visible text-balance text-[2.2rem] font-semibold leading-[1.11] text-[var(--color-deep-green)] sm:text-[2.75rem] lg:text-[3.55rem] lg:leading-[1.08] xl:text-[4.05rem]"
          >
            Malerarbeiten, Gipserarbeiten und Renovationen in Zürich.
          </h1>
          <p data-reveal="fade-up" className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)] sm:text-lg">
            SCM Baupartner ist Ihr zuverlässiger Partner für Malerarbeiten, Gipserarbeiten, Fassadenarbeiten, Renovationen und Ausbesserungen in Zürich und Umgebung.
          </p>
          <p data-reveal="fade-up" className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            Professionell, sauber und persönlich. Mit klarer Offerte, geschützter Umgebung und zuverlässiger Ausführung.
          </p>

          <div data-reveal="fade-up" className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap">
            <Button href="/offerte" variant="primaryLight" className="w-full whitespace-nowrap sm:w-auto">
              Kostenlose Offerte
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="secondaryLight" className="w-full whitespace-nowrap sm:w-auto">
              WhatsApp schreiben
            </Button>
            <Button
              href={`tel:${siteConfig.phoneTechnical}`}
              variant="secondaryLight"
              className="w-full whitespace-nowrap border-[var(--color-border-green-gray)] bg-white sm:col-span-2 sm:w-auto"
            >
              Telefon
            </Button>
          </div>
        </div>

        <div data-reveal="pop" className="relative min-w-0 lg:-ml-14 lg:justify-self-end">
          <figure className="heroImageStage relative min-h-[20.5rem] w-full overflow-hidden sm:min-h-[25rem] lg:min-h-[34rem] xl:min-h-[38rem]">
            <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(247,248,245,0.82)_0%,rgba(247,248,245,0.2)_34%,rgba(18,60,46,0.18)_100%)]" />
            <span className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[var(--color-soft-green)]/70 blur-3xl" />
            <span className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[var(--color-mist-green)]/80 blur-3xl" />
          </figure>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,rgba(247,248,245,0)_0%,rgba(247,248,245,1)_100%)]"
      />
    </section>
  );
}

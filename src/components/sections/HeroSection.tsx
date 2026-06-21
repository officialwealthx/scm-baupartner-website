import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative isolate -mx-4 -mt-10 overflow-hidden bg-[var(--color-warm-off-white)] sm:-mx-6 lg:-mx-8">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/hero/af38c578147c774a82688d1913992fc8870252cfa44030da51f4c9d975adba95.png"
          alt="Saubere Malerarbeiten und Renovation in einem hellen Wohnraum"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,248,245,0.97)_0%,rgba(247,248,245,0.92)_38%,rgba(247,248,245,0.58)_68%,rgba(247,248,245,0.3)_100%)] sm:bg-[linear-gradient(90deg,rgba(247,248,245,0.96)_0%,rgba(247,248,245,0.84)_34%,rgba(247,248,245,0.42)_66%,rgba(247,248,245,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(18,60,46,0.06)_0%,rgba(18,60,46,0)_52%)]" />
      </div>
      <div className="relative mx-auto grid min-h-[82svh] w-full max-w-[1360px] grid-cols-1 items-center gap-8 px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-24 md:min-h-[78svh] md:pb-16 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] lg:gap-0 lg:px-8 lg:pb-20 lg:pt-20">
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

        <div aria-hidden="true" className="hidden lg:block" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,rgba(247,248,245,0)_0%,rgba(247,248,245,1)_100%)]"
      />
    </section>
  );
}

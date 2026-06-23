import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative isolate left-1/2 right-1/2 -mt-10 w-screen -translate-x-1/2 overflow-hidden bg-[var(--color-warm-off-white)]">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/hero/af38c578147c774a82688d1913992fc8870252cfa44030da51f4c9d975adba95.png"
          alt="Saubere Malerarbeiten und Renovation in einem hellen Wohnraum"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[74%_center] sm:object-[67%_center] lg:object-[58%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(101deg,rgba(247,248,245,0.95)_0%,rgba(247,248,245,0.85)_36%,rgba(247,248,245,0.63)_60%,rgba(247,248,245,0.2)_100%)] sm:bg-[linear-gradient(98deg,rgba(247,248,245,0.93)_0%,rgba(247,248,245,0.8)_40%,rgba(247,248,245,0.46)_67%,rgba(247,248,245,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(112%_82%_at_8%_24%,rgba(232,243,237,0.36)_0%,rgba(232,243,237,0.1)_52%,rgba(232,243,237,0)_100%)]" />
      </div>
      <div className="relative mx-auto grid min-h-[80svh] w-full max-w-[1360px] grid-cols-1 items-center gap-8 px-4 pb-16 pt-20 sm:min-h-[84svh] sm:px-6 sm:pb-20 sm:pt-24 md:min-h-[76svh] lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,51%)_minmax(0,49%)] lg:gap-0 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="relative z-20 min-w-0 max-w-3xl lg:pr-6">
          <h1
            data-reveal="fade-up"
            className="overflow-visible text-balance text-[2.02rem] font-semibold leading-[1.1] text-[var(--color-deep-green)] sm:text-[2.4rem] lg:text-[2.66rem] lg:leading-[1.08] xl:text-[2.98rem]"
          >
            Malerarbeiten, Gipserarbeiten und Renovationen in Zürich.
          </h1>
          <p data-reveal="fade-up" className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)] sm:text-lg">
            Saubere Malerarbeiten, präzise Gipserarbeiten und zuverlässige Renovationen für Wohnungen, Häuser und Immobilien in Zürich und Umgebung.
          </p>
          <p data-reveal="fade-up" className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            Wir planen klar, arbeiten sauber und übergeben erst, wenn die Ausführung stimmt.
          </p>
          <p data-reveal="fade-up" className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-[var(--color-deep-green)]/88 sm:text-[0.98rem]">
            Handwerkserfahrung seit 1981. Modern organisiert für heute.
          </p>

          <div
            data-reveal="fade-up"
            className="mt-8 grid max-w-3xl grid-cols-1 items-stretch justify-center gap-3 md:max-w-[32rem] md:grid-cols-1 lg:max-w-[34rem] lg:grid-cols-2 xl:max-w-[47rem] xl:grid-cols-3"
          >
            <Button href="/offerte" variant="primaryLight" className="w-full justify-center whitespace-nowrap lg:col-span-2 xl:col-span-1">
              Kostenlose Offerte
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="secondaryLight" className="w-full justify-center whitespace-nowrap">
              WhatsApp schreiben
            </Button>
            <Button
              href={`tel:${siteConfig.phoneTechnical}`}
              variant="secondaryLight"
              className="w-full justify-center whitespace-nowrap border-[var(--color-border-green-gray)] bg-white"
            >
              Telefon
            </Button>
          </div>
        </div>

        <div aria-hidden="true" className="hidden lg:block" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,rgba(247,248,245,0)_0%,rgba(247,248,245,0.92)_62%,rgba(247,248,245,1)_100%)]"
      />
    </section>
  );
}

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
          className="object-cover object-[72%_center] sm:object-[65%_center] lg:object-[58%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(98deg,rgba(247,248,245,0.985)_0%,rgba(247,248,245,0.94)_40%,rgba(247,248,245,0.72)_64%,rgba(247,248,245,0.45)_100%)] sm:bg-[linear-gradient(96deg,rgba(247,248,245,0.95)_0%,rgba(247,248,245,0.82)_38%,rgba(247,248,245,0.48)_67%,rgba(247,248,245,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(18,60,46,0.12)_0%,rgba(18,60,46,0.04)_34%,rgba(18,60,46,0)_60%)]" />
      </div>
      <div className="relative mx-auto grid min-h-[74svh] w-full max-w-[1360px] grid-cols-1 items-center gap-8 px-4 pb-14 pt-20 sm:min-h-[80svh] sm:px-6 sm:pb-16 sm:pt-24 md:min-h-[76svh] md:pb-20 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] lg:gap-0 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="relative z-20 min-w-0 max-w-3xl rounded-[var(--radius-lg)] bg-[rgba(247,248,245,0.64)] p-4 backdrop-blur-[1px] sm:p-5 lg:rounded-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:pr-6">
          <h1
            data-reveal="fade-up"
            className="overflow-visible text-balance text-[2.15rem] font-semibold leading-[1.1] text-[var(--color-deep-green)] sm:text-[2.6rem] lg:text-[3.15rem] lg:leading-[1.08] xl:text-[3.45rem]"
          >
            Malerarbeiten, Gipserarbeiten und Renovationen in Zürich.
          </h1>
          <p data-reveal="fade-up" className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)] sm:text-lg">
            Saubere Malerarbeiten, präzise Gipserarbeiten und zuverlässige Renovationen für Wohnungen, Häuser und Immobilien in Zürich und Umgebung.
          </p>
          <p data-reveal="fade-up" className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            Wir planen klar, arbeiten sauber und übergeben erst, wenn die Ausführung stimmt.
          </p>

          <div data-reveal="fade-up" className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,0.8fr)]">
            <Button href="/offerte" variant="primaryLight" className="w-full whitespace-nowrap sm:col-span-2 lg:col-span-1">
              Kostenlose Offerte
            </Button>
            <Button href={siteConfig.whatsappUrl} variant="secondaryLight" className="w-full whitespace-nowrap">
              WhatsApp schreiben
            </Button>
            <Button
              href={`tel:${siteConfig.phoneTechnical}`}
              variant="secondaryLight"
              className="w-full whitespace-nowrap border-[var(--color-border-green-gray)] bg-white sm:col-span-2 lg:col-span-1"
            >
              Telefon
            </Button>
          </div>
        </div>

        <div aria-hidden="true" className="hidden lg:block" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(to_bottom,rgba(247,248,245,0)_0%,rgba(247,248,245,0.95)_66%,rgba(247,248,245,1)_100%)]"
      />
    </section>
  );
}

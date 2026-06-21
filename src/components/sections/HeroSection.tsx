import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function HeroSection() {
  return (
    <section className="rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-6 sm:p-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fresh-green)]">SCM Baupartner Studio</p>
      <h1 className="max-w-4xl text-balance text-3xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-4xl lg:text-5xl">
        Oberflächen, Räume und Fassaden — sauber geplant, präzise umgesetzt.
      </h1>
      <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-[var(--color-soft-graphite)]">
        SCM Baupartner verbindet Maler-, Gipser-, Fassaden- und Renovationsarbeiten mit moderner Projektkommunikation für Zürich und die erweiterte Region.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/offerte">Offerte anfragen</Button>
        <Button href="/portal" variant="secondary">
          Kundenportal ansehen
        </Button>
        <Button href={siteConfig.whatsappUrl} variant="ghost">
          WhatsApp schreiben
        </Button>
      </div>
    </section>
  );
}

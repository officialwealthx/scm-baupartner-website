import { SectionShell } from "@/components/layout/SectionShell";

const steps = [
  {
    title: "Anfrage und Einschätzung",
    description: "Erste Aufnahme Ihres Anliegens und eine klare Ersteinschätzung.",
  },
  {
    title: "Besichtigung und Offerte",
    description: "Besichtigung vor Ort und eine nachvollziehbare, transparente Offerte.",
  },
  {
    title: "Ausführung und Koordination",
    description: "Saubere Umsetzung mit abgestimmten Terminen und klarer Koordination.",
  },
  {
    title: "Qualitätscheck und Übergabe",
    description: "Gemeinsamer Qualitätscheck und eine geordnete Projektübergabe.",
  },
] as const;

export function ProcessTimelineSection() {
  return (
    <SectionShell
      eyebrow="Ablauf"
      title="Von der Anfrage bis zur Übergabe."
      description="Vier klar geführte Phasen — transparent abgestimmt, sauber koordiniert."
    >
      <ol className="scm-stagger relative mt-10 grid gap-8 md:grid-cols-4 md:gap-5">
        {/* Connecting rail: vertical on mobile, horizontal on desktop */}
        <span
          aria-hidden="true"
          className="scm-line-draw-ready absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-[var(--color-fresh-green)] via-[var(--color-border-green-gray)] to-transparent md:left-0 md:right-0 md:top-6 md:bottom-auto md:h-px md:w-full md:bg-gradient-to-r"
        />
        {steps.map((step, index) => (
          <li key={step.title} className="scm-fade-up relative pl-16 md:pl-0">
            <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-green-gray)] bg-white text-sm font-semibold text-[var(--color-deep-green)] shadow-[var(--shadow-soft)] md:relative">
              <span aria-hidden="true" className="absolute inset-0 rounded-full ring-2 ring-[var(--color-soft-green)]" />
              <span className="relative">{String(index + 1).padStart(2, "0")}</span>
            </span>
            <div className="md:mt-5">
              <h3 className="text-base font-semibold text-[var(--color-deep-green)]">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

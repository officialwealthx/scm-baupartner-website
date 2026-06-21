import { SectionShell } from "@/components/layout/SectionShell";

const imageSlots = [
  {
    label: "Oberfläche im Detail",
    hint: "Nahaufnahme einer realen Oberfläche.",
    span: "lg:col-span-3 lg:row-span-2",
    ratio: "min-h-64 lg:min-h-[26rem]",
  },
  {
    label: "Innenraum nach der Ausführung",
    hint: "Raum nach der sauberen Übergabe.",
    span: "lg:col-span-3",
    ratio: "min-h-48",
  },
  {
    label: "Fassade und Schutz",
    hint: "Aussenfläche, Pflege und Werterhalt.",
    span: "lg:col-span-3",
    ratio: "min-h-48",
  },
  {
    label: "Vorher und nachher",
    hint: "Direkter Vergleich der Ausführung.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
  {
    label: "Ausführung im Team",
    hint: "Menschen bei der Arbeit.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
  {
    label: "Material und Werkzeug",
    hint: "Womit sauber gearbeitet wird.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
] as const;

export function InsightsSection() {
  return (
    <SectionShell
      eyebrow="Einblicke"
      title="Einblicke in Material, Räume und Ausführung."
      description="Diese Flächen sind Bildplätze. Echte Aufnahmen aus realen Projekten werden später eingesetzt — ohne erfundene Projektdetails."
      width="wide"
    >
      <div data-reveal-stagger className="mt-10 grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {imageSlots.map((slot, index) => (
          <article
            key={slot.label}
            className={`scm-lift group relative flex flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-gradient-to-br from-[var(--color-mist-green)] via-white to-[var(--color-soft-green)] p-5 ${slot.span} ${slot.ratio}`}
          >
            {/* Only the anchor slot carries the "real photo follows" note,
                so the grid is not papered with repeated placeholder badges. */}
            {index === 0 && (
              <span
                aria-hidden="true"
                className="absolute right-4 top-4 rounded-full bg-white/75 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)] backdrop-blur-sm"
              >
                Echte SCM-Bilder folgen
              </span>
            )}
            <div>
              <p className="text-sm font-semibold text-[var(--color-deep-green)]">{slot.label}</p>
              <p className="mt-1 text-xs text-[var(--color-soft-graphite)]">{slot.hint}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

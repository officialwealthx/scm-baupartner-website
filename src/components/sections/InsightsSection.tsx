import { SectionShell } from "@/components/layout/SectionShell";

const imageSlots = [
  {
    label: "Hero / Surface Detail",
    hint: "Nahaufnahme einer realen Oberfläche.",
    span: "lg:col-span-3 lg:row-span-2",
    ratio: "min-h-64 lg:min-h-[26rem]",
  },
  {
    label: "Interior / Innenraum",
    hint: "Raum nach der Ausführung.",
    span: "lg:col-span-3",
    ratio: "min-h-48",
  },
  {
    label: "Facade / Schutz",
    hint: "Aussenfläche und Schutz.",
    span: "lg:col-span-3",
    ratio: "min-h-48",
  },
  {
    label: "Vorher-Nachher",
    hint: "Direkter Vergleich.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
  {
    label: "Team / Ausführung",
    hint: "Menschen bei der Arbeit.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
  {
    label: "Material / Werkzeug",
    hint: "Werkzeug und Material.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
] as const;

export function InsightsSection() {
  return (
    <SectionShell
      eyebrow="Einblicke"
      title="Einblicke in Oberflächen, Räume und Ausführung."
      description="Diese Flächen sind Bildplätze. Echte Aufnahmen aus realen Projekten werden später eingesetzt — ohne erfundene Projektdetails."
      width="wide"
    >
      <div className="scm-stagger mt-10 grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {imageSlots.map((slot) => (
          <article
            key={slot.label}
            className={`scm-fade-up scm-lift group relative flex flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-green-gray)] bg-gradient-to-br from-[var(--color-mist-green)] to-[var(--color-soft-green)] p-5 ${slot.span} ${slot.ratio}`}
          >
            <span
              aria-hidden="true"
              className="absolute right-4 top-4 rounded-full bg-white/70 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)] backdrop-blur-sm"
            >
              Echtes SCM Bild folgt
            </span>
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

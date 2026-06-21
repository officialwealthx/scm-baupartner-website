import { SectionShell } from "@/components/layout/SectionShell";

const imageSlots = [
  {
    label: "Materialdetail",
    hint: "Echtes SCM Bild folgt.",
    span: "lg:col-span-3 lg:row-span-2",
    ratio: "min-h-64 lg:min-h-[26rem]",
  },
  {
    label: "Innenraum",
    hint: "Echtes SCM Bild folgt.",
    span: "lg:col-span-3",
    ratio: "min-h-48",
  },
  {
    label: "Fassade",
    hint: "Echtes SCM Bild folgt.",
    span: "lg:col-span-3",
    ratio: "min-h-48",
  },
  {
    label: "Vorher / Nachher",
    hint: "Echtes SCM Bild folgt.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
  {
    label: "Ausführung",
    hint: "Echtes SCM Bild folgt.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
  {
    label: "Werkzeug und Oberfläche",
    hint: "Echtes SCM Bild folgt.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
] as const;

export function InsightsSection() {
  return (
    <SectionShell title="Einblicke in Material, Räume und Ausführung." description="Editoriale Bildarchitektur für echte SCM-Aufnahmen." width="wide">
      <div data-reveal-stagger className="mt-10 grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {imageSlots.map((slot) => (
          <article
            key={slot.label}
            data-reveal="mask"
            className={`relative flex flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-gradient-to-br from-[var(--color-mist-green)] via-white to-[var(--color-soft-green)] p-5 ${slot.span} ${slot.ratio}`}
          >
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

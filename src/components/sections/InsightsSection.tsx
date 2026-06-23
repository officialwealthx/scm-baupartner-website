import { SectionShell } from "@/components/layout/SectionShell";

const imageSlots = [
  {
    label: "Material und Oberfläche",
    hint: "Saubere Vorarbeit und abgestimmte Materialien.",
    span: "lg:col-span-3 lg:row-span-2",
    ratio: "min-h-64 lg:min-h-[26rem]",
  },
  {
    label: "Innenräume",
    hint: "Ruhige Ausführung in bewohnten Bereichen.",
    span: "lg:col-span-3",
    ratio: "min-h-48",
  },
  {
    label: "Fassade",
    hint: "Schutz und Werterhalt an Aussenflächen.",
    span: "lg:col-span-3",
    ratio: "min-h-48",
  },
  {
    label: "Projektablauf",
    hint: "Arbeitsschritte transparent geplant.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
  {
    label: "Ausführung",
    hint: "Koordinierte Arbeitsschritte vor Ort.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
  {
    label: "Kontrolle und Übergabe",
    hint: "Qualität vor der Übergabe geprüft.",
    span: "lg:col-span-2",
    ratio: "min-h-48",
  },
] as const;

export function InsightsSection() {
  return (
    <SectionShell
      title="Einblicke in typische Arbeitsbereiche."
      description="Malerarbeiten, Gipserarbeiten und Renovationen mit klarer Struktur statt unnötigem Aufwand."
      width="wide"
    >
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

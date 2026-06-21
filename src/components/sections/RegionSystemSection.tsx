import { SectionShell } from "@/components/layout/SectionShell";
import { regions } from "@/content/regions";

export function RegionSystemSection() {
  return (
    <SectionShell
      variant="surface"
      eyebrow="Einsatzgebiet"
      title="Für Projekte in Zürich und der erweiterten Region."
      description="Alle Gebiete gleichwertig — ohne Rangfolge und ohne erfundene Standorte."
    >
      <ul data-reveal-stagger className="mt-8 flex flex-wrap gap-2.5">
        {regions.map((region) => (
          <li
            key={region}
            className="scm-press inline-flex items-center rounded-full border border-[var(--color-border-green-gray)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]"
          >
            {region}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

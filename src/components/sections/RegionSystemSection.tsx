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
      <ul className="scm-stagger mt-8 flex flex-wrap gap-2.5">
        {regions.map((region) => (
          <li
            key={region}
            className="scm-fade-up scm-press inline-flex items-center gap-2 rounded-full border border-[var(--color-border-green-gray)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--color-fresh-green)]" />
            {region}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

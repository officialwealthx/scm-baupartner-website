import { SectionShell } from "@/components/layout/SectionShell";
import { regions } from "@/content/regions";

export function RegionSystemSection() {
  return (
    <SectionShell
      variant="surface"
      title="Für Projekte in Zürich und der erweiterten Region."
      description="Servicegebiet ohne Rangfolge — gleichwertig geplant und koordiniert."
    >
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-6 sm:p-7">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-55"
            style={{
              background:
                "linear-gradient(120deg, transparent 0%, var(--color-mist-green) 35%, transparent 70%), repeating-linear-gradient(0deg, transparent, transparent 34px, rgba(47,143,91,0.12) 35px), repeating-linear-gradient(90deg, transparent, transparent 34px, rgba(47,143,91,0.12) 35px)",
            }}
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">
              Einsatzgebiet
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-soft-graphite)]">
              Abstraktes Regionspanel für Zürich und die erweiterte Region. Keine Standortkarte, keine Filialdarstellung.
            </p>
            <div className="mt-6 flex items-end justify-between">
              <span className="text-5xl font-semibold text-[var(--color-deep-green)]/25">ZH+</span>
              <span className="rounded-full border border-[var(--color-border-green-gray)] bg-white px-3 py-1 text-xs font-medium text-[var(--color-deep-green)]">
                Servicegebiet
              </span>
            </div>
          </div>
        </div>

        <ul data-reveal-stagger className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {regions.map((region) => (
            <li
              key={region}
              className="scm-press inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]"
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

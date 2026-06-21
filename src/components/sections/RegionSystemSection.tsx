import { SectionShell } from "@/components/layout/SectionShell";
import { regionGroups } from "@/content/regions";

export function RegionSystemSection() {
  return (
    <SectionShell
      variant="surface"
      title="Einsatzgebiet / Region"
      description="Map-inspirierte Darstellung ohne API-Karte oder Standortpins."
    >
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div
          data-reveal="mask"
          className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-6 sm:p-7"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-55"
            style={{
              background:
                "linear-gradient(120deg, transparent 0%, var(--color-mist-green) 35%, transparent 70%), repeating-linear-gradient(0deg, transparent, transparent 34px, rgba(47,143,91,0.12) 35px), repeating-linear-gradient(90deg, transparent, transparent 34px, rgba(47,143,91,0.12) 35px)",
            }}
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">Einsatzgebiet</p>
            <h3 className="mt-3 text-xl font-semibold text-[var(--color-deep-green)] sm:text-2xl">Hauptgebiet: {regionGroups.main}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-soft-graphite)]">
              Erweiterte Region wird projektbezogen eingeplant und sauber koordiniert.
            </p>
          </div>
        </div>

        <div data-reveal="fade-up" className="rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">Erweiterte Region</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {regionGroups.expanded.map((region) => (
              <li
                key={region}
                className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-4 text-sm font-medium text-[var(--color-deep-green)]"
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

import { SectionShell } from "@/components/layout/SectionShell";
import { regionGroups } from "@/content/regions";

export function RegionSystemSection() {
  return (
    <SectionShell
      variant="surface"
      title="Unsere Einsatzgebiete"
      description="SCM Baupartner ist in Zürich und ausgewählten Regionen der Deutschschweiz tätig. Einsätze werden je nach Projektumfang sauber geplant und regional koordiniert."
    >
      <div className="mt-9">
        <div
          data-reveal="mask"
          className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-4 sm:p-6"
        >
          <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
            <article className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-4 sm:p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-deep-green)]">Gebietssystem</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
                Hauptgebiet ist {regionGroups.main}. Weitere Einsätze koordinieren wir in Winterthur, Aargau, Zug, Schwyz und Basel.
              </p>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fresh-green)]">Regionen</p>
                <div className="mt-2 flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center rounded-full border border-[var(--color-fresh-green)] bg-[var(--color-soft-green)] px-3 py-1 text-xs font-semibold text-[var(--color-deep-green)]">
                    {regionGroups.main}
                  </span>
                  {regionGroups.expanded.map((region) => (
                    <span
                      key={region}
                      className="inline-flex items-center rounded-full border border-[var(--color-border-green-gray)] bg-white px-3 py-1 text-xs font-semibold text-[var(--color-deep-green)]"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[var(--color-soft-graphite)] sm:text-sm">
                Die Darstellung zeigt Einsatzgebiete, keine einzelnen Standorte.
              </p>
            </article>

            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-4 sm:p-5">
              <div
                aria-hidden="true"
                className="rounded-[0.95rem] border border-[var(--color-border-green-gray)] bg-[linear-gradient(145deg,var(--color-warm-off-white)_0%,white_62%,var(--color-mist-green)_100%)] p-4 sm:p-5"
              >
                <div className="grid min-h-[15.5rem] grid-rows-[auto_1fr_auto] gap-4 sm:min-h-[17.5rem]">
                  <div className="grid grid-cols-2 gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-soft-graphite)]">
                    <span>Regionen</span>
                    <span className="text-right">Koordination</span>
                  </div>
                  <div className="relative rounded-[0.85rem] border border-[var(--color-border-green-gray)] bg-white p-4">
                    <span className="absolute inset-x-3 top-1/2 h-px -translate-y-1/2 bg-[var(--color-border-green-gray)]" />
                    <span className="absolute left-1/2 top-3 bottom-3 w-px -translate-x-1/2 bg-[var(--color-border-green-gray)]" />
                    <div className="relative flex h-full items-center justify-center">
                      <span className="inline-flex h-24 w-24 items-center justify-center rounded-full border border-[var(--color-fresh-green)] bg-[var(--color-soft-green)] text-center text-xs font-semibold text-[var(--color-deep-green)]">
                        Zürich und Umgebung
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {regionGroups.expanded.map((region) => (
                      <span
                        key={region}
                        className="inline-flex min-h-9 items-center justify-center rounded-[0.7rem] border border-[var(--color-border-green-gray)] bg-white px-2 text-xs font-semibold text-[var(--color-deep-green)]"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

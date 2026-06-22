import { SectionShell } from "@/components/layout/SectionShell";
import { regionGroups } from "@/content/regions";

export function RegionSystemSection() {
  return (
    <SectionShell
      variant="surface"
      title="Unsere Einsatzgebiete"
      description="SCM Baupartner ist in Zürich und ausgewählten Regionen der Deutschschweiz tätig. Je nach Projektumfang planen wir Einsätze regional und sauber koordiniert."
    >
      <div className="mt-9">
        <div
          data-reveal="mask"
          className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-4 sm:p-6"
        >
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <article className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-4 sm:p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-deep-green)]">Regionenübersicht</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
                Hauptgebiet: {regionGroups.main}. Weitere Einsatzgebiete: Winterthur, Aargau, Zug, Schwyz und Basel.
              </p>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fresh-green)]">Hauptgebiet</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-[var(--color-fresh-green)] bg-[var(--color-soft-green)] px-3 py-1 text-xs font-semibold text-[var(--color-deep-green)]">
                      {regionGroups.main}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-deep-green)]">Weitere Einsatzgebiete</p>
                  <div className="mt-2 flex flex-wrap gap-2">
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
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[var(--color-soft-graphite)] sm:text-sm">
                Die Darstellung zeigt Einsatzgebiete, keine einzelnen Standorte.
              </p>
            </article>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white sm:aspect-[16/11]">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(118% 82% at 16% 20%, rgba(232,243,237,0.9) 0%, rgba(255,255,255,0) 74%), radial-gradient(130% 96% at 88% 86%, rgba(240,247,243,0.95) 0%, rgba(255,255,255,0) 70%), repeating-linear-gradient(0deg, transparent, transparent 34px, rgba(18,60,46,0.06) 35px), repeating-linear-gradient(90deg, transparent, transparent 34px, rgba(18,60,46,0.06) 35px)",
                }}
              />
              <svg aria-hidden="true" viewBox="0 0 100 72" className="absolute inset-0 h-full w-full">
                <circle cx="52" cy="37" r="10" fill="none" stroke="rgba(47,143,91,0.4)" strokeWidth="0.9" />
                <circle cx="52" cy="37" r="18" fill="none" stroke="rgba(18,60,46,0.2)" strokeWidth="0.7" />
                <circle cx="52" cy="37" r="26" fill="none" stroke="rgba(18,60,46,0.13)" strokeWidth="0.7" />
                <line x1="52" y1="37" x2="66" y2="23" stroke="rgba(18,60,46,0.2)" strokeWidth="0.45" />
                <line x1="52" y1="37" x2="37" y2="31" stroke="rgba(18,60,46,0.2)" strokeWidth="0.45" />
                <line x1="52" y1="37" x2="66" y2="43" stroke="rgba(18,60,46,0.2)" strokeWidth="0.45" />
                <line x1="52" y1="37" x2="65" y2="56" stroke="rgba(18,60,46,0.2)" strokeWidth="0.45" />
                <line x1="52" y1="37" x2="30" y2="44" stroke="rgba(18,60,46,0.2)" strokeWidth="0.45" />
              </svg>
              <span className="absolute left-[52%] top-[37%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-fresh-green)] bg-[var(--color-soft-green)] px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-deep-green)] sm:text-[0.7rem]">
                Zürich und Umgebung
              </span>
              <span className="absolute left-[67%] top-[22%] hidden rounded-full border border-[var(--color-border-green-gray)] bg-white/96 px-2 py-1 text-xs font-semibold text-[var(--color-deep-green)] md:inline-flex">
                Winterthur
              </span>
              <span className="absolute left-[34%] top-[30%] hidden rounded-full border border-[var(--color-border-green-gray)] bg-white/96 px-2 py-1 text-xs font-semibold text-[var(--color-deep-green)] md:inline-flex">
                Aargau
              </span>
              <span className="absolute left-[68%] top-[42%] hidden rounded-full border border-[var(--color-border-green-gray)] bg-white/96 px-2 py-1 text-xs font-semibold text-[var(--color-deep-green)] md:inline-flex">
                Zug
              </span>
              <span className="absolute left-[67%] top-[56%] hidden rounded-full border border-[var(--color-border-green-gray)] bg-white/96 px-2 py-1 text-xs font-semibold text-[var(--color-deep-green)] md:inline-flex">
                Schwyz
              </span>
              <span className="absolute left-[27%] top-[43%] hidden rounded-full border border-[var(--color-border-green-gray)] bg-white/96 px-2 py-1 text-xs font-semibold text-[var(--color-deep-green)] md:inline-flex">
                Basel
              </span>
              <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2 rounded-[0.9rem] border border-[var(--color-border-green-gray)] bg-white/88 p-2 text-[0.65rem] font-semibold text-[var(--color-deep-green)] md:hidden">
                <span>Zürich und Umgebung</span>
                <span>Winterthur</span>
                <span>Aargau</span>
                <span>Zug</span>
                <span>Schwyz</span>
                <span>Basel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

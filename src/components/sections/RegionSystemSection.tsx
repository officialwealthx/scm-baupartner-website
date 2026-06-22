import { SectionShell } from "@/components/layout/SectionShell";
import { regionGroups, regionPins } from "@/content/regions";

export function RegionSystemSection() {
  const mainRegion = regionPins.find((pin) => pin.primary);
  const expandedRegions = regionPins.filter((pin) => !pin.primary);

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
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-deep-green)]">Regionensystem</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
                Hauptgebiet: {regionGroups.main}. Erweiterte Projektregion: Winterthur, Schaffhausen, Aargau, Zug, Schwyz und Basel.
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
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-deep-green)]">Erweiterte Projektregion</p>
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
            </article>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white sm:aspect-[16/11]">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(118% 82% at 16% 20%, rgba(232,243,237,0.9) 0%, rgba(255,255,255,0) 74%), radial-gradient(130% 96% at 88% 86%, rgba(240,247,243,0.95) 0%, rgba(255,255,255,0) 70%), repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(18,60,46,0.06) 36px), repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(18,60,46,0.06) 36px)",
                }}
              />
              <svg aria-hidden="true" viewBox="0 0 100 72" className="absolute inset-0 h-full w-full">
                <circle cx="56" cy="37" r="9" fill="none" stroke="rgba(47,143,91,0.35)" strokeWidth="0.9" />
                <circle cx="56" cy="37" r="16" fill="none" stroke="rgba(18,60,46,0.18)" strokeWidth="0.7" />
                <circle cx="56" cy="37" r="24" fill="none" stroke="rgba(18,60,46,0.12)" strokeWidth="0.7" />
                {expandedRegions.map((pin) => (
                  <line
                    key={`${pin.name}-line`}
                    x1="56"
                    y1="37"
                    x2={(parseFloat(pin.left) / 100) * 100}
                    y2={(parseFloat(pin.top) / 100) * 72}
                    stroke="rgba(18,60,46,0.2)"
                    strokeWidth="0.45"
                  />
                ))}
              </svg>
              {regionPins.map((pin) => (
                <div key={pin.name} className="absolute" style={{ top: pin.top, left: pin.left }}>
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                      pin.primary
                        ? "h-[1.125rem] w-[1.125rem] border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)]"
                        : "h-3.5 w-3.5 border-[var(--color-deep-green)] bg-white"
                    }`}
                  />
                  <span
                    className={`ml-2.5 hidden max-w-[9rem] border px-2 py-1 text-[0.68rem] font-semibold leading-none text-[var(--color-deep-green)] md:inline-flex md:max-w-[10rem] md:text-xs ${
                      pin.primary ? "border-[var(--color-fresh-green)] bg-[var(--color-soft-green)]" : "border-[var(--color-border-green-gray)] bg-white/96"
                    }`}
                  >
                    {pin.name}
                  </span>
                </div>
              ))}
              {mainRegion ? (
                <span className="absolute left-3 top-3 inline-flex rounded-full border border-[var(--color-fresh-green)] bg-[var(--color-soft-green)] px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-deep-green)] sm:text-[0.7rem]">
                  Fokus: {mainRegion.name}
                </span>
              ) : null}
            </div>
          </div>
          <p className="relative mt-4 text-xs leading-relaxed text-[var(--color-soft-graphite)] sm:text-sm">
            Die Darstellung zeigt Einsatzgebiete, keine einzelnen Standorte.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

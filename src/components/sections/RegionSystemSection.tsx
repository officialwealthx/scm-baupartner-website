import { SectionShell } from "@/components/layout/SectionShell";
import { regionGroups, regionPins } from "@/content/regions";

export function RegionSystemSection() {
  return (
    <SectionShell
      variant="surface"
      title="Unsere Einsatzgebiete"
      description="SCM Baupartner ist in Zürich und ausgewählten Regionen der Deutschschweiz tätig. Projekte werden sauber geplant und je nach Umfang regional koordiniert."
    >
      <div className="mt-9">
        <div
          data-reveal="mask"
          className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-4 sm:p-6"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(112% 86% at 83% 16%, rgba(232,243,237,0.9) 0%, rgba(255,255,255,0) 68%), radial-gradient(130% 100% at 12% 90%, rgba(240,247,243,0.95) 0%, rgba(255,255,255,0) 64%), repeating-linear-gradient(12deg, transparent, transparent 38px, rgba(18,60,46,0.06) 39px), repeating-linear-gradient(106deg, transparent, transparent 34px, rgba(18,60,46,0.07) 35px)",
            }}
          />
          <div className="relative aspect-[4/3] rounded-[calc(var(--radius-xl)-0.3rem)] border border-[var(--color-border-green-gray)] bg-white/72 sm:aspect-[16/10]">
            <svg
              aria-hidden="true"
              viewBox="0 0 100 72"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M10.2 39.5L14 32.8L13.2 26L18.6 22.4L24.9 23.8L29.8 20.5L34.5 22.7L40.2 19.8L47.8 22.4L53.4 20.2L58.9 23.2L65.1 22.1L72.9 25.8L79.5 31.9L85.8 35.4L86.4 41.2L82.6 45.4L77.8 48.5L74.6 54.2L67.4 56.5L60.8 54.1L53.6 55.4L46.8 52.1L40.5 54.5L33.7 51.7L27.6 53.6L22.1 50.6L17.7 46.1L13.2 44.5Z"
                fill="rgba(232,243,237,0.95)"
                stroke="rgba(18,60,46,0.26)"
                strokeWidth="0.8"
              />
              {regionPins
                .filter((pin) => !pin.primary)
                .map((pin) => (
                  <line
                    key={`${pin.name}-line`}
                    x1="56"
                    y1="37"
                    x2={(parseFloat(pin.left) / 100) * 100}
                    y2={(parseFloat(pin.top) / 100) * 72}
                    stroke="rgba(18,60,46,0.23)"
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
                  className={`ml-2.5 hidden max-w-[8.5rem] border px-2 py-1 text-[0.68rem] font-semibold leading-none text-[var(--color-deep-green)] sm:inline-flex sm:max-w-[10rem] sm:text-xs ${
                    pin.primary ? "border-[var(--color-fresh-green)] bg-[var(--color-soft-green)]" : "border-[var(--color-border-green-gray)] bg-white/95"
                  }`}
                >
                  {pin.name}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-4 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
              Hauptgebiet: {regionGroups.main}. Erweiterte Projektregion: Winterthur, Schaffhausen, Aargau, Zug, Schwyz und Basel.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs font-semibold">
              <li className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-green-gray)] bg-white px-3 py-1 text-[var(--color-deep-green)]">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[var(--color-fresh-green)]" />
                Hauptgebiet
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-green-gray)] bg-white px-3 py-1 text-[var(--color-deep-green)]">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border border-[var(--color-deep-green)] bg-white" />
                Erweiterte Projektregion
              </li>
            </ul>
          </div>
          <p className="relative mt-3 text-xs leading-relaxed text-[var(--color-soft-graphite)] sm:text-sm">
            Die Karte zeigt unsere Einsatzgebiete, nicht einzelne Standorte.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

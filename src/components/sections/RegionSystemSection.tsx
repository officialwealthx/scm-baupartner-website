import { SectionShell } from "@/components/layout/SectionShell";
import { regionGroups, regionPins } from "@/content/regions";

export function RegionSystemSection() {
  return (
    <SectionShell
      variant="surface"
      title="Unsere Einsatzgebiete"
      description="SCM Baupartner ist in Zürich und ausgewählten Regionen der Deutschschweiz tätig. Projekte werden sauber geplant und je nach Umfang regional koordiniert."
    >
      <div className="mt-8">
        <div
          data-reveal="mask"
          className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-4 sm:p-6"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-75"
            style={{
              background:
                "radial-gradient(112% 86% at 83% 16%, rgba(232,243,237,0.92) 0%, rgba(255,255,255,0) 68%), repeating-linear-gradient(12deg, transparent, transparent 40px, rgba(18,60,46,0.06) 41px), repeating-linear-gradient(106deg, transparent, transparent 36px, rgba(18,60,46,0.07) 37px)",
            }}
          />
          <div className="relative aspect-[4/3] rounded-[calc(var(--radius-xl)-0.3rem)] border border-[var(--color-border-green-gray)] bg-white/70">
            {regionPins.map((pin) => (
              <div key={pin.name} className="absolute" style={{ top: pin.top, left: pin.left }}>
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${pin.primary ? "h-[1.125rem] w-[1.125rem] border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)]" : "h-3.5 w-3.5 border-[var(--color-deep-green)] bg-white"}`}
                />
                <span
                  className={`ml-2.5 inline-flex max-w-[8.5rem] border px-2 py-1 text-[0.68rem] font-semibold leading-none text-[var(--color-deep-green)] sm:max-w-[10rem] sm:text-xs ${
                    pin.primary ? "border-[var(--color-fresh-green)] bg-[var(--color-soft-green)]" : "border-[var(--color-border-green-gray)] bg-white/95"
                  }`}
                >
                  {pin.name}
                </span>
              </div>
            ))}
          </div>
          <p className="relative mt-4 text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            Hauptgebiet: {regionGroups.main}. Erweiterte Projektregion: Winterthur, Schaffhausen, Aargau, Zug, Schwyz und Basel.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

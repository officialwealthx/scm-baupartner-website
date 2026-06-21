import { SectionShell } from "@/components/layout/SectionShell";
import { regionGroups, regionPins } from "@/content/regions";

export function RegionSystemSection() {
  return (
    <SectionShell
      variant="surface"
      title="Einsatzgebiet in Zürich und der erweiterten Region"
      description="SCM Baupartner ist in Zürich und Umgebung tätig und plant Projekte in ausgewählten Regionen der Deutschschweiz sauber und projektbezogen."
    >
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div
          data-reveal="mask"
          className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-4 sm:p-6"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(120% 85% at 80% 15%, rgba(232,243,237,0.95) 0%, rgba(255,255,255,0) 68%), repeating-linear-gradient(16deg, transparent, transparent 38px, rgba(18,60,46,0.06) 39px), repeating-linear-gradient(108deg, transparent, transparent 33px, rgba(18,60,46,0.07) 34px)",
            }}
          />
          <div className="relative aspect-[4/3] rounded-[calc(var(--radius-xl)-0.3rem)] border border-[var(--color-border-green-gray)] bg-white/70">
            {regionPins.map((pin) => (
              <div key={pin.name} className="absolute" style={{ top: pin.top, left: pin.left }}>
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                    pin.primary
                      ? "border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)]"
                      : "border-[var(--color-deep-green)] bg-white"
                  }`}
                />
                <span
                  className={`ml-2.5 inline-flex max-w-[10rem] rounded-full border px-2.5 py-1 text-xs font-semibold leading-none text-[var(--color-deep-green)] ${
                    pin.primary
                      ? "border-[var(--color-fresh-green)] bg-[var(--color-soft-green)]"
                      : "border-[var(--color-border-green-gray)] bg-white/95"
                  }`}
                >
                  {pin.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="fade-up" className="rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-[var(--color-deep-green)]">Regionen</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
            <span className="font-semibold text-[var(--color-deep-green)]">Hauptgebiet:</span> {regionGroups.main}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
            <span className="font-semibold text-[var(--color-deep-green)]">Erweiterte Region:</span> Zug, Schwyz, Winterthur, Schaffhausen, Aargau und Aarau.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

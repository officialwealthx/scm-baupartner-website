import { SectionShell } from "@/components/layout/SectionShell";
import { servedRegions } from "@/content/regions";

const mapPins: ReadonlyArray<{ label: string; top: string; left: string; prominent?: boolean }> = [
  { label: "Zürich und Umgebung", top: "45%", left: "49%", prominent: true },
  { label: "Winterthur", top: "34%", left: "57%" },
  { label: "Aargau", top: "56%", left: "36%" },
  { label: "Zug", top: "62%", left: "50%" },
  { label: "Schwyz", top: "72%", left: "61%" },
  { label: "Basel", top: "31%", left: "22%" },
] as const;

export function RegionSystemSection() {
  return (
    <SectionShell
      id="einsatzgebiete"
      title="Unsere Einsatzgebiete"
      description="SCM Baupartner ist in Zürich und ausgewählten Regionen tätig. Unser Hauptgebiet ist Zürich und Umgebung, weitere Einsätze planen wir je nach Projektumfang in Winterthur, Aargau, Zug, Schwyz und Basel."
      width="wide"
    >
      <div className="mt-8 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-4 sm:p-6">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[linear-gradient(145deg,var(--color-warm-off-white)_0%,white_52%,var(--color-mist-green)_100%)] p-4 sm:p-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-75"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(18,60,46,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,60,46,0.07) 1px, transparent 1px)",
              backgroundSize: "54px 54px",
            }}
          />

          <div
            aria-hidden="true"
            className="relative min-h-[22rem] rounded-[0.95rem] border border-[var(--color-border-green-gray)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(240,247,243,0.7)_100%)] sm:min-h-[26rem]"
          >
            <div className="absolute inset-x-7 top-[31%] h-px bg-[var(--color-border-green-gray)]" />
            <div className="absolute inset-x-5 top-[62%] h-px bg-[var(--color-border-green-gray)]" />
            <div className="absolute bottom-4 left-[27%] top-4 w-px bg-[var(--color-border-green-gray)]" />
            <div className="absolute bottom-6 left-[58%] top-6 w-px bg-[var(--color-border-green-gray)]" />

            <ul className="hidden md:block">
              {mapPins.map((pin) => (
                <li key={pin.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: pin.top, left: pin.left }}>
                  <span
                    className={`inline-flex h-3.5 w-3.5 rounded-full border-2 border-white shadow ${pin.prominent ? "bg-[var(--color-fresh-green)]" : "bg-[var(--color-deep-green)]"}`}
                  />
                  <span
                    className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${
                      pin.prominent
                        ? "border-[var(--color-fresh-green)] bg-[var(--color-soft-green)] text-[var(--color-deep-green)]"
                        : "border-[var(--color-border-green-gray)] bg-white text-[var(--color-deep-green)]"
                    }`}
                  >
                    {pin.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="grid h-full content-center gap-2 px-4 py-6 md:hidden">
              {servedRegions.map((region) => (
                <span
                  key={region}
                  className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-border-green-gray)] bg-white px-3 text-sm font-semibold text-[var(--color-deep-green)]"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-[var(--color-soft-graphite)]">
          Die Darstellung zeigt Einsatzgebiete, keine einzelnen Standorte.
        </p>
      </div>
    </SectionShell>
  );
}

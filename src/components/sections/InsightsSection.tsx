const imageSlots = [
  { label: "Materialdetail", hint: "Nahaufnahme Oberfläche" },
  { label: "Innenraum", hint: "Raum nach Ausführung" },
  { label: "Fassade / Schutz", hint: "Aussenfläche & Schutz" },
  { label: "Vorher-Nachher Slot", hint: "Direkter Vergleich" },
];

export function InsightsSection() {
  return (
    <section className="mt-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">Einblicke</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-deep-green)] sm:text-3xl">
          Einblicke in Oberflächen, Räume und Ausführung.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
          Diese Flächen sind Bildplätze. Echte Aufnahmen aus realen Projekten werden später eingesetzt —
          ohne erfundene Projektdetails.
        </p>
      </div>

      <div className="scm-stagger mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {imageSlots.map((slot) => (
          <article
            key={slot.label}
            className="scm-fade-up flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white"
          >
            <div
              className="flex h-36 items-center justify-center border-b border-dashed border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)]"
              aria-hidden="true"
            >
              <span className="rounded-full bg-white/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">
                Bildplatz
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-[var(--color-deep-green)]">{slot.label}</p>
              <p className="mt-1 text-xs text-[var(--color-soft-graphite)]">{slot.hint}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

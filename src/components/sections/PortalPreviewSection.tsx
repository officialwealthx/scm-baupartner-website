const modules = [
  "Offerten",
  "Termine",
  "Projektstatus",
  "Dokumente",
  "Rechnungen",
  "Quittungen",
  "Projektbilder",
  "Kommunikation",
  "Abnahme",
] as const;

const dashboardCards = [
  { label: "Projektstatus", value: "In Vorbereitung", hint: "geplant" },
  { label: "Offerten", value: "Übersicht geplant", hint: "Preview" },
  { label: "Termine", value: "Koordination künftig", hint: "geplant" },
];

export function PortalPreviewSection() {
  return (
    <section className="mt-16 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-soft-green)]">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: dashboard-like preview */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-active-green)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">
              Kundenportal · Preview
            </p>
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-deep-green)] sm:text-3xl">
            Ein Bauprojekt soll nicht unübersichtlich sein.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-soft-graphite)]">
            SCM Baupartner plant eine digitale Projektübersicht, mit der Offerten, Termine, Dokumente,
            Rechnungen, Projektstatus und Kommunikation künftig klar an einem Ort sichtbar werden.
          </p>
          <p className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--color-deep-green)]">
            Geplant · in Vorbereitung für künftige Projektkommunikation
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {dashboardCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-4"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-soft-graphite)]">
                  {card.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-deep-green)]">{card.value}</p>
                <span className="mt-2 inline-flex rounded-full bg-[var(--color-mist-green)] px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-[var(--color-fresh-green)]">
                  {card.hint}
                </span>
              </div>
            ))}
          </div>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <li
                key={module}
                className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3 py-2.5 text-sm text-[var(--color-soft-graphite)]"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-fresh-green)]" />
                {module}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: app mockup block */}
        <div className="min-w-0">
          <div className="mx-auto w-full max-w-[20rem] rounded-[2rem] border border-[var(--color-border-green-gray)] bg-[var(--color-deep-green)] p-3 shadow-[var(--shadow-soft)]">
            <div className="rounded-[1.5rem] bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--color-deep-green)]">SCM App</p>
                <span className="rounded-full bg-[var(--color-mist-green)] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">
                  Preview
                </span>
              </div>
              <div className="mt-4 space-y-2">
                {["Projektstatus", "Termine", "Dokumente"].map((row) => (
                  <div
                    key={row}
                    className="flex items-center justify-between rounded-[var(--radius-md)] bg-[var(--color-porcelain-surface)] px-3 py-2"
                  >
                    <span className="text-xs font-medium text-[var(--color-deep-green)]">{row}</span>
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-active-green)]" />
                  </div>
                ))}
              </div>
              <div className="mt-4 h-20 rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)]" aria-hidden="true" />
              <p className="mt-3 text-center text-[0.7rem] text-[var(--color-soft-graphite)]">
                App-Ansicht geplant · künftig
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const dashboardCards = [
  {
    label: "Projektstatus",
    value: "In Vorbereitung",
    detail: "Überblick über die laufende Phase.",
    span: "sm:col-span-2",
  },
  {
    label: "Offerte",
    value: "Übersicht geplant",
    detail: "Positionen und Stand der Offerte.",
    span: "",
  },
  {
    label: "Dokumente",
    value: "Sammlung geplant",
    detail: "Pläne, Protokolle, Nachweise.",
    span: "",
  },
  {
    label: "Termine",
    value: "Koordination künftig",
    detail: "Besichtigung, Ausführung, Abnahme.",
    span: "",
  },
  {
    label: "Kommunikation",
    value: "Zentral geplant",
    detail: "Rückfragen an einem Ort.",
    span: "sm:col-span-2",
  },
] as const;

const appRows = [
  { label: "Projektübersicht", hint: "geplant" },
  { label: "Nächster Termin", hint: "geplant" },
  { label: "Dokumente", hint: "geplant" },
  { label: "Rechnung / Quittung", hint: "Platzhalter" },
] as const;

export function PortalPreviewSection() {
  return (
    <section className="mt-16 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-deep-green)] bg-[var(--color-deep-green)] text-white shadow-[var(--shadow-soft)] sm:mt-20">
      <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-12">
        {/* Left: cockpit dashboard mockup */}
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-active-green)]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-active-green)]" />
            Kundenportal · Preview
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Ein digitales Projekt-Cockpit, klar und an einem Ort.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">
            Portal und App sind als digitale Projektkommunikation geplant und werden später Schritt für Schritt aufgebaut.
          </p>
          <p className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
            Geplant · in Vorbereitung — noch nicht live
          </p>

          {/* Dashboard cards */}
          <div className="scm-stagger mt-7 grid gap-3 sm:grid-cols-2">
            {dashboardCards.map((card) => (
              <div
                key={card.label}
                className={`scm-fade-up rounded-[var(--radius-lg)] bg-white p-4 ${card.span}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-soft-graphite)]">
                    {card.label}
                  </p>
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-active-green)]" />
                </div>
                <p className="mt-2 text-sm font-semibold text-[var(--color-deep-green)]">{card.value}</p>
                <div className="mt-3 rounded-[var(--radius-md)] bg-[var(--color-soft-green)] px-3 py-2">
                  <p className="text-[0.7rem] text-[var(--color-deep-green)]">{card.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: app mockup */}
        <div className="min-w-0">
          <div className="mx-auto w-full max-w-[20rem] rounded-[2rem] border border-white/15 bg-white/5 p-3">
            <div className="rounded-[1.6rem] bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--color-deep-green)]">SCM App</p>
                <span className="rounded-full bg-[var(--color-mist-green)] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">
                  Preview
                </span>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 rounded-[var(--radius-md)] bg-[var(--color-soft-green)] p-3">
                <div className="flex items-center justify-between text-[0.7rem] font-medium text-[var(--color-deep-green)]">
                  <span>Projektfortschritt</span>
                  <span>geplant</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white" aria-hidden="true">
                  <span className="block h-full w-2/5 rounded-full bg-[var(--color-fresh-green)]" />
                </div>
              </div>

              <ul className="mt-3 space-y-2">
                {appRows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between rounded-[var(--radius-md)] bg-[var(--color-porcelain-surface)] px-3 py-2"
                  >
                    <span className="text-xs font-medium text-[var(--color-deep-green)]">{row.label}</span>
                    <span className="text-[0.6rem] font-medium uppercase tracking-wide text-[var(--color-fresh-green)]">
                      {row.hint}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-center text-[0.7rem] text-[var(--color-soft-graphite)]">
                App-Ansicht geplant · künftig
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

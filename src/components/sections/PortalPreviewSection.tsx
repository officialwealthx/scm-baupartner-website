const modules = [
  "Offerten",
  "Termine",
  "Dokumente",
  "Rechnungen / Quittungen",
  "Kommunikation",
  "Bilder / Abnahme",
] as const;

const appRows = [
  { label: "Projektübersicht", hint: "geplant" },
  { label: "Nächster Termin", hint: "geplant" },
  { label: "Dokumente", hint: "geplant" },
] as const;

export function PortalPreviewSection() {
  return (
    <section className="mt-16 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-deep-green)] bg-[var(--color-deep-green)] text-white shadow-[var(--shadow-soft)] sm:mt-20">
      <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-12">
        {/* Left: cockpit */}
        <div data-reveal="fade-up" className="min-w-0">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-active-green)]">
            <span aria-hidden="true" className="h-px w-7 bg-[var(--color-active-green)]" />
            Kundenportal &amp; App
          </p>
          <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Digitale Projektübersicht — geplant für klare Abläufe.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">
            Portal und App sind als digitale Projektkommunikation geplant und werden später Schritt für Schritt aufgebaut.
          </p>
          <p className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
            Geplant · in Vorbereitung — noch nicht live
          </p>

          {/* Featured cockpit module */}
          <div className="mt-7 rounded-[var(--radius-lg)] bg-white p-5 text-[var(--color-deep-green)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Projektstatus</p>
              <span className="text-[0.65rem] font-medium uppercase tracking-wide text-[var(--color-fresh-green)]">
                geplant
              </span>
            </div>
            <p className="mt-1 text-sm text-[var(--color-soft-graphite)]">
              Überblick über die laufende Phase, von der Anfrage bis zur Abnahme.
            </p>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-soft-green)]" aria-hidden="true">
              <span className="block h-full w-2/5 rounded-full bg-[var(--color-fresh-green)]" />
            </div>
          </div>

          {/* Supporting modules — a quiet list, not a card wall */}
          <ul data-reveal-stagger className="mt-4 grid gap-2 sm:grid-cols-2">
            {modules.map((module) => (
              <li
                key={module}
                className="flex items-center justify-between rounded-[var(--radius-md)] bg-white/5 px-3.5 py-2.5 text-sm text-white/85 ring-1 ring-white/10"
              >
                <span>{module}</span>
                <span className="text-[0.6rem] font-medium uppercase tracking-wide text-white/55">geplant</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: planned mobile app */}
        <div data-reveal="pop" className="min-w-0">
          <div className="mx-auto w-full max-w-[20rem] rounded-[2rem] border border-white/15 bg-white/5 p-3">
            <div className="rounded-[1.6rem] bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--color-deep-green)]">SCM App</p>
                <span className="rounded-full bg-[var(--color-mist-green)] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">
                  geplant
                </span>
              </div>

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
                App-Ansicht künftig · Schritt für Schritt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

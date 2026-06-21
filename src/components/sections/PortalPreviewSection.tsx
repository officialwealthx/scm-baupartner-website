const modules = [
  "Offerte und Projektklärung",
  "Terminübersicht",
  "Projektstatus",
  "Foto-Dokumentation",
  "Dokumente",
  "Rechnungen und Quittungen",
  "Rückfragen und Abnahme",
] as const;

export function PortalPreviewSection() {
  return (
    <section className="mt-16 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-deep-green)] bg-[var(--color-deep-green)] text-white shadow-[var(--shadow-soft)] sm:mt-20">
      <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-12">
        <div data-reveal="fade-up" className="min-w-0">
          <h2 className="text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Digitale Projektkommunikation — geplant für klare Abläufe.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Portal und App sind als digitale Projektkommunikation geplant und werden später Schritt für Schritt aufgebaut.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/72 sm:text-base">
            Damit Offerten, Termine, Bilder, Dokumente und Rückfragen künftig nicht verstreut bleiben.
          </p>

          <p className="mt-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
            Geplant · in Vorbereitung
          </p>

          <ul data-reveal-stagger className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {modules.map((module) => (
              <li
                key={module}
                className="flex items-center justify-between rounded-[var(--radius-md)] bg-white/5 px-3.5 py-2.5 text-sm text-white/90 ring-1 ring-white/10"
              >
                <span>{module}</span>
                <span className="text-[0.6rem] font-medium uppercase tracking-wide text-white/55">geplant</span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="pop" className="min-w-0">
          <article className="rounded-[var(--radius-xl)] border border-white/15 bg-white/5 p-5 sm:p-6">
            <header className="flex items-center justify-between gap-3 border-b border-white/15 pb-3">
              <h3 className="text-lg font-semibold">Projektkommunikation Cockpit</h3>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-white/80 ring-1 ring-white/20">
                künftig
              </span>
            </header>

            <div className="mt-4 space-y-3">
              <div className="rounded-[var(--radius-md)] bg-white/10 px-3.5 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">Projektphase</p>
                <p className="mt-1 text-sm text-white">Von der Offerte bis zur Übergabe geordnet dokumentiert.</p>
              </div>
              <div className="rounded-[var(--radius-md)] bg-white/10 px-3.5 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">Bilder und Dokumente</p>
                <p className="mt-1 text-sm text-white">Nachweise und Unterlagen sollen künftig zentral zusammenlaufen.</p>
              </div>
              <div className="rounded-[var(--radius-md)] bg-white/10 px-3.5 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">Rückfragen</p>
                <p className="mt-1 text-sm text-white">Kommunikation Schritt für Schritt ohne verstreute Kanäle.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

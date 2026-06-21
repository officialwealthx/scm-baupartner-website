import Link from "next/link";

const modules = [
  "Projektstatus",
  "Offerte",
  "Termine",
  "Dokumente",
  "Fotos",
  "Rückfragen",
  "Übergabe",
] as const;

export function PortalPreviewSection() {
  return (
    <section className="mt-14 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] text-[var(--color-deep-green)] shadow-[var(--shadow-soft)] sm:mt-16">
      <div className="grid gap-9 p-6 sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:p-10">
        <div data-reveal="fade-up" className="min-w-0">
          <h2 className="text-balance text-2xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-3xl">
            Digitales Portal für klare Projektkommunikation
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            SCM Baupartner plant ein Portal, in dem Offerten, Termine, Dokumente, Projektstatus und Rückfragen künftig übersichtlich an einem Ort zusammenlaufen.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            So bleiben Projekte nachvollziehbar – von der ersten Anfrage bis zur sauberen Übergabe.
          </p>

          <ul data-reveal-stagger className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {modules.map((module) => (
              <li
                key={module}
                className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-deep-green)]"
              >
                <span>{module}</span>
                <span className="rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wide text-[var(--color-soft-graphite)]">
                  geplant
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/portal"
            className="mt-7 inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-4 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]"
          >
            Mehr zum Portal
          </Link>
        </div>

        <div data-reveal="pop" className="min-w-0">
          <article className="rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-5 shadow-[0_18px_40px_-30px_rgba(18,60,46,0.45)] sm:p-6">
            <header className="flex items-center justify-between gap-3 border-b border-[var(--color-border-green-gray)] pb-3">
              <h3 className="text-lg font-semibold text-[var(--color-deep-green)]">Projektübersicht</h3>
              <span className="rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--color-soft-graphite)]">
                in Vorbereitung
              </span>
            </header>

            <div className="mt-4 grid gap-3 sm:grid-cols-[1.08fr_0.92fr]">
              <div className="space-y-2">
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] px-3.5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]">Projektstatus</p>
                  <p className="mt-1 text-sm text-[var(--color-deep-green)]">Offerte bestätigt · Ablauf wird geplant</p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] px-3.5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]">Termine</p>
                  <p className="mt-1 text-sm text-[var(--color-deep-green)]">Besichtigung, Projektstart und Übergabe strukturiert</p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] px-3.5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]">Rückfragen</p>
                  <p className="mt-1 text-sm text-[var(--color-deep-green)]">Klärungen gebündelt an einem Ort</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3.5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]">Dokumente</p>
                  <p className="mt-1 text-sm text-[var(--color-deep-green)]">Offerte, Protokolle und Freigaben</p>
                  <span className="mt-2 inline-flex rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wide text-[var(--color-soft-graphite)]">
                    geplant
                  </span>
                </div>
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3.5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]">Fotos und Übergabe</p>
                  <p className="mt-1 text-sm text-[var(--color-deep-green)]">Projektfortschritt und Abschluss geordnet dokumentiert</p>
                  <span className="mt-2 inline-flex rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wide text-[var(--color-soft-graphite)]">
                    geplant
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

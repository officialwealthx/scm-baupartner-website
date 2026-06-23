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
    <section className="mt-16 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] text-[var(--color-deep-green)] shadow-[var(--shadow-soft)] sm:mt-20">
      <div className="grid gap-9 p-6 sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:p-10">
        <div data-reveal="fade-up" className="min-w-0">
          <h2 className="text-balance text-2xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-3xl">
            Portal und App für klarere Projektabstimmung
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            Das Portal wird schrittweise aufgebaut, damit Offerten, Termine, Dokumente und Projektstatus geordnet an einem Ort liegen.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
            So bleibt der Ablauf von der Anfrage bis zur Übergabe nachvollziehbar.
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
                  <p className="mt-1 text-sm text-[var(--color-deep-green)]">Offerte bestätigt · Start wird sauber koordiniert</p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] px-3.5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]">Termine</p>
                  <p className="mt-1 text-sm text-[var(--color-deep-green)]">Besichtigung, Start und Übergabe klar abgestimmt</p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] px-3.5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]">Rückfragen</p>
                  <p className="mt-1 text-sm text-[var(--color-deep-green)]">Rückfragen gebündelt dokumentiert</p>
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
                  <p className="mt-1 text-sm text-[var(--color-deep-green)]">Projektfortschritt und Übergabe geordnet dokumentiert</p>
                  <span className="mt-2 inline-flex rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wide text-[var(--color-soft-graphite)]">
                    geplant
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="border-t border-[var(--color-border-green-gray)] bg-[linear-gradient(145deg,var(--color-soft-green)_0%,var(--color-warm-off-white)_55%,white_100%)] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div data-reveal="fade-up" className="min-w-0">
            <span className="inline-flex items-center rounded-full border border-[var(--color-border-green-gray)] bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]">
              in Vorbereitung
            </span>
            <h3 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-[2rem]">
              Portal künftig auch als App und Desktop-Zugang
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
              Portal und App werden schrittweise aufgebaut. Geplant ist der Zugriff über Smartphone, Tablet und Desktop, damit Projektinfos auch unterwegs geordnet bleiben.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {["iOS", "Android", "Mac", "Windows"].map((platform) => (
                <span
                  key={platform}
                  className="inline-flex min-h-8 items-center rounded-full border border-[var(--color-border-green-gray)] bg-white px-3 text-xs font-semibold text-[var(--color-deep-green)]"
                >
                  {platform}
                </span>
              ))}
            </div>
            <Link
              href="/portal"
              className="mt-6 inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-4 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]"
            >
              Portal ansehen
            </Link>
          </div>

          <div data-reveal="pop" className="min-w-0 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white/95 p-4 shadow-[0_20px_45px_-34px_rgba(18,60,46,0.55)] sm:p-5">
            <div className="grid grid-cols-[0.76fr_1.24fr] gap-3 sm:gap-4">
              <article className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[var(--color-warm-off-white)] p-3 sm:p-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]">Mobile App</p>
                <div className="mt-2.5 rounded-[1rem] border border-[var(--color-border-green-gray)] bg-white p-2.5 shadow-[0_10px_18px_-14px_rgba(18,60,46,0.45)]">
                  <span className="mx-auto block h-1.5 w-8 rounded-full bg-[var(--color-border-green-gray)]" />
                  <div className="mt-2 grid gap-1.5">
                    <span className="h-2 rounded-full bg-[var(--color-soft-green)]" />
                    <span className="h-2 rounded-full bg-[var(--color-mist-green)]" />
                    <span className="h-2 rounded-full bg-[var(--color-soft-green)]/80" />
                  </div>
                </div>
              </article>

              <article className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] p-3 sm:p-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-soft-graphite)]">Desktop Zugang</p>
                <div className="mt-2.5 rounded-[0.9rem] border border-[var(--color-border-green-gray)] bg-white p-2.5 shadow-[0_10px_20px_-16px_rgba(18,60,46,0.45)]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-border-green-gray)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-border-green-gray)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-border-green-gray)]" />
                  </div>
                  <div className="mt-2.5 grid gap-1.5">
                    <span className="h-2 rounded-full bg-[var(--color-soft-green)]" />
                    <span className="h-2 rounded-full bg-[var(--color-mist-green)]" />
                    <span className="h-2 rounded-full bg-[var(--color-soft-green)]/80" />
                  </div>
                </div>
                <span className="mx-auto mt-2 block h-2 w-14 rounded-full bg-[var(--color-border-green-gray)]" />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

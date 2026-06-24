import Link from "next/link";

export function StoryTeaserSection() {
  return (
    <section
      className="mt-16 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-6 sm:mt-20 sm:p-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:p-10"
      aria-label="Unsere Geschichte"
    >
      <div>
        <h2 className="text-balance text-[1.85rem] font-semibold leading-tight text-[var(--color-deep-green)] sm:text-[2.2rem]">
          Wir sind SCM Baupartner
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-soft-graphite)]">
          Handwerkserfahrung seit 1981 prägt unsere familiären Wurzeln. SCM Baupartner verbindet diese Grundlage mit moderner Organisation,
          klarer Kommunikation und sauberer Ausführung.
        </p>
        <Link
          href="/ueber-uns"
          className="scm-text-link scm-text-link-arrow mt-6 inline-flex min-h-11 items-center text-base font-semibold"
        >
          Unsere Geschichte
        </Link>
      </div>

      <div className="mt-7 rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-5 lg:mt-0 lg:p-6">
        <div className="grid min-h-[170px] content-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fresh-green)]">1981 bis heute</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
              Bewährtes Handwerk und klare Abläufe für den heutigen Projektalltag in Zürich und Umgebung.
            </p>
          </div>
          <div className="h-px w-full bg-[var(--color-border-green-gray)]" />
          <p className="text-sm font-medium text-[var(--color-deep-green)]">Saubere Oberflächen. Klare Abläufe. Verlässliche Umsetzung.</p>
        </div>
      </div>
    </section>
  );
}

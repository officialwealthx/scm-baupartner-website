const trustFacts = [
  "8 Mitarbeitende",
  "45+ Jahre kombinierte Familienerfahrung",
  "Zürich und Umgebung",
  "Besichtigung nach Projektklärung",
] as const;

export function TrustBarSection() {
  return (
    <section aria-label="Qualität und Ablauf" className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-6 sm:p-8 lg:p-10">
      <div data-reveal="line" className="scm-line-draw-ready h-px w-full bg-[var(--color-border-green-gray)]" />
      <h2 data-reveal="fade-up" className="mt-6 text-balance text-2xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-[2rem]">
        Wir stehen für saubere Ausführung und klare Abläufe.
      </h2>
      <p data-reveal="fade-up" className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
        SCM Baupartner verbindet präzises Handwerk mit strukturierter Projektabwicklung. Für Privatkunden, Verwaltungen, Firmen und Immobilienbesitzer entstehen so saubere Ergebnisse, verlässliche Termine und nachvollziehbare Offerten.
      </p>

      <div className="mt-7">
        <ul data-reveal-stagger className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {trustFacts.map((fact, index) => (
            <li
              key={fact}
              className="flex min-h-28 flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-4 sm:min-h-32"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fresh-green)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-base font-semibold leading-snug text-[var(--color-deep-green)] [overflow-wrap:anywhere]">
                {fact}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

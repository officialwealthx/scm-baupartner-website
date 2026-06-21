const trustFacts = [
  "16 Mitarbeitende",
  "30+ Kunden",
  "200+ Aufträge",
  "45+ Jahre kombinierte Familienerfahrung",
] as const;

export function TrustBarSection() {
  return (
    <section
      aria-label="Qualität und Ablauf"
      className="mt-8 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-6 sm:mt-9 sm:p-8 lg:p-10"
    >
      <div data-reveal="line" className="scm-line-draw-ready h-px w-full bg-[var(--color-border-green-gray)]" />
      <h2 data-reveal="fade-up" className="mt-6 text-balance text-2xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-[2rem]">
        Wir stehen für Qualität, Tempo und saubere Ausführung.
      </h2>
      <p data-reveal="fade-up" className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
        SCM Baupartner verbindet präzises Handwerk mit klaren Abläufen. Für Privatkunden, Firmen und Immobilienbesitzer entstehen so saubere Ergebnisse, transparente Offerten und eine verlässliche Umsetzung in Zürich und Umgebung.
      </p>

      <div className="mt-7">
        <ul data-reveal-stagger className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {trustFacts.map((fact) => (
            <li
              key={fact}
              className="scm-lift flex min-h-36 flex-col gap-5 rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-5"
            >
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-[0.9rem] border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)]">
                <span className="h-4 w-4 rounded-full border border-[var(--color-fresh-green)]/70" />
              </span>
              <p className="text-lg font-semibold leading-snug text-[var(--color-deep-green)] break-words">
                {fact}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

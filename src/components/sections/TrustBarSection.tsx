const trustFacts = [
  "8 Mitarbeitende",
  "45+ Jahre kombinierte Familienerfahrung",
  "Zürich und Umgebung",
  "Besichtigung nach Projektklärung",
] as const;

export function TrustBarSection() {
  return (
    <section
      aria-label="Unternehmensfakten"
      data-reveal="fade-up"
      className="mt-8 rounded-[var(--radius-xl)] border-y border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] py-8 sm:py-9"
    >
      <p className="text-sm font-semibold text-[var(--color-deep-green)]">Vertrauen entsteht durch saubere Abläufe.</p>
      <div className="mt-5 border-y border-[var(--color-border-green-gray)] py-4">
        <ul data-reveal-stagger className="grid gap-3 text-sm font-medium text-[var(--color-deep-green)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {trustFacts.map((fact, index) => (
            <li key={fact} className="min-h-8">
              <span className="mr-2 text-xs font-semibold text-[var(--color-fresh-green)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {fact}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4">
        <p className="text-sm text-[var(--color-soft-graphite)]">
          Für Privatkunden, Verwaltungen, Firmen und Immobilienbesitzer.
        </p>
      </div>
    </section>
  );
}

import { siteConfig } from "@/content/site";

export function TrustBarSection() {
  return (
    <section
      aria-label="Unternehmensfakten"
      data-reveal="fade-up"
      className="mt-6 rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white px-5 py-4 shadow-[var(--shadow-soft)] sm:px-6"
    >
      <ul className="flex flex-col gap-3 text-sm font-medium text-[var(--color-deep-green)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
        {siteConfig.companyFacts.map((fact, index) => (
          <li key={fact} className="flex items-center gap-3">
            {index > 0 && (
              <span
                aria-hidden="true"
                className="hidden h-4 w-px bg-[var(--color-border-green-gray)] sm:block"
              />
            )}
            <span>{fact}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-[var(--color-soft-graphite)]">
        Für Privatkunden, Verwaltungen, Immobilienbesitzer, Firmen und Planer.
      </p>
    </section>
  );
}

import { siteConfig } from "@/content/site";

export function TrustBarSection() {
  return (
    <section aria-label="Unternehmensfakten" data-reveal="fade-up" className="mt-8 border-y border-[var(--color-border-green-gray)] py-6 sm:py-7">
      <div className="border-b border-[var(--color-border-green-gray)] pb-4">
        <ul className="grid gap-2 text-sm font-medium text-[var(--color-deep-green)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {siteConfig.companyFacts.map((fact) => (
            <li key={fact} className="min-h-8">
              {fact}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-[var(--color-border-green-gray)] pt-4">
        <p className="text-sm text-[var(--color-soft-graphite)]">
          Für Privatkunden, Verwaltungen, Immobilienbesitzer, Firmen und Planer.
        </p>
      </div>
    </section>
  );
}

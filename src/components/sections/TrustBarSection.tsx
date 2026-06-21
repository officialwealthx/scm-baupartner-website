import { siteConfig } from "@/content/site";

export function TrustBarSection() {
  return (
    <section aria-label="Unternehmensfakten" className="mt-8 rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-4 sm:p-6">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.companyFacts.map((fact) => (
          <li key={fact} className="rounded-[var(--radius-md)] bg-[var(--color-mist-green)] px-4 py-3 text-sm font-medium text-[var(--color-deep-green)]">
            {fact}
          </li>
        ))}
      </ul>
    </section>
  );
}

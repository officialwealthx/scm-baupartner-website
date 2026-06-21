import { siteConfig } from "@/content/site";

export function TrustBarSection() {
  return (
    <section
      aria-label="Unternehmensfakten"
      className="scm-fade-up mt-6 rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-4 shadow-[var(--shadow-soft)] sm:p-5"
    >
      <ul className="scm-stagger grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.companyFacts.map((fact) => (
          <li
            key={fact}
            className="scm-fade-up flex items-center gap-2.5 rounded-[var(--radius-md)] bg-[var(--color-mist-green)] px-4 py-3 text-sm font-medium text-[var(--color-deep-green)]"
          >
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-active-green)]" />
            {fact}
          </li>
        ))}
      </ul>
    </section>
  );
}

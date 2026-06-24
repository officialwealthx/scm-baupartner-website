import type { ReactNode } from "react";

type TrustFact = {
  key: string;
  value: ReactNode;
  description: string;
  icon: ReactNode;
  valueClassName?: string;
};

const trustFacts: readonly TrustFact[] = [
  {
    key: "team",
    value: "8 Mitarbeitende",
    description: "Ein eingespieltes Team für saubere Innen- und Aussenarbeiten.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[1.2rem] w-[1.2rem]" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M3 19a5 5 0 0 1 10 0M13 19a5 5 0 0 1 8 0" />
      </svg>
    ),
  },
  {
    key: "clients",
    value: "30+ Kunden",
    description: "Privat- und Gewerbeprojekte mit klarer Abstimmung.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[1.2rem] w-[1.2rem]" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="9" cy="8" r="2.25" />
        <circle cx="15.5" cy="9" r="2" />
        <path d="M4.5 18a4.6 4.6 0 0 1 9.2 0M13 18a3.8 3.8 0 0 1 7.5 0" />
      </svg>
    ),
  },
  {
    key: "projects",
    value: "200+ Aufträge",
    description: "Koordinierte Einsätze bei Renovation, Schutz und Unterhalt.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[1.2rem] w-[1.2rem]" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M7.25 12.25 10.5 15.5l6.25-6.25" />
        <rect x="4" y="4" width="16" height="16" rx="3" />
      </svg>
    ),
  },
  {
    key: "experience",
    value: (
      <>
        Handwerkserfahrung
        <br />
        seit 1981
      </>
    ),
    description: "Familiäre Handwerkswurzeln als verlässliche Grundlage der Ausführung.",
    valueClassName: "text-[1rem] sm:text-[1.1rem]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[1.2rem] w-[1.2rem]" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4.5 16.5h15M7.5 16.5v-8M12 16.5V6M16.5 16.5V9.5" />
        <path d="M6.5 6.5h1.8M11 4.5h1.8M15.5 7.5h1.8" />
      </svg>
    ),
  },
];

export function TrustBarSection() {
  return (
    <section
      aria-label="Qualität und Ablauf"
      className="rounded-[var(--radius-xl)] bg-[var(--color-porcelain-surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10"
    >
      <h2 data-reveal="fade-up" className="max-w-4xl text-balance text-[1.72rem] font-semibold leading-tight text-[var(--color-deep-green)] sm:text-[2.05rem]">
        Verlässliche Arbeit beginnt mit klaren Abläufen.
      </h2>
      <p data-reveal="fade-up" className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-soft-graphite)]">
        SCM Baupartner verbindet handwerkliche Erfahrung mit moderner Organisation, klarer Kommunikation und sauberer Ausführung.
      </p>

      <div className="mt-8">
        <ul data-reveal-stagger className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustFacts.map((fact) => (
            <li
              key={fact.key}
              className="flex min-h-[15.5rem] flex-col rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white px-5 py-5 shadow-[0_18px_36px_-32px_rgba(18,60,46,0.5)] sm:px-6 sm:py-6"
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] text-[var(--color-deep-green)]"
                >
                  {fact.icon}
                </span>
              </div>

              <p className={`mt-4 text-balance text-[1.15rem] font-semibold leading-snug text-[var(--color-deep-green)] sm:text-[1.25rem] ${fact.valueClassName ?? ""}`}>
                {fact.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{fact.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

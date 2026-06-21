import Link from "next/link";
import { SectionShell } from "@/components/layout/SectionShell";

const services = [
  {
    title: "Malerarbeiten",
    description: "Saubere Anstriche, Oberflächenvorbereitung und präzise Ausführung für Innenräume.",
  },
  {
    title: "Gipserarbeiten und Verputz",
    description: "Glatte Flächen, Reparaturen, Verputz und saubere Vorarbeiten für hochwertige Ergebnisse.",
  },
  {
    title: "Fassaden und Renovationen",
    description: "Fassadenarbeiten, Sanierungen, Ausbesserungen und Renovationen für Werterhalt und gepflegte Gebäude.",
  },
  {
    title: "Schutz und Spezialarbeiten",
    description: "Graffitientfernung, Graffitischutz, Schimmelbehandlung, Spritzlackierung und Feinarbeiten.",
  },
] as const;

export function ServiceCompassSection() {
  return (
    <SectionShell
      id="leistungen"
      title="Unsere Bau- und Oberflächenleistungen"
      description="Von Malerarbeiten und Gipserarbeiten bis zu Fassaden, Renovationen und Ausbesserungen: SCM Baupartner deckt die wichtigsten Arbeiten für saubere Räume und gepflegte Immobilien in Zürich und Umgebung ab."
    >
      <div data-reveal-stagger className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="scm-lift overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white"
          >
            <div
              data-reveal="mask"
              className="relative h-28 border-b border-[var(--color-border-green-gray)] bg-[linear-gradient(140deg,var(--color-porcelain-surface)_0%,white_52%,var(--color-mist-green)_100%)]"
            >
              <span className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(transparent 96%, rgba(18,60,46,0.08) 96%)", backgroundSize: "100% 12px" }} />
              <span className="absolute left-4 top-4 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-fresh-green)]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[var(--color-deep-green)]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">{service.description}</p>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/leistungen"
        className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] px-4 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]"
      >
        Alle Leistungen ansehen
        <span aria-hidden="true">→</span>
      </Link>
    </SectionShell>
  );
}

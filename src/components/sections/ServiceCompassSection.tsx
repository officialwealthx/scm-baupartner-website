import Link from "next/link";
import { SectionShell } from "@/components/layout/SectionShell";
import { serviceGroups } from "@/content/services";

export function ServiceCompassSection() {
  return (
    <SectionShell
      title="Leistungen für Oberfläche, Schutz und Renovation."
      description="Drei Arbeitsfelder mit klarer Hierarchie statt Kartenwand — materialorientiert, präzise und sauber gegliedert."
    >
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="scm-lift overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)]">
          <div
            className="relative min-h-40 border-b border-[var(--color-border-green-gray)] p-6 sm:min-h-48 sm:p-8"
            style={{ background: serviceGroups[0].swatch }}
            data-reveal="mask"
          >
            <span className="text-[3rem] font-semibold leading-none text-[var(--color-deep-green)]/18 sm:text-[3.8rem]">
              01
            </span>
            <h3 className="mt-3 text-xl font-semibold text-[var(--color-deep-green)]">
              {serviceGroups[0].title}
            </h3>
            <p className="mt-2 max-w-xl text-sm text-[var(--color-soft-graphite)]">
              {serviceGroups[0].description}
            </p>
          </div>
          <div className="p-6 sm:p-8">
            <ul className="grid gap-3 text-sm text-[var(--color-soft-graphite)] sm:grid-cols-2">
              {serviceGroups[0].items.map((item) => (
                <li key={item} className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-3.5 py-2.5">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/leistungen"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:text-[var(--color-fresh-green)]"
            >
              Leistung ansehen
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </article>

        <div data-reveal-stagger className="grid gap-5">
          {serviceGroups.slice(1).map((group, index) => (
            <article key={group.title} className={cnCard(index)}>
              <div
                className="relative border-b border-[var(--color-border-green-gray)] p-5"
                style={{ background: group.swatch }}
              >
                <span className="text-4xl font-semibold leading-none text-[var(--color-deep-green)]/18">
                  {String(index + 2).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--color-deep-green)]">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{group.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-soft-graphite)]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-2.5">
                      <span aria-hidden="true" className="text-[var(--color-fresh-green)]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function cnCard(index: number) {
  return `scm-lift group overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)] hover:border-[var(--color-fresh-green)] ${index === 0 ? "lg:min-h-[20rem]" : ""}`;
}

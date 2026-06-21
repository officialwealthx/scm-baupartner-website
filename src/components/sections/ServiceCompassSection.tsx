import Link from "next/link";
import { SectionShell } from "@/components/layout/SectionShell";
import { serviceGroups } from "@/content/services";

export function ServiceCompassSection() {
  return (
    <SectionShell
      eyebrow="Leistungen"
      title="Leistungen für Oberfläche, Schutz und Renovation."
      description="Drei klar geführte Arbeitsbereiche — von feiner Farb- und Oberflächenarbeit über Fassadenschutz bis zur Renovation."
    >
      <div
        data-reveal-stagger
        className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {serviceGroups.map((group, index) => (
          <article
            key={group.title}
            className={cnCard(index)}
          >
            {/* Surface swatch header with a large editorial index */}
            <div
              className="relative flex h-24 items-start justify-between overflow-hidden border-b border-[var(--color-border-green-gray)] p-4"
              style={{ background: group.swatch }}
              aria-hidden="true"
            >
              <span className="text-[2.75rem] font-semibold leading-none text-[var(--color-deep-green)]/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--color-deep-green)]/55">
                {group.tags.join(" · ")}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-[var(--color-deep-green)]">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{group.description}</p>

              <ul className="mt-5 space-y-2.5 text-sm text-[var(--color-soft-graphite)]">
                {group.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 border-t border-[var(--color-border-green-gray)]/60 pt-2.5 first:border-t-0 first:pt-0">
                    <span aria-hidden="true" className="text-[var(--color-fresh-green)]">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/leistungen"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:text-[var(--color-fresh-green)]"
              >
                Leistung ansehen
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

// First card is the visual anchor (wider on large screens); the others are
// supporting panels, so the grid never reads as three identical cards.
function cnCard(index: number) {
  const base =
    "scm-lift group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)] hover:border-[var(--color-fresh-green)]";
  return index === 0 ? `${base} md:col-span-2 lg:col-span-1` : base;
}

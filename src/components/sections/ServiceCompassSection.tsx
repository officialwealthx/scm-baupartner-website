import Link from "next/link";
import { SectionShell } from "@/components/layout/SectionShell";
import { serviceGroups } from "@/content/services";

export function ServiceCompassSection() {
  return (
    <SectionShell
      eyebrow="Leistungen"
      title="Leistungen für Oberfläche, Schutz und Renovation."
      description="Drei klar geführte Leistungsgruppen — von feiner Farb- und Oberflächenarbeit bis zu Fassadenschutz und Renovation."
    >
      <div className="scm-stagger mt-10 grid gap-5 md:grid-cols-3">
        {serviceGroups.map((group, index) => (
          <article
            key={group.title}
            className="scm-fade-up scm-lift group relative flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)] hover:border-[var(--color-fresh-green)]"
          >
            {/* Future image slot / surface swatch area */}
            <div
              className="relative flex h-28 items-end justify-between border-b border-dashed border-[var(--color-border-green-gray)] p-4"
              style={{ background: group.swatch }}
              aria-hidden="true"
            >
              <span className="text-4xl font-semibold leading-none text-[var(--color-deep-green)]/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full bg-white/70 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--color-fresh-green)] backdrop-blur-sm">
                Bildplatz
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--color-mist-green)] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-[var(--color-deep-green)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[var(--color-deep-green)]">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{group.description}</p>

              {/* Material line accent */}
              <span
                aria-hidden="true"
                className="mt-4 block h-px w-full bg-gradient-to-r from-[var(--color-fresh-green)]/50 to-transparent"
              />

              <ul className="mt-4 space-y-2 text-sm text-[var(--color-soft-graphite)]">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-fresh-green)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/leistungen"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:text-[var(--color-fresh-green)]"
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

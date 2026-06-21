import Link from "next/link";
import { SectionShell } from "@/components/layout/SectionShell";
import { serviceGroups } from "@/content/services";

export function ServiceCompassSection() {
  return (
    <SectionShell
      id="leistungen"
      title="Leistungen / Surface Architecture"
      description="Drei Leistungsfelder mit klaren Kapiteln und einer ruhigen Materialfläche als Anker."
    >
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article
          data-reveal="mask"
          className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-6 sm:p-8"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(130% 100% at 100% 0%, var(--color-mist-green) 0%, transparent 55%), linear-gradient(145deg, transparent 0%, rgba(47,143,91,0.1) 65%, transparent 100%)",
            }}
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">Materialanker</p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-[var(--color-deep-green)] sm:text-[2.1rem]">
              Oberflächen prägen Räume.
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-soft-graphite)] sm:text-base">
              SCM bündelt Ausführung, Schutz und Renovation in einer strukturierten Arbeitsarchitektur statt in losen Einzelkarten.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2.5 text-[0.72rem] font-medium text-[var(--color-deep-green)] sm:max-w-[23rem]">
              <span className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3 py-2">Farbe</span>
              <span className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3 py-2">Schutz</span>
              <span className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3 py-2">Renovation</span>
            </div>
          </div>
        </article>

        <div data-reveal-stagger className="grid gap-4">
          {serviceGroups.map((group, index) => (
            <article
              key={group.title}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-5 transition-colors hover:border-[var(--color-fresh-green)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--color-deep-green)]">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{group.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-[var(--color-deep-green)]">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-3 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <Link
            href="/leistungen"
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] px-4 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]"
          >
            Alle Leistungen ansehen
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}

import { serviceGroups } from "@/content/services";

export function ServiceCompassSection() {
  return (
    <section className="mt-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">Leistungen</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-deep-green)] sm:text-3xl">
          Leistungen für Oberfläche, Schutz und Renovation.
        </h2>
      </div>

      <div className="scm-stagger mt-8 grid gap-5 md:grid-cols-3">
        {serviceGroups.map((group, index) => (
          <article
            key={group.title}
            className="scm-fade-up group relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-6 shadow-[var(--shadow-soft)] transition-colors hover:border-[var(--color-fresh-green)]"
          >
            {/* Material-line accent + number marker */}
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[var(--color-soft-green)]" />
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[var(--color-fresh-green)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-wrap justify-end gap-1.5">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--color-mist-green)] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-[var(--color-deep-green)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-[var(--color-deep-green)]">{group.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{group.description}</p>

            <ul className="mt-4 space-y-2 border-t border-[var(--color-border-green-gray)] pt-4 text-sm text-[var(--color-soft-graphite)]">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-fresh-green)]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

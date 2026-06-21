import { targetGroups } from "@/content/target-groups";

export function TargetGroupsSection() {
  return (
    <section className="mt-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">Zielgruppen</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-deep-green)] sm:text-3xl">
          Für private Projekte und professionelle Partner.
        </h2>
      </div>
      <ul className="scm-stagger mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {targetGroups.map((group) => (
          <li
            key={group.name}
            className="scm-fade-up rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-5 transition-colors hover:border-[var(--color-fresh-green)]"
          >
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-active-green)]" />
              <p className="text-base font-semibold text-[var(--color-deep-green)]">{group.name}</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{group.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

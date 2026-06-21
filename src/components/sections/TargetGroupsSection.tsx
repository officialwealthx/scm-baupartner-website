import { SectionShell } from "@/components/layout/SectionShell";
import { targetGroups } from "@/content/target-groups";

export function TargetGroupsSection() {
  return (
    <SectionShell
      eyebrow="Zielgruppen"
      title="Für private Projekte und professionelle Partner."
      description="Unterschiedliche Bedürfnisse, eine klare Ausführung — von Privatkunden bis zu Architektur- und Verwaltungspartnern."
    >
      <ul className="scm-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {targetGroups.map((group) => (
          <li
            key={group.name}
            className="scm-fade-up scm-lift flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-5 shadow-[var(--shadow-soft)] hover:border-[var(--color-fresh-green)]"
          >
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--color-active-green)]" />
              <p className="text-base font-semibold text-[var(--color-deep-green)]">{group.name}</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{group.description}</p>

            <dl className="mt-4 space-y-2 border-t border-[var(--color-border-green-gray)] pt-4 text-xs">
              <div>
                <dt className="font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">Bedarf</dt>
                <dd className="mt-0.5 text-[var(--color-soft-graphite)]">{group.need}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-[var(--color-fresh-green)]">SCM passt</dt>
                <dd className="mt-0.5 text-[var(--color-soft-graphite)]">{group.fit}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

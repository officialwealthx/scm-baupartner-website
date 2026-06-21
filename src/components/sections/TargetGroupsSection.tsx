import { targetGroups } from "@/content/target-groups";

export function TargetGroupsSection() {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-[var(--color-deep-green)]">Target Groups</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {targetGroups.map((group) => (
          <li key={group} className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-soft-graphite)]">
            {group}
          </li>
        ))}
      </ul>
    </section>
  );
}

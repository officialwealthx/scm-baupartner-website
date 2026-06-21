import { InfoCard } from "@/components/cards/InfoCard";
import { serviceGroups } from "@/content/services";

export function ServiceCompassSection() {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-[var(--color-deep-green)]">Service Compass</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {serviceGroups.map((group) => (
          <InfoCard key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
    </section>
  );
}

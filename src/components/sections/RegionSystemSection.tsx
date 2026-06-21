import { regions } from "@/content/regions";

export function RegionSystemSection() {
  return (
    <section className="mt-14 rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-[var(--color-deep-green)]">Für Projekte in Zürich und der erweiterten Region.</h2>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {regions.map((region) => (
          <li key={region} className="rounded-[var(--radius-md)] bg-[var(--color-mist-green)] px-3 py-2 text-sm text-[var(--color-soft-graphite)]">
            {region}
          </li>
        ))}
      </ul>
    </section>
  );
}

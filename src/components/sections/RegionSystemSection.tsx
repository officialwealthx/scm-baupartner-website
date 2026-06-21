import { regions } from "@/content/regions";

export function RegionSystemSection() {
  return (
    <section className="mt-16 rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-6 sm:p-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">Einsatzgebiet</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-deep-green)] sm:text-3xl">
          Für Projekte in Zürich und der erweiterten Region.
        </h2>
      </div>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {regions.map((region) => (
          <li
            key={region}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-3.5 py-2 text-sm font-medium text-[var(--color-deep-green)]"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--color-fresh-green)]" />
            {region}
          </li>
        ))}
      </ul>
    </section>
  );
}

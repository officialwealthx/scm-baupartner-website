const modules = [
  "Offerten",
  "Termine",
  "Projektstatus",
  "Dokumente",
  "Rechnungen",
  "Quittungen",
  "Projektbilder",
  "Kommunikation",
  "Abnahme",
] as const;

export function PortalPreviewSection() {
  return (
    <section className="mt-14 rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[var(--color-soft-green)] p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-[var(--color-deep-green)]">Ein Bauprojekt soll nicht unübersichtlich sein.</h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-soft-graphite)]">
        SCM Baupartner plant eine digitale Projektübersicht, mit der Offerten, Termine, Dokumente, Rechnungen, Projektstatus und Kommunikation künftig klar an einem Ort sichtbar werden.
      </p>
      <p className="mt-4 text-sm font-medium text-[var(--color-deep-green)]">Preview / geplant für zukünftige digitale Projektkommunikation</p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <li key={module} className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-4 py-3 text-sm text-[var(--color-soft-graphite)]">
            {module}
          </li>
        ))}
      </ul>
    </section>
  );
}

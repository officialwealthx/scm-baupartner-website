const steps = [
  "Anfrage und Einschätzung",
  "Besichtigung und Offerte",
  "Ausführung und Koordination",
  "Qualitätscheck und Übergabe",
] as const;

export function ProcessTimelineSection() {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-[var(--color-deep-green)]">Process Timeline</h2>
      <ol className="mt-6 grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step} className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-fresh-green)]">Phase {index + 1}</p>
            <p className="mt-2 text-base font-medium text-[var(--color-deep-green)]">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

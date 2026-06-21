const steps = [
  {
    title: "Anfrage und Einschätzung",
    description: "Erste Aufnahme Ihres Anliegens und eine klare Ersteinschätzung.",
  },
  {
    title: "Besichtigung und Offerte",
    description: "Besichtigung vor Ort und eine nachvollziehbare, transparente Offerte.",
  },
  {
    title: "Ausführung und Koordination",
    description: "Saubere Umsetzung mit abgestimmten Terminen und klarer Koordination.",
  },
  {
    title: "Qualitätscheck und Übergabe",
    description: "Gemeinsamer Qualitätscheck und eine geordnete Projektübergabe.",
  },
] as const;

export function ProcessTimelineSection() {
  return (
    <section className="mt-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">Ablauf</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-deep-green)] sm:text-3xl">
          Von der Anfrage bis zur Übergabe.
        </h2>
      </div>

      <ol className="scm-stagger relative mt-8 grid gap-6 md:grid-cols-4 md:gap-4">
        {/* Connecting line: vertical on mobile, horizontal on desktop */}
        <span
          aria-hidden="true"
          className="absolute left-4 top-4 bottom-4 w-px bg-[var(--color-border-green-gray)] md:left-0 md:right-0 md:top-5 md:bottom-auto md:h-px md:w-full"
        />
        {steps.map((step, index) => (
          <li key={step.title} className="scm-fade-up relative pl-12 md:pl-0">
            <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-green-gray)] bg-white text-sm font-semibold text-[var(--color-deep-green)] md:relative">
              {index + 1}
            </span>
            <div className="md:mt-4">
              <h3 className="text-base font-semibold text-[var(--color-deep-green)]">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

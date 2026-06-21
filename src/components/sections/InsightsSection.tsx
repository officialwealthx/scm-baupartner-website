export function InsightsSection() {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-[var(--color-deep-green)]">Einblicke in Oberflächen, Räume und Ausführung.</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((slot) => (
          <article key={slot} className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] p-5">
            <p className="text-sm font-semibold text-[var(--color-deep-green)]">Projekt-/Surface-Insight Platzhalter {slot}</p>
            <p className="mt-2 text-sm text-[var(--color-soft-graphite)]">Hier folgt später kuratierter Inhalt ohne erfundene Projektdetails.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

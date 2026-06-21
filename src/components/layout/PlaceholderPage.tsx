export function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <section className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-6 sm:p-8">
      <h1 className="text-3xl font-semibold text-[var(--color-deep-green)]">{title}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)]">{description}</p>
      <p className="mt-6 text-sm font-medium text-[var(--color-fresh-green)]">Phase 1 Platzhalterseite</p>
    </section>
  );
}

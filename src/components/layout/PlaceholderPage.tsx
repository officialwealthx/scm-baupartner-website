import Link from "next/link";

export function PlaceholderPage({
  title,
  description,
  primaryCta = { href: "/offerte", label: "Offerte anfragen" },
  secondaryCta = { href: "/kontakt", label: "Kontakt aufnehmen" },
}: {
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-6 sm:p-8">
      <h1 className="text-3xl font-semibold text-[var(--color-deep-green)]">{title}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-soft-graphite)]">{description}</p>
      <p className="mt-6 text-sm font-medium text-[var(--color-fresh-green)]">Phase 1 Platzhalterseite</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primaryCta.href}
          className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] bg-[var(--color-fresh-green)] px-4 text-sm font-semibold text-white hover:bg-[var(--color-active-green)]"
        >
          {primaryCta.label}
        </Link>
        <Link
          href={secondaryCta.href}
          className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] px-4 text-sm font-semibold text-[var(--color-deep-green)] hover:bg-[var(--color-mist-green)]"
        >
          {secondaryCta.label}
        </Link>
      </div>
    </section>
  );
}

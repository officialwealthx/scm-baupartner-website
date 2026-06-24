import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Einblicke, Fachwissen und Neuigkeiten von SCM Baupartner.",
  path: "/blog",
  noIndex: true,
});

export default function BlogPage() {
  return (
    <section className="rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-6 sm:p-8">
      <h1 className="text-3xl font-semibold text-[var(--color-deep-green)]">Blog</h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-soft-graphite)]">
        Einblicke, Fachwissen und Neuigkeiten von SCM Baupartner.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">Beiträge werden schrittweise ergänzt.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/ratgeber"
          className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] px-4 text-sm font-semibold text-[var(--color-deep-green)] hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]"
        >
          Zum Ratgeber
        </Link>
        <Link
          href="/offerte"
          className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)] px-4 text-sm font-semibold text-white hover:bg-[var(--color-deep-green)]"
        >
          Offerte anfragen
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { guideArticles } from "@/content/guide";

export const metadata = buildMetadata({
  title: "Ratgeber",
  description: "Ratgeber zu Ablauf, Vorbereitung und Kostenfaktoren bei Maler-, Gipser-, Fassaden- und Renovationsprojekten in Zürich.",
  path: "/ratgeber",
});

export default function RatgeberPage() {
  return (
    <section className="rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white p-6 sm:p-8">
      <h1 className="text-3xl font-semibold text-[var(--color-deep-green)]">Ratgeber</h1>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-soft-graphite)]">
        Beiträge mit Fokus auf Vorbereitung, Ablauf und neutrale Einordnung von Kostenfaktoren.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {guideArticles.map((article) => (
          <article
            key={article.slug}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-5"
          >
            <h2 className="text-lg font-semibold text-[var(--color-deep-green)]">{article.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{article.excerpt}</p>
          </article>
        ))}
      </div>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] px-4 text-sm font-semibold text-[var(--color-deep-green)] hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]"
      >
        Zur Startseite
      </Link>
    </section>
  );
}

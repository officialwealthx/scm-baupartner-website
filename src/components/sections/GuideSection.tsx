import Link from "next/link";
import { SectionShell } from "@/components/layout/SectionShell";
import { guideArticles } from "@/content/guide";

export function GuideSection() {
  return (
    <SectionShell
      title="Ratgeber für klare Entscheidungen."
      description="Kurze Beiträge zu Vorbereitung, Ablauf und Ausführung."
    >
      <div data-reveal-stagger className="mt-8 grid gap-4 md:grid-cols-3">
        {guideArticles.map((article) => (
          <article
            key={article.slug}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-5"
          >
            <h3 className="text-base font-semibold text-[var(--color-deep-green)]">{article.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{article.excerpt}</p>
            <Link
              href="/ratgeber"
              className="scm-text-link scm-text-link-arrow mt-4 inline-flex min-h-11 items-center text-sm font-semibold"
            >
              Zum Ratgeber
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

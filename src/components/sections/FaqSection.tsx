import { SectionShell } from "@/components/layout/SectionShell";
import { faqPlaceholder } from "@/content/faq";

export function FaqSection() {
  return (
    <SectionShell
      title="FAQ"
      width="narrow"
    >
      <div data-reveal-stagger className="mt-8 space-y-3">
        {faqPlaceholder.map((item) => (
          <details
            key={item.question}
            className="scm-lift group rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-5 open:border-[var(--color-fresh-green)] open:shadow-[var(--shadow-soft)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[var(--color-deep-green)] [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-green-gray)] text-[var(--color-fresh-green)] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

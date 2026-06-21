import { faqPlaceholder } from "@/content/faq";

export function FaqSection() {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-[var(--color-deep-green)]">FAQ</h2>
      <div className="mt-6 space-y-3">
        {faqPlaceholder.map((item) => (
          <details key={item.question} className="rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--color-deep-green)]">{item.question}</summary>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-soft-graphite)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

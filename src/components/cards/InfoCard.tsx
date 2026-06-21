import { cn } from "@/lib/utils";

export function InfoCard({
  title,
  items,
  className,
}: {
  title: string;
  items: readonly string[];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-6 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <h3 className="mb-3 text-lg font-semibold text-[var(--color-deep-green)]">{title}</h3>
      <ul className="space-y-2 text-sm text-[var(--color-soft-graphite)]">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}

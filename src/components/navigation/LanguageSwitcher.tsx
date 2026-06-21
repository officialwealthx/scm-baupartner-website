import { languages } from "@/content/navigation";
import { cn } from "@/lib/utils";

// Visual-only language switch placeholder. DE active, EN/FR/IT planned.
export function LanguageSwitcher({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div
      aria-label="Sprache (Platzhalter, DE aktiv)"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5",
        isDark
          ? "border-white/25 bg-white/10"
          : "border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)]",
        className,
      )}
    >
      {languages.map((language) => (
        <span
          key={language.code}
          aria-current={language.active ? "true" : undefined}
          title={language.active ? "Deutsch (aktiv)" : `${language.code} (in Vorbereitung)`}
          className={cn(
            "rounded-full px-2 py-1 text-xs font-semibold leading-none",
            language.active && isDark && "bg-white text-[var(--color-deep-green)]",
            language.active && !isDark && "bg-[var(--color-deep-green)] text-white",
            !language.active && isDark && "text-white/70",
            !language.active && !isDark && "text-[var(--color-soft-graphite)]",
          )}
        >
          {language.code}
        </span>
      ))}
    </div>
  );
}

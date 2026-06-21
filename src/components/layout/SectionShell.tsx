import { cn } from "@/lib/utils";

type SectionVariant = "light" | "surface" | "deep";
type SectionWidth = "narrow" | "default" | "wide";

const variantWrapper: Record<SectionVariant, string> = {
  // Plain editorial section on the page background.
  light: "",
  // Soft porcelain surface panel with a fine green-gray frame.
  surface:
    "rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-6 sm:p-8 lg:p-10",
  // Deep Green cinematic stage with light text.
  deep:
    "rounded-[var(--radius-xl)] border border-[var(--color-deep-green)] bg-[var(--color-deep-green)] p-6 text-white shadow-[var(--shadow-soft)] sm:p-8 lg:p-10",
};

const headWidth: Record<SectionWidth, string> = {
  narrow: "max-w-xl",
  default: "max-w-2xl",
  wide: "max-w-3xl",
};

const eyebrowTone: Record<SectionVariant, string> = {
  light: "text-[var(--color-fresh-green)]",
  surface: "text-[var(--color-fresh-green)]",
  deep: "text-[var(--color-active-green)]",
};

const titleTone: Record<SectionVariant, string> = {
  light: "text-[var(--color-deep-green)]",
  surface: "text-[var(--color-deep-green)]",
  deep: "text-white",
};

const descriptionTone: Record<SectionVariant, string> = {
  light: "text-[var(--color-soft-graphite)]",
  surface: "text-[var(--color-soft-graphite)]",
  deep: "text-white/75",
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  variant = "light",
  width = "default",
  className,
  headerClassName,
  children,
  "aria-label": ariaLabel,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: SectionVariant;
  width?: SectionWidth;
  className?: string;
  headerClassName?: string;
  children?: React.ReactNode;
  "aria-label"?: string;
}) {
  const hasHeader = Boolean(eyebrow || title || description);

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("mt-14 first:mt-0 sm:mt-16 lg:mt-[4.75rem]", variantWrapper[variant], className)}
    >
      {hasHeader && (
        <div className={cn("scm-fade-up", headWidth[width], headerClassName)} data-reveal="fade-up">
          {eyebrow && (
            <p
              className={cn(
                "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]",
                eyebrowTone[variant],
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-px w-7",
                  variant === "deep" ? "bg-[var(--color-active-green)]" : "bg-[var(--color-fresh-green)]",
                )}
              />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              className={cn(
                "mt-3 text-balance text-2xl font-semibold leading-tight sm:text-3xl",
                titleTone[variant],
              )}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              className={cn(
                "mt-3 text-pretty text-sm leading-relaxed sm:text-base",
                descriptionTone[variant],
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

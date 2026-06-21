import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "portal";

const variantStyles: Record<ButtonVariant, string> = {
  // Deep Green anchor on light backgrounds, Fresh Green only on hover.
  primary:
    "bg-[var(--color-deep-green)] text-white border border-[var(--color-deep-green)] hover:bg-[var(--color-fresh-green)] hover:border-[var(--color-fresh-green)]",
  secondary:
    "bg-white text-[var(--color-deep-green)] border border-[var(--color-border-green-gray)] hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-soft-green)]",
  ghost:
    "bg-transparent text-[var(--color-deep-green)] border border-transparent hover:bg-[var(--color-mist-green)]",
  // For use on Deep Green / dark surfaces: light pill with dark, readable text.
  dark:
    "bg-white text-[var(--color-deep-green)] border border-white hover:bg-[var(--color-soft-green)] hover:border-[var(--color-soft-green)]",
  // Portal accent: Fresh Green call-to-action for the digital preview context.
  portal:
    "bg-[var(--color-fresh-green)] text-white border border-[var(--color-fresh-green)] hover:bg-[var(--color-active-green)] hover:border-[var(--color-active-green)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "scm-press inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-active-green)]",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

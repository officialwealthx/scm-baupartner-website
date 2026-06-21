import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-fresh-green)] text-white border border-[var(--color-fresh-green)] hover:bg-[var(--color-active-green)] hover:border-[var(--color-active-green)]",
  secondary:
    "bg-white text-[var(--color-deep-green)] border border-[var(--color-border-green-gray)] hover:bg-[var(--color-soft-green)]",
  ghost:
    "bg-transparent text-[var(--color-deep-green)] border border-transparent hover:bg-[var(--color-mist-green)]",
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
        "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-active-green)]",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

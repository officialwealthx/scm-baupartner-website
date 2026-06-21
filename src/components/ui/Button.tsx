import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primaryLight"
  | "primaryDark"
  | "secondaryLight"
  | "secondaryDark"
  | "portal"
  | "ghost"
  | "ghostDark";

// Every variant is readable in its resting state — no reliance on hover for
// contrast. Light variants sit on white/off-white; dark variants sit on
// Deep Green surfaces.
const variantStyles: Record<ButtonVariant, string> = {
  // Primary on light backgrounds: readable premium green, white text.
  primaryLight:
    "bg-[var(--color-fresh-green)] text-white border border-[var(--color-fresh-green)] shadow-[var(--shadow-soft)] hover:bg-[var(--color-active-green)] hover:border-[var(--color-active-green)]",
  // Primary on dark backgrounds: white pill with Deep Green text.
  primaryDark:
    "bg-white text-[var(--color-deep-green)] border border-white hover:bg-[var(--color-soft-green)] hover:border-[var(--color-soft-green)]",
  // Secondary on light: white surface, Deep Green text, green-gray border.
  secondaryLight:
    "bg-white text-[var(--color-deep-green)] border border-[var(--color-border-green-gray)] hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]",
  // Secondary on dark: translucent surface, white text, soft white border.
  secondaryDark:
    "bg-white/10 text-white border border-white/25 hover:bg-white/20 hover:border-white/40",
  // Portal accent: Soft Green surface, Deep Green text, small fresh accent.
  portal:
    "bg-[var(--color-soft-green)] text-[var(--color-deep-green)] border border-[var(--color-border-green-gray)] hover:bg-[var(--color-mist-green)] hover:border-[var(--color-fresh-green)]",
  // Ghost on light: quiet link-button.
  ghost:
    "bg-transparent text-[var(--color-deep-green)] border border-transparent hover:bg-[var(--color-mist-green)]",
  // Ghost on dark: quiet link-button on Deep Green surfaces.
  ghostDark:
    "bg-transparent text-white border border-transparent hover:bg-white/10",
};

const isExternal = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

export function Button({
  href,
  children,
  variant = "primaryLight",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const external = isExternal(href);

  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "scm-press inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-active-green)]",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLockupTone = "light" | "dark";

export function BrandLockup({
  tone = "light",
  href = "/",
  className,
  onClick,
  ariaLabel,
}: {
  tone?: BrandLockupTone;
  href?: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const dark = tone === "dark";
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label={ariaLabel ?? "SCM Baupartner — zur Startseite"}
      className={cn(
        "inline-flex h-11 min-w-[11.9rem] shrink-0 cursor-pointer select-none items-center justify-start gap-2.5",
        className,
      )}
    >
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current/20">
        <Image
          src={dark ? "/brand/scm-icon-white-transparent.png" : "/brand/scm-icon-green-transparent.png"}
          alt=""
          aria-hidden="true"
          width={32}
          height={32}
          draggable={false}
          className="pointer-events-none h-6 w-6 select-none object-contain"
        />
      </span>
      <span className="inline-flex items-baseline gap-1.5 leading-none">
        <span className={cn("text-[1.28rem] font-semibold tracking-[0.01em]", dark ? "text-white" : "text-[var(--color-deep-green)]")}>SCM</span>
        <span className={cn("pt-[0.04rem] text-sm font-medium", dark ? "text-white/92" : "text-[var(--color-soft-graphite)]")}>Baupartner</span>
      </span>
    </Link>
  );
}

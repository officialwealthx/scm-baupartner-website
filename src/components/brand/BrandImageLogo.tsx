"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type BrandImageLogoTone = "light" | "dark";

export function BrandImageLogo({
  tone = "light",
  href = "/",
  className,
  imageClassName,
  onClick,
  ariaLabel,
}: {
  tone?: BrandImageLogoTone;
  href?: string;
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const pathname = usePathname();
  const src = tone === "dark" ? "/brand/scm-logo-white-transparent-clean.png" : "/brand/scm-logo-green-transparent.png";

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.();
        if (href === "/" && pathname === "/" && typeof window !== "undefined") {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      aria-label={ariaLabel ?? "SCM Baupartner — zur Startseite"}
      className={cn(
        "inline-flex h-[46px] w-[168px] shrink-0 cursor-pointer select-none items-center justify-start sm:h-[48px] sm:w-[180px] lg:h-[50px] lg:w-[198px]",
        className,
      )}
    >
      <Image
        src={src}
        alt="SCM Baupartner"
        width={198}
        height={50}
        draggable={false}
        className={cn("pointer-events-none h-auto max-h-full w-full select-none object-contain", imageClassName)}
      />
    </Link>
  );
}

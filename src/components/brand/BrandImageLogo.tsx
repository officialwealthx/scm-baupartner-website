"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type BrandImageLogoTone = "light" | "dark";

type MainLogoProps = {
  tone?: BrandImageLogoTone;
  href?: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function MainLogo({
  tone = "light",
  href = "/",
  className,
  onClick,
  ariaLabel,
}: MainLogoProps) {
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
      aria-label={ariaLabel ?? "SCM Baupartner zur Startseite"}
      className={cn(
        "inline-flex shrink-0 cursor-pointer select-none items-center justify-start overflow-visible",
        className,
      )}
    >
      <span className="flex h-[50px] w-[198px] items-center justify-start sm:h-[52px] sm:w-[204px]">
        <Image
          src={src}
          alt="SCM Baupartner"
          width={198}
          height={50}
          draggable={false}
          className="pointer-events-none h-auto w-full max-h-[50px] max-w-[198px] select-none object-contain"
        />
      </span>
    </Link>
  );
}

export function BrandImageLogo(props: MainLogoProps) {
  return <MainLogo {...props} />;
}

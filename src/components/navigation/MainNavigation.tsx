"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { desktopNavigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "./MobileNavigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";

function normalizePath(href: string) {
  return href.split("#")[0] || "/";
}

export function MainNavigation() {
  const pathname = usePathname();

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" && typeof window !== "undefined") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-green-gray)] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/78">
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-3 px-4 py-3 sm:px-6 xl:px-8">
        <Link
          href="/"
          onClick={handleHomeClick}
          aria-label={`${siteConfig.name} — zur Startseite`}
          className="group flex min-w-0 items-center"
        >
          <Image
            src="/brand/scm-logo-green-transparent.png"
            alt="SCM Baupartner"
            width={260}
            height={72}
            priority
            className="h-8 w-auto shrink-0 sm:h-9"
          />
        </Link>

        <div className="hidden min-[1180px]:flex min-[1180px]:items-center min-[1180px]:gap-2">
          <nav
            aria-label="Hauptnavigation"
            className="rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] px-1.5 py-1"
          >
            <ul className="flex items-center gap-0">
              {desktopNavigationItems.map((item) => {
                const normalized = normalizePath(item.href);
                const isHashLink = item.href.includes("#");
                const isActive = isHashLink ? false : normalized === "/" ? pathname === "/" : pathname.startsWith(normalized);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "inline-flex h-10 items-center whitespace-nowrap rounded-full px-3 text-[0.84rem] font-medium leading-none transition-colors xl:px-3.5",
                        isActive
                          ? "bg-white text-[var(--color-deep-green)] ring-1 ring-[var(--color-border-green-gray)]"
                          : "text-[var(--color-soft-graphite)] hover:text-[var(--color-deep-green)]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <LanguageSwitcher className="scale-[0.97]" />
          <span aria-hidden="true" className="h-6 w-px bg-[var(--color-border-green-gray)]" />
          <Button
            href="/login"
            variant="ghost"
            className="whitespace-nowrap rounded-full border border-[var(--color-deep-green)] bg-white px-4 text-[0.8rem] text-[var(--color-deep-green)] hover:border-[var(--color-deep-green)] hover:bg-[var(--color-mist-green)]"
          >
            Login
          </Button>
          <Button href="/offerte" variant="primaryLight" className="whitespace-nowrap px-3 text-[0.8rem]">
            Kostenlose Offerte
          </Button>
        </div>

        <div className="min-[1180px]:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

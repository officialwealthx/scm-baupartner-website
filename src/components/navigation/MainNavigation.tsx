"use client";

import Link from "next/link";
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
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6 xl:px-8">
        <Link
          href="/"
          onClick={handleHomeClick}
          aria-label={`${siteConfig.name} — zur Startseite`}
          className="group flex min-w-0 items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.62rem] bg-[var(--color-deep-green)] text-[0.7rem] font-bold tracking-tight text-white ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-[var(--color-fresh-green)]"
          >
            SCM
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-sm font-semibold tracking-wide text-[var(--color-deep-green)] sm:text-base">
              {siteConfig.name}
            </span>
            <span className="hidden text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[var(--color-soft-graphite)] sm:block">
              Oberfläche · Fassade · Renovation
            </span>
          </span>
        </Link>

        <div className="hidden xl:flex xl:items-center xl:gap-3.5">
          <nav
            aria-label="Hauptnavigation"
            className="rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] px-2 py-1"
          >
            <ul className="flex items-center gap-0.5">
              {desktopNavigationItems.map((item) => {
                const normalized = normalizePath(item.href);
                const isHashLink = item.href.includes("#");
                const isActive = isHashLink ? false : normalized === "/" ? pathname === "/" : pathname.startsWith(normalized);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={item.href === "/" ? handleHomeClick : undefined}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "inline-flex h-10 items-center rounded-full px-4 text-sm font-medium leading-none whitespace-nowrap transition-colors",
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

          <LanguageSwitcher />
          <span aria-hidden="true" className="h-6 w-px bg-[var(--color-border-green-gray)]" />
          <Button href="/login" variant="ghost">
            Login
          </Button>
          <Button href="/offerte" variant="primaryLight">
            Offerte
          </Button>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "./MobileNavigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";

export function MainNavigation() {
  const pathname = usePathname();

  // Clicking the wordmark always lands at the very top of the homepage,
  // even when the visitor is already on "/".
  const handleHomeClick = () => {
    if (pathname === "/" && typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border-green-gray)] bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={handleHomeClick}
          aria-label={`${siteConfig.name} — zur Startseite`}
          className="group flex min-w-0 items-center gap-2.5"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.55rem] bg-[var(--color-deep-green)] text-[0.7rem] font-bold tracking-tight text-white ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-[var(--color-fresh-green)]"
          >
            SCM
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-sm font-semibold tracking-wide text-[var(--color-deep-green)] sm:text-base">
              {siteConfig.name}
            </span>
            <span className="hidden text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[var(--color-soft-graphite)] sm:block">
              Oberflächen &amp; Renovation
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Hauptnavigation">
          <ul className="flex items-center gap-0.5">
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={item.href === "/" ? handleHomeClick : undefined}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative inline-flex items-center rounded-[var(--radius-md)] px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-[var(--color-deep-green)]"
                        : "text-[var(--color-soft-graphite)] hover:text-[var(--color-deep-green)]",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-px origin-left rounded-full bg-[var(--color-fresh-green)] transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <span aria-hidden="true" className="h-6 w-px bg-[var(--color-border-green-gray)]" />
          <Button href="/login" variant="ghost">
            Kundenlogin
          </Button>
          <Button href="/offerte" variant="primaryLight">
            Offerte anfragen
          </Button>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}

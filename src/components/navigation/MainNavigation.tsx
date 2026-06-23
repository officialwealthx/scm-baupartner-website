"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { desktopQuickLinks, menuPanelGroups } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "./MobileNavigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

function normalizePath(href: string) {
  return href.split("#")[0] || "/";
}

function SearchIcon({ dark }: { dark: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <circle cx="11" cy="11" r="6.25" />
      <path d="m16 16 3.75 3.75" />
      <title>{dark ? "Suche" : "Suche"}</title>
    </svg>
  );
}

export function MainNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen || typeof document === "undefined") return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const handleHomeClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" && typeof window !== "undefined") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    setIsMenuOpen(false);
  };

  const headerDark = !isScrolled && !isMenuOpen;

  const menuPanel = useMemo(
    () => (
      <div className="fixed inset-0 top-[73px] z-[1000] hidden min-[1200px]:block">
        <button
          type="button"
          aria-label="Menü schliessen"
          className="absolute inset-0 bg-[rgba(6,16,11,0.35)] backdrop-blur-[1px]"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="relative mx-auto mt-4 w-[min(1280px,96vw)] overflow-hidden rounded-[28px] border border-[var(--color-border-green-gray)] bg-[var(--color-warm-off-white)] shadow-[0_35px_90px_-40px_rgba(18,60,46,0.65)]">
          <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border-green-gray)] bg-white px-6 py-4 lg:px-8">
            <Image
              src="/brand/scm-logo-green-transparent.png"
              alt="SCM Baupartner"
              width={220}
              height={64}
              className="h-8 w-auto"
            />
            <div className="flex items-center gap-2">
              <Link
                href="/offerte"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-active-green)]"
              >
                Offerte anfragen
              </Link>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border-green-gray)] bg-white px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-deep-green)]"
              >
                Schliessen
              </button>
            </div>
          </div>

          <nav aria-label="Menü" className="max-h-[calc(100svh-180px)] overflow-y-auto px-6 py-6 lg:px-8 lg:py-7">
            <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {menuPanelGroups.map((group) => (
                <li key={group.title} className="rounded-[20px] border border-[var(--color-border-green-gray)] bg-white p-4">
                  <Link
                    href={group.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="mb-3 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-deep-green)]"
                  >
                    {group.title}
                  </Link>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={`${group.title}-${item.label}`}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex min-h-11 items-center gap-2 rounded-[12px] px-2.5 py-1.5 text-sm text-[var(--color-soft-graphite)] transition-colors hover:bg-[var(--color-mist-green)] hover:text-[var(--color-deep-green)]"
                        >
                          <span aria-hidden="true" className="text-[var(--color-fresh-green)]">
                            ›
                          </span>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    ),
    [setIsMenuOpen],
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-[1010] border-b transition-colors duration-300",
        headerDark
          ? "border-white/16 bg-[var(--color-deep-green)] text-white"
          : "border-[var(--color-border-green-gray)] bg-white/95 text-[var(--color-deep-green)] backdrop-blur supports-[backdrop-filter]:bg-white/88",
      )}
    >
      <div className="mx-auto flex h-[73px] w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5 lg:gap-3">
          <Link
            href="/"
            onClick={handleHomeClick}
            aria-label={`${siteConfig.name} — zur Startseite`}
            className="inline-flex min-h-11 items-center rounded-[12px] bg-white px-2.5 py-1"
          >
            <Image
              src="/brand/scm-logo-green-transparent.png"
              alt="SCM Baupartner"
              width={210}
              height={60}
              priority
              draggable={false}
              className="h-8 w-auto shrink-0"
            />
          </Link>

          <span aria-hidden="true" className={cn("hidden h-8 w-px min-[1200px]:block", headerDark ? "bg-white/30" : "bg-[var(--color-border-green-gray)]")} />

          <div className="hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:gap-2">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="desktop-menu-panel"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors",
                headerDark
                  ? "border-white/30 bg-white/12 text-white hover:bg-white/18"
                  : "border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] text-[var(--color-deep-green)] hover:bg-[var(--color-soft-green)]",
              )}
            >
              <span aria-hidden="true" className="flex h-4 w-4 flex-col justify-between">
                <span className={cn("h-0.5 w-full rounded", headerDark ? "bg-white" : "bg-[var(--color-deep-green)]")} />
                <span className={cn("h-0.5 w-full rounded", headerDark ? "bg-white" : "bg-[var(--color-deep-green)]")} />
                <span className={cn("h-0.5 w-full rounded", headerDark ? "bg-white" : "bg-[var(--color-deep-green)]")} />
              </span>
              Menü
            </button>

            {desktopQuickLinks.map((item) => {
              const normalized = normalizePath(item.href);
              const isActive = normalized === "/" ? pathname === "/" : pathname.startsWith(normalized);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-full border px-3.5 text-sm font-medium transition-colors",
                    headerDark
                      ? isActive
                        ? "border-white/40 bg-white/16 text-white"
                        : "border-white/24 text-white/92 hover:bg-white/12"
                      : isActive
                        ? "border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] text-[var(--color-deep-green)]"
                        : "border-transparent text-[var(--color-soft-graphite)] hover:border-[var(--color-border-green-gray)] hover:bg-[var(--color-mist-green)] hover:text-[var(--color-deep-green)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:gap-2">
          <Link
            href="/ratgeber"
            className={cn(
              "inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium transition-colors",
              headerDark
                ? "border-white/24 text-white hover:bg-white/12"
                : "border-[var(--color-border-green-gray)] text-[var(--color-deep-green)] hover:bg-[var(--color-mist-green)]",
            )}
          >
            <SearchIcon dark={headerDark} />
            Suche
          </Link>
          <Link
            href="/login"
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border px-3.5 text-sm font-medium transition-colors",
              headerDark
                ? "border-white/24 text-white hover:bg-white/12"
                : "border-[var(--color-border-green-gray)] text-[var(--color-deep-green)] hover:bg-[var(--color-mist-green)]",
            )}
          >
            Login
          </Link>
          <LanguageSwitcher tone={headerDark ? "dark" : "light"} />
          <Link
            href="/offerte"
            className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)] px-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-active-green)]"
          >
            Offerte
          </Link>
        </div>

        <div className="min-[1200px]:hidden">
          <MobileNavigation />
        </div>
      </div>

      {isMenuOpen ? <div id="desktop-menu-panel">{menuPanel}</div> : null}
    </header>
  );
}

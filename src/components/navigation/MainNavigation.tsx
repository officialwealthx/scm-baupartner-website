"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { desktopQuickLinks, menuPanelGroups } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "./MobileNavigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

function normalizePath(href: string) {
  return href.split("#")[0] || "/";
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <circle cx="11" cy="11" r="6.25" />
      <path d="m16 16 3.75 3.75" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <circle cx="12" cy="8" r="3.25" />
      <path d="M4.75 19a7.25 7.25 0 0 1 14.5 0" />
    </svg>
  );
}

export function MainNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const update = () => {
      setIsScrolled(window.scrollY > 12);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if ((isMenuOpen || isSearchOpen) && typeof window !== "undefined") {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsMenuOpen(false);
          setIsSearchOpen(false);
        }
      };
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
    return;
  }, [isMenuOpen, isSearchOpen]);

  useEffect(() => {
    if (!isMenuOpen || typeof document === "undefined") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isSearchOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!searchPanelRef.current) return;
      if (!searchPanelRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [isSearchOpen]);

  const handleHomeClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" && typeof window !== "undefined") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);
  const headerDark = !isScrolled && !isMenuOpen;
  const logoSrc = headerDark ? "/brand/scm-logo-white-transparent.png" : "/brand/scm-logo-green-transparent.png";

  const menuPanel = (
    <div className="fixed inset-0 top-[73px] z-[1000] hidden min-[1200px]:block">
        <button
          type="button"
          aria-label="Menü schliessen"
          className="absolute inset-0 bg-[rgba(6,16,11,0.35)] backdrop-blur-[1px]"
          onClick={closeMenu}
        />

        <aside
          id="desktop-menu-panel"
          aria-label="Desktop Menü"
          className="scm-slide-in-left relative flex h-full w-[min(92vw,470px)] flex-col border-r border-[var(--color-border-green-gray)] bg-[var(--color-warm-off-white)] shadow-[0_35px_90px_-40px_rgba(18,60,46,0.65)]"
        >
          <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border-green-gray)] bg-white px-5 py-4">
            <Image
              src="/brand/scm-logo-green-transparent.png"
              alt="SCM Baupartner"
              width={210}
              height={60}
              className="pointer-events-none h-8 w-auto select-none"
              draggable={false}
            />
            <div className="flex items-center gap-2">
              <Link
                href="/offerte"
                onClick={closeMenu}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-active-green)]"
              >
                Offerte anfragen
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                autoFocus
                className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border-green-gray)] bg-white px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-deep-green)]"
              >
                Schliessen
              </button>
            </div>
          </div>

          <nav aria-label="Menü" className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
            <ul className="space-y-4">
              {menuPanelGroups.map((group) => (
                <li key={group.title} className="rounded-[18px] border border-[var(--color-border-green-gray)] bg-white p-4">
                  <Link
                    href={group.href}
                    onClick={closeMenu}
                    className="mb-3 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-deep-green)]"
                  >
                    {group.title}
                  </Link>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={`${group.title}-${item.label}`}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
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
        </aside>
      </div>
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
            className="inline-flex shrink-0 cursor-pointer select-none items-center"
          >
            <Image
              src={logoSrc}
              alt="SCM Baupartner"
              width={210}
              height={60}
              priority
              draggable={false}
              className="pointer-events-none h-8 w-auto shrink-0 select-none"
            />
          </Link>

          <span aria-hidden="true" className={cn("hidden h-8 w-px min-[1200px]:block", headerDark ? "bg-white/30" : "bg-[var(--color-border-green-gray)]")} />

          <div className="hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:gap-2">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="desktop-menu-panel"
              onClick={() => {
                setIsMenuOpen((previous) => !previous);
                setIsSearchOpen(false);
              }}
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
          <div className="relative" ref={searchPanelRef}>
            <button
              type="button"
              aria-expanded={isSearchOpen}
              aria-controls="desktop-search-panel"
              onClick={() => {
                setIsSearchOpen((previous) => !previous);
                setIsMenuOpen(false);
              }}
              className={cn(
                "inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium transition-colors",
                headerDark
                  ? "border-white/24 text-white hover:bg-white/12"
                  : "border-[var(--color-border-green-gray)] text-[var(--color-deep-green)] hover:bg-[var(--color-mist-green)]",
              )}
            >
              <SearchIcon />
              Suche
            </button>

            {isSearchOpen ? (
              <div
                id="desktop-search-panel"
                className="absolute right-0 top-[calc(100%+0.5rem)] z-[1020] w-[min(92vw,320px)] rounded-[16px] border border-[var(--color-border-green-gray)] bg-white p-4 shadow-[0_18px_36px_-24px_rgba(18,60,46,0.5)]"
              >
                <p className="text-sm font-semibold text-[var(--color-deep-green)]">Suche vorbereiten</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
                  Die Suche wird ausgebaut. Bis dahin finden Sie Themen im Ratgeber.
                </p>
                <Link href="/ratgeber" onClick={() => setIsSearchOpen(false)} className="scm-text-link mt-3 inline-flex">
                  Zum Ratgeber
                </Link>
              </div>
            ) : null}
          </div>

          <Link
            href="/login"
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border px-3.5 text-sm font-medium transition-colors",
              headerDark
                ? "border-white/24 text-white hover:bg-white/12"
                : "border-[var(--color-border-green-gray)] text-[var(--color-deep-green)] hover:bg-[var(--color-mist-green)]",
            )}
            aria-label="Login"
          >
            <UserIcon />
          </Link>

          <LanguageSwitcher tone={headerDark ? "dark" : "light"} />
        </div>

        <div className="min-[1200px]:hidden">
          <MobileNavigation />
        </div>
      </div>

      {isMenuOpen ? menuPanel : null}
    </header>
  );
}

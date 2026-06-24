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

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[1.1rem] w-[1.1rem]" aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-green-gray)] text-[var(--color-deep-green)] transition-transform",
        open ? "rotate-180" : "rotate-0",
      )}
    >
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4">
        <path d="m5 7 5 6 5-6" />
      </svg>
    </span>
  );
}

function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
}

export function MainNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string>(menuPanelGroups[0]?.title ?? "");
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

  const menuPanel = (
    <div className="fixed inset-0 z-[9999] hidden min-[1200px]:block">
      <button
        type="button"
        aria-label="Menü schliessen"
        className="absolute inset-0 bg-[rgba(6,16,11,0.38)]"
        onClick={closeMenu}
      />

      <aside
        id="desktop-menu-panel"
        aria-label="Desktop Menü"
        className="scm-slide-in-left relative left-0 top-0 flex h-[100dvh] w-[clamp(420px,34vw,500px)] max-w-[100vw] flex-col overflow-x-hidden border-r border-[var(--color-border-green-gray)] bg-[var(--color-warm-off-white)] shadow-[0_35px_90px_-40px_rgba(18,60,46,0.65)]"
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
          <button
            type="button"
            onClick={closeMenu}
            autoFocus
            aria-label="Menü schliessen"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--color-border-green-gray)] bg-white text-[var(--color-deep-green)]"
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Menü" className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
          <ul className="space-y-3">
            {menuPanelGroups.map((group) => {
              const open = openDesktopGroup === group.title;
              const groupId = `desktop-${group.title.toLowerCase().replaceAll(" ", "-")}`;
              return (
                <li key={group.title} className="rounded-[18px] border border-[var(--color-border-green-gray)] bg-white">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={groupId}
                    onClick={() => setOpenDesktopGroup((previous) => (previous === group.title ? "" : group.title))}
                    className="flex min-h-14 w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  >
                    <span className="text-xl font-semibold leading-tight text-[var(--color-deep-green)]">{group.title}</span>
                    <ChevronIcon open={open} />
                  </button>

                  {open ? (
                    <ul id={groupId} className="space-y-1 border-t border-[var(--color-border-green-gray)] px-3 py-3">
                      {group.items.map((item) => (
                        <li key={`${group.title}-${item.label}`}>
                          {isExternalLink(item.href) ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                              onClick={closeMenu}
                              className="flex min-h-11 items-center gap-2 rounded-[12px] px-2.5 py-1.5 text-sm text-[var(--color-soft-graphite)] transition-colors hover:bg-[var(--color-mist-green)] hover:text-[var(--color-deep-green)]"
                            >
                              <span aria-hidden="true" className="text-[var(--color-fresh-green)]">›</span>
                              <span>{item.label}</span>
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={closeMenu}
                              className="flex min-h-11 items-center gap-2 rounded-[12px] px-2.5 py-1.5 text-sm text-[var(--color-soft-graphite)] transition-colors hover:bg-[var(--color-mist-green)] hover:text-[var(--color-deep-green)]"
                            >
                              <span aria-hidden="true" className="text-[var(--color-fresh-green)]">›</span>
                              <span>{item.label}</span>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="mt-5 space-y-2 rounded-[18px] border border-[var(--color-border-green-gray)] bg-white p-3">
            <Link
              href="/offerte"
              onClick={closeMenu}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-[14px] border border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)] px-4 text-sm font-semibold whitespace-nowrap text-white"
            >
              Offerte anfragen
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-[14px] border border-[var(--color-border-green-gray)] bg-white px-4 text-sm font-semibold text-[var(--color-deep-green)]"
            >
              WhatsApp schreiben
            </a>
          </div>
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
            className="inline-flex h-10 shrink-0 cursor-pointer select-none items-center justify-start"
          >
            <span className="relative inline-flex h-10 w-[11.2rem] shrink-0 items-center justify-start">
              <Image
                src="/brand/scm-logo-white-transparent.png"
                alt="SCM Baupartner"
                width={210}
                height={60}
                priority
                draggable={false}
                className={cn(
                  "pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-left transition-opacity duration-200",
                  headerDark ? "opacity-100" : "opacity-0",
                )}
              />
              <Image
                src="/brand/scm-logo-green-transparent.png"
                alt=""
                width={210}
                height={60}
                aria-hidden="true"
                priority
                draggable={false}
                className={cn(
                  "pointer-events-none absolute inset-0 h-full w-full select-none object-contain object-left transition-opacity duration-200",
                  headerDark ? "opacity-0" : "opacity-100",
                )}
              />
            </span>
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
                        : "border-[var(--color-border-green-gray)] text-[var(--color-soft-graphite)] hover:bg-[var(--color-mist-green)] hover:text-[var(--color-deep-green)]",
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
                "inline-flex min-h-11 items-center gap-2 border-b px-2 text-sm font-medium transition-colors",
                headerDark
                  ? "border-white/45 text-white hover:border-white"
                  : "border-[var(--color-border-green-gray)] text-[var(--color-deep-green)] hover:border-[var(--color-fresh-green)]",
              )}
            >
              Suche
              <SearchIcon />
            </button>

            {isSearchOpen ? (
              <div
                id="desktop-search-panel"
                className="absolute right-0 top-[calc(100%+0.5rem)] z-[1020] w-[min(92vw,340px)] rounded-[16px] border border-[var(--color-border-green-gray)] bg-white p-4 shadow-[0_18px_36px_-24px_rgba(18,60,46,0.5)]"
              >
                <p className="text-sm font-semibold text-[var(--color-deep-green)]">Suche in Vorbereitung</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
                  Die Suche wird vorbereitet. Bis dahin finden Sie die wichtigsten Themen im Menü und im Ratgeber.
                </p>
                <Link href="/ratgeber" onClick={() => setIsSearchOpen(false)} className="scm-text-link scm-text-link-arrow mt-3 inline-flex">
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
          <MobileNavigation tone={headerDark ? "dark" : "light"} />
        </div>
      </div>

      {isMenuOpen ? menuPanel : null}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandImageLogo } from "@/components/brand/BrandImageLogo";
import { desktopQuickLinks, menuPanelGroups } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNavigation } from "./MobileNavigation";

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
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className={cn("h-4 w-4 transition-transform", open ? "rotate-180" : "rotate-0")}
      aria-hidden="true"
    >
      <path d="m5 7 5 6 5-6" />
    </svg>
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
      if (!searchPanelRef.current.contains(event.target as Node)) setIsSearchOpen(false);
    };
    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [isSearchOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const headerDark = !isScrolled && !isMenuOpen;

  return (
    <header
      className={cn(
        "sticky top-0 z-[1010] border-b transition-colors duration-300",
        headerDark
          ? "border-white/18 bg-[var(--color-deep-green)] text-white"
          : "border-[var(--color-border-green-gray)] bg-white/96 text-[var(--color-deep-green)] backdrop-blur supports-[backdrop-filter]:bg-white/92",
      )}
    >
      <div className="mx-auto hidden h-[73px] w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 min-[1200px]:flex">
        <div className="flex min-w-0 items-center gap-3">
          <BrandImageLogo
            tone={headerDark ? "dark" : "light"}
            onClick={() => {
              setIsSearchOpen(false);
              setIsMenuOpen(false);
            }}
          />

          <span aria-hidden="true" className={cn("h-8 w-px", headerDark ? "bg-white/30" : "bg-[var(--color-border-green-gray)]")} />

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

          <nav aria-label="Schnellthemen" className="flex items-center gap-4 pl-1">
            {desktopQuickLinks.map((item) => {
              const normalized = normalizePath(item.href);
              const isActive = normalized === "/" ? pathname === "/" : pathname.startsWith(normalized);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "inline-flex min-h-11 items-center text-sm font-medium transition-colors",
                    headerDark ? "text-white/92 hover:text-white" : "text-[var(--color-soft-graphite)] hover:text-[var(--color-deep-green)]",
                    isActive && (headerDark ? "text-white" : "text-[var(--color-deep-green)]"),
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
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
                "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-colors",
                headerDark
                  ? "border-white/24 text-white hover:bg-white/12"
                  : "border-[var(--color-border-green-gray)] text-[var(--color-deep-green)] hover:bg-[var(--color-mist-green)]",
              )}
              aria-label="Suche"
            >
              <SearchIcon />
            </button>

            {isSearchOpen ? (
              <div
                id="desktop-search-panel"
                className="absolute right-0 top-[calc(100%+0.5rem)] z-[1020] w-[min(92vw,340px)] rounded-[16px] border border-[var(--color-border-green-gray)] bg-white p-4 shadow-[0_18px_36px_-24px_rgba(18,60,46,0.5)]"
              >
                <p className="text-sm font-semibold text-[var(--color-deep-green)]">Suche vorbereiten</p>
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
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-colors",
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
      </div>

      <div className="min-[1200px]:hidden">
        <MobileNavigation tone={headerDark ? "dark" : "light"} />
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-[9999] hidden min-[1200px]:block">
          <button
            type="button"
            aria-label="Menü schliessen"
            className="absolute inset-0 bg-[rgba(6,16,11,0.42)]"
            onClick={closeMenu}
          />

          <aside
            id="desktop-menu-panel"
            aria-label="Desktop Menü"
            className="scm-slide-in-left relative left-0 top-0 flex h-[100dvh] w-[clamp(420px,34vw,500px)] max-w-[100vw] flex-col overflow-hidden border-r border-[var(--color-border-green-gray)] bg-[var(--color-warm-off-white)]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border-green-gray)] bg-white px-5 py-4">
              <BrandImageLogo tone="light" onClick={closeMenu} />
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

            <nav aria-label="Menü" className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
              <ul className="divide-y divide-[var(--color-border-green-gray)] border-y border-[var(--color-border-green-gray)] bg-white">
                {menuPanelGroups.map((group) => {
                  const open = openDesktopGroup === group.title;
                  const groupId = `desktop-${group.title.toLowerCase().replaceAll(" ", "-")}`;
                  return (
                    <li key={group.title}>
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={groupId}
                        onClick={() => setOpenDesktopGroup((previous) => (previous === group.title ? "" : group.title))}
                        className="flex min-h-14 w-full items-center justify-between gap-3 px-4 py-3 text-left"
                      >
                        <span className="text-[1.14rem] font-semibold leading-tight text-[var(--color-deep-green)]">{group.title}</span>
                        <ChevronIcon open={open} />
                      </button>

                      {open ? (
                        <ul id={groupId} className="space-y-1 border-t border-[var(--color-border-green-gray)] px-4 pb-3">
                          {group.items.map((item) => (
                            <li key={`${group.title}-${item.label}`}>
                              {isExternalLink(item.href) ? (
                                <a
                                  href={item.href}
                                  target={item.href.startsWith("http") ? "_blank" : undefined}
                                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                                  onClick={closeMenu}
                                  className="scm-text-link scm-text-link-arrow inline-flex min-h-11 items-center text-sm"
                                >
                                  {item.label}
                                </a>
                              ) : (
                                <Link href={item.href} onClick={closeMenu} className="scm-text-link scm-text-link-arrow inline-flex min-h-11 items-center text-sm">
                                  {item.label}
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

              <div className="mt-5 space-y-2 border-t border-[var(--color-border-green-gray)] pt-4">
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

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-[var(--color-border-green-gray)] pt-4">
                <LanguageSwitcher />
                <div className="flex items-center gap-3 text-sm">
                  <Link href="/impressum" onClick={closeMenu} className="scm-text-link scm-text-link-arrow inline-flex min-h-11 items-center">
                    Impressum
                  </Link>
                  <Link href="/datenschutz" onClick={closeMenu} className="scm-text-link scm-text-link-arrow inline-flex min-h-11 items-center">
                    Datenschutz
                  </Link>
                </div>
              </div>
            </nav>
          </aside>
        </div>
      ) : null}
    </header>
  );
}

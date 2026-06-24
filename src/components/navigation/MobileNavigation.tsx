"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { MainLogo } from "@/components/brand/BrandImageLogo";
import { desktopQuickLinks, mobileAccordionGroups } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

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
      className={cn("h-4 w-4 text-[var(--color-deep-green)] transition-transform", open ? "rotate-180" : "rotate-0")}
      aria-hidden="true"
    >
      <path d="m5 7 5 6 5-6" />
    </svg>
  );
}

function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
}

export function MobileNavigation({ tone = "light" }: { tone?: "light" | "dark" }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const isDark = tone === "dark";

  const isQuickLinkActive = (href: string) => {
    if (href === "/portal") return pathname.startsWith("/portal") || pathname.startsWith("/login");
    if (href === "/ratgeber") return pathname.startsWith("/ratgeber") || pathname.startsWith("/blog");
    return pathname.startsWith(href);
  };

  useEffect(() => {
    if (!(isMenuOpen || isSearchOpen) || typeof document === "undefined") return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, isSearchOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenGroup(null);
  };
  const closePanels = () => {
    setIsSearchOpen(false);
    setIsMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 py-2 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-2">
        <MainLogo tone={isDark ? "dark" : "light"} onClick={closePanels} />
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Suche"
            onClick={() => {
              setIsSearchOpen(true);
              setIsMenuOpen(false);
            }}
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-colors",
              isDark
                ? "border-white/25 bg-white/10 text-white hover:bg-white/16"
                : "border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] text-[var(--color-deep-green)] hover:bg-[var(--color-soft-green)]",
            )}
          >
            <SearchIcon />
          </button>
          <Link
            href="/login"
            aria-label="Login"
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-colors",
              isDark
                ? "border-white/25 bg-white/10 text-white hover:bg-white/16"
                : "border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] text-[var(--color-deep-green)] hover:bg-[var(--color-soft-green)]",
            )}
          >
            <UserIcon />
          </Link>
        </div>
      </div>

      <div className={cn("mt-2 flex max-w-full items-center gap-3 overflow-hidden border-t pt-2", isDark ? "border-white/15" : "border-[var(--color-border-green-gray)]")}>
        <button
          type="button"
          aria-label={isMenuOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-panel"
          onClick={() => {
            setIsMenuOpen((previous) => {
              const next = !previous;
              if (next) setOpenGroup(null);
              return next;
            });
            setIsSearchOpen(false);
          }}
          className={cn(
            "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors",
            isDark
              ? "border-white/30 bg-white/10 text-white hover:bg-white/16"
              : "border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] text-[var(--color-deep-green)] hover:bg-[var(--color-soft-green)]",
          )}
        >
          <span aria-hidden="true" className="flex h-4 w-4 flex-col justify-between">
            <span className={cn("h-0.5 w-full rounded transition-transform", isDark ? "bg-white" : "bg-[var(--color-deep-green)]", isMenuOpen ? "translate-y-[3px] rotate-45" : "")} />
            <span className={cn("h-0.5 w-full rounded transition-opacity", isDark ? "bg-white" : "bg-[var(--color-deep-green)]", isMenuOpen ? "opacity-0" : "")} />
            <span className={cn("h-0.5 w-full rounded transition-transform", isDark ? "bg-white" : "bg-[var(--color-deep-green)]", isMenuOpen ? "-translate-y-[3px] -rotate-45" : "")} />
          </span>
          Menü
        </button>

        <span aria-hidden="true" className={cn("h-7 w-px shrink-0", isDark ? "bg-white/25" : "bg-[var(--color-border-green-gray)]")} />

        <nav aria-label="Schnellthemen mobil" className="min-w-0 max-w-full flex-1 overflow-x-auto overscroll-x-contain">
          <ul className="flex min-w-max items-center gap-2 pr-2">
            {desktopQuickLinks.map((item) => (
              <li key={`mobile-quick-${item.label}`}>
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-full px-3 whitespace-nowrap text-sm font-medium transition-colors",
                    isDark ? "text-white/92 hover:text-white" : "text-[var(--color-soft-graphite)] hover:text-[var(--color-deep-green)]",
                    isQuickLinkActive(item.href) &&
                      (isDark
                        ? "bg-white/18 text-white"
                        : "bg-[var(--color-soft-green)] text-[var(--color-deep-green)]"),
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isSearchOpen && typeof document !== "undefined"
        ? createPortal(
          <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-[rgba(6,16,11,0.44)] px-4 pt-24" role="dialog" aria-modal="true">
            <button
              type="button"
              aria-label="Suche schliessen"
              className="absolute inset-0"
              onClick={() => setIsSearchOpen(false)}
            />
            <div className="relative w-full max-w-md rounded-[16px] border border-[var(--color-border-green-gray)] bg-white p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-[var(--color-deep-green)]">Suche vorbereiten</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-soft-graphite)]">
                    Die Suche wird vorbereitet. Bis dahin finden Sie die wichtigsten Themen im Menü und im Ratgeber.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--color-border-green-gray)] text-[var(--color-deep-green)]"
                  aria-label="Suche schliessen"
                >
                  <CloseIcon />
                </button>
              </div>
              <Link href="/ratgeber" onClick={() => setIsSearchOpen(false)} className="scm-text-link scm-text-link-arrow mt-4 inline-flex min-h-11 items-center">
                Zum Ratgeber
              </Link>
            </div>
          </div>,
          document.body,
        )
        : null}

      {isMenuOpen && typeof document !== "undefined"
        ? createPortal(
          <aside
            id="mobile-navigation-panel"
            aria-label="Mobile Navigation"
            className="scm-slide-in-left fixed inset-0 z-[9999] flex h-[100dvh] w-full max-w-none flex-col overflow-x-hidden bg-[var(--color-warm-off-white)]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border-green-gray)] bg-white px-4 py-4">
              <MainLogo tone="light" onClick={closePanels} />
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Menü schliessen"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--color-border-green-gray)] bg-white text-[var(--color-deep-green)]"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
              <div className="mb-5 border border-[var(--color-border-green-gray)] bg-white p-3.5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-fresh-green)]">Schnellzugriff</p>
                <ul className="mt-2 grid gap-1">
                  {desktopQuickLinks.map((item) => (
                    <li key={`quick-${item.label}`}>
                      <Link href={item.href} onClick={closeMenu} className="scm-text-link scm-text-link-arrow inline-flex min-h-11 items-center text-sm font-semibold">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="divide-y divide-[var(--color-border-green-gray)] border border-[var(--color-border-green-gray)] bg-white">
                {mobileAccordionGroups.map((group) => {
                  const groupId = `mobile-${group.title.toLowerCase().replaceAll(" ", "-")}`;
                  const open = openGroup === group.title;
                  return (
                    <li key={group.title}>
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={groupId}
                        onClick={() => setOpenGroup((previous) => (previous === group.title ? null : group.title))}
                        className="flex min-h-14 w-full items-center justify-between gap-3 px-4 py-2 text-left"
                      >
                        <span className="text-base font-semibold text-[var(--color-deep-green)]">{group.title}</span>
                        <ChevronIcon open={open} />
                      </button>
                      {open ? (
                        <ul id={groupId} className="grid gap-1 border-t border-[var(--color-border-green-gray)] px-4 pb-3">
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

              <div className="mt-5 space-y-2">
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
                <a
                  href={`tel:${siteConfig.phoneTechnical}`}
                  onClick={closeMenu}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-[14px] border border-[var(--color-border-green-gray)] bg-white px-4 text-sm font-semibold text-[var(--color-deep-green)]"
                >
                  Anrufen
                </a>
              </div>

              <div className="mt-5 border border-[var(--color-border-green-gray)] bg-white p-3.5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-fresh-green)]">Login</p>
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-[12px] border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-3.5 text-sm font-semibold text-[var(--color-deep-green)]"
                >
                  Login
                </Link>
              </div>

              <div className="mt-5 border border-[var(--color-border-green-gray)] bg-white p-3.5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-fresh-green)]">Sprache</p>
                <LanguageSwitcher className="mt-2" />
              </div>

              <nav aria-label="Rechtliches" className="mt-5 grid gap-2">
                <Link href="/impressum" onClick={closeMenu} className="scm-text-link scm-text-link-arrow inline-flex min-h-11 items-center text-sm font-medium">
                  Impressum
                </Link>
                <Link href="/datenschutz" onClick={closeMenu} className="scm-text-link scm-text-link-arrow inline-flex min-h-11 items-center text-sm font-medium">
                  Datenschutz
                </Link>
              </nav>
            </div>
          </aside>,
          document.body,
        )
        : null}
    </div>
  );
}

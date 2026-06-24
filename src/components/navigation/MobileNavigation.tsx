"use client";

import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { desktopQuickLinks, mobileAccordionGroups } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function MobileNavigation({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const isDark = tone === "dark";

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenGroup(null);
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((previous) => !previous)}
        className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-3.5 text-sm font-semibold transition-colors ${
          isDark
            ? "border-white/30 bg-white/12 text-white hover:bg-white/18"
            : "border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] text-[var(--color-deep-green)] hover:bg-[var(--color-soft-green)]"
        }`}
      >
        <span aria-hidden="true" className="flex h-4 w-4 flex-col justify-between">
          <span className={`h-0.5 w-full rounded transition-transform ${isDark ? "bg-white" : "bg-[var(--color-deep-green)]"} ${isOpen ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-full rounded transition-opacity ${isDark ? "bg-white" : "bg-[var(--color-deep-green)]"} ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-full rounded transition-transform ${isDark ? "bg-white" : "bg-[var(--color-deep-green)]"} ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </span>
        Menü
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
          <>
            <button
              type="button"
              aria-label="Menü schliessen"
              onClick={closeMenu}
              className="fixed inset-0 z-[1100] bg-[rgba(8,17,13,0.4)]"
            />
            <aside
              id="mobile-navigation-panel"
              aria-label="Mobile Navigation"
              className="scm-slide-in-left fixed bottom-0 left-0 top-0 z-[1110] flex h-[100dvh] w-[100vw] flex-col border-r border-[var(--color-border-green-gray)] bg-[var(--color-warm-off-white)] shadow-[0_24px_55px_-24px_rgba(18,60,46,0.55)] md:w-[100vw] min-[1200px]:hidden"
            >
              <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border-green-gray)] bg-white px-4 py-4">
                <Image
                  src="/brand/scm-logo-green-transparent.png"
                  alt="SCM Baupartner"
                  width={186}
                  height={54}
                  className="pointer-events-none h-7 w-auto select-none"
                  draggable={false}
                />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border-green-gray)] bg-white px-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-deep-green)]"
                >
                  Schliessen
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
                <div className="mb-4 rounded-[16px] border border-[var(--color-border-green-gray)] bg-white p-3.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-fresh-green)]">Schnellzugriff</p>
                  <ul className="mt-2 grid gap-1">
                    {desktopQuickLinks.map((item) => (
                      <li key={`quick-${item.label}`}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="scm-text-link scm-text-link-arrow inline-flex min-h-11 items-center text-sm font-semibold"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="divide-y divide-[var(--color-border-green-gray)] rounded-[22px] border border-[var(--color-border-green-gray)] bg-white">
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
                          <span aria-hidden="true" className="text-lg text-[var(--color-soft-graphite)]">
                            {open ? "−" : "+"}
                          </span>
                        </button>
                        {open ? (
                          <ul id={groupId} className="grid gap-1 border-t border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] p-3">
                            {group.items.map((item) => (
                              <li key={`${group.title}-${item.label}`}>
                                <Link
                                  href={item.href}
                                  onClick={closeMenu}
                                  className="flex min-h-11 items-center gap-2 rounded-[12px] border border-[var(--color-border-green-gray)] bg-white px-3 py-2 text-sm text-[var(--color-soft-graphite)]"
                                >
                                  <span aria-hidden="true" className="text-[var(--color-fresh-green)]">
                                    ›
                                  </span>
                                  {item.label}
                                </Link>
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
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-[14px] border border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)] px-4 text-sm font-semibold text-white"
                  >
                    Offerte anfragen
                  </Link>
                  <Link
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-[14px] border border-[var(--color-border-green-gray)] bg-white px-4 text-sm font-semibold text-[var(--color-deep-green)]"
                  >
                    WhatsApp schreiben
                  </Link>
                  <Link
                    href={`tel:${siteConfig.phoneTechnical}`}
                    onClick={closeMenu}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-[14px] border border-[var(--color-border-green-gray)] bg-white px-4 text-sm font-semibold text-[var(--color-deep-green)]"
                  >
                    Anrufen
                  </Link>
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-[14px] border border-[var(--color-border-green-gray)] bg-white px-4 text-sm font-semibold text-[var(--color-deep-green)]"
                  >
                    Login
                  </Link>
                </div>

                <div className="mt-5 rounded-[16px] border border-[var(--color-border-green-gray)] bg-white p-3.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-fresh-green)]">Sprache</p>
                  <LanguageSwitcher className="mt-2" />
                </div>

                <nav aria-label="Rechtliches" className="mt-5 grid gap-2">
                  <Link
                    href="/impressum"
                    onClick={closeMenu}
                    className="inline-flex min-h-11 items-center rounded-[12px] border border-[var(--color-border-green-gray)] bg-white px-3.5 text-sm font-medium text-[var(--color-deep-green)]"
                  >
                    Impressum
                  </Link>
                  <Link
                    href="/datenschutz"
                    onClick={closeMenu}
                    className="inline-flex min-h-11 items-center rounded-[12px] border border-[var(--color-border-green-gray)] bg-white px-3.5 text-sm font-medium text-[var(--color-deep-green)]"
                  >
                    Datenschutz
                  </Link>
                </nav>
              </div>
            </aside>
          </>,
          document.body,
        )
        : null}
    </div>
  );
}

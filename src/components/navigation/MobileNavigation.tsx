"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useState } from "react";
import { mobileNavigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

const quickActions = [
  { href: "/offerte", label: "Kostenlose Offerte", primary: true },
  { href: siteConfig.whatsappUrl, label: "WhatsApp schreiben", primary: false },
  { href: `tel:${siteConfig.phoneTechnical}`, label: "Anrufen", primary: false },
  { href: "/login", label: "Login", primary: false },
] as const;

export function MobileNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && pathname === "/" && typeof window !== "undefined") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative xl:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex min-h-11 cursor-pointer items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3 py-2 text-sm font-semibold text-[var(--color-deep-green)]"
      >
        <span aria-hidden="true" className="flex h-4 w-4 flex-col justify-between">
          <span
            className={`h-0.5 w-full rounded bg-[var(--color-deep-green)] transition-transform ${
              isOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-full rounded bg-[var(--color-deep-green)] transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-full rounded bg-[var(--color-deep-green)] transition-transform ${
              isOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </span>
        <span>{isOpen ? "Schliessen" : "Menü"}</span>
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Menü schliessen"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[90] bg-[rgba(10,20,15,0.24)] backdrop-blur-[1.5px]"
          />
          <div
            id="mobile-navigation-panel"
            className="fixed inset-x-3 bottom-3 top-[76px] z-[100] overflow-hidden rounded-[28px] border border-[var(--color-border-green-gray)] bg-[var(--color-warm-off-white)] shadow-[0_26px_70px_-28px_rgba(18,60,46,0.55)] sm:inset-x-6"
          >
            <div className="flex h-full flex-col overflow-hidden">
              <div className="flex items-start justify-between gap-3 border-b border-[var(--color-border-green-gray)] bg-white/85 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-deep-green)]">SCM Baupartner</p>
                  <p className="mt-0.5 text-xs text-[var(--color-soft-graphite)]">Zürich und Umgebung</p>
                  <LanguageSwitcher className="mt-2" />
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-border-green-gray)] bg-white px-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-deep-green)]"
                >
                  Schliessen
                </button>
              </div>

              <nav aria-label="Mobile Hauptnavigation" className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
                <ul className="divide-y divide-[var(--color-border-green-gray)] rounded-[22px] border border-[var(--color-border-green-gray)] bg-white">
                  {mobileNavigationItems.map((item, index) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={(event) => handleNavigationClick(event, item.href)}
                        className="flex min-h-14 items-center justify-between gap-3 px-4 py-2 transition-colors hover:bg-[var(--color-mist-green)]"
                      >
                        <span className="text-xs font-semibold text-[var(--color-fresh-green)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="mr-auto text-lg font-semibold text-[var(--color-deep-green)]">{item.label}</span>
                        <span aria-hidden="true" className="text-[var(--color-soft-graphite)]">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-[var(--color-border-green-gray)] pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">Direkt</p>
                  <div className="grid gap-2.5">
                    {quickActions.map((action) => {
                      const external = action.href.startsWith("http") || action.href.startsWith("tel:");
                      return (
                        <Link
                          key={action.label}
                          href={action.href}
                          onClick={() => setIsOpen(false)}
                          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                          className={`flex min-h-12 items-center justify-between rounded-[var(--radius-md)] border px-4 text-sm font-semibold transition-colors ${
                            action.primary
                              ? "border-[var(--color-fresh-green)] bg-[var(--color-fresh-green)] text-white hover:bg-[var(--color-active-green)]"
                              : "border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] text-[var(--color-deep-green)] hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-soft-green)]"
                          }`}
                        >
                          {action.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

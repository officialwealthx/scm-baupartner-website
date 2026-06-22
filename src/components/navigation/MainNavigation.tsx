"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
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
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (navWrapperRef.current && !navWrapperRef.current.contains(target)) {
        setOpenMenu(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("touchstart", handleOutsideClick, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  const handleHomeClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" && typeof window !== "undefined") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    setOpenMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-green-gray)] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/78">
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-3 px-4 py-3 sm:px-6 xl:px-8">
        <Link
          href="/"
          onClick={handleHomeClick}
          aria-label={`${siteConfig.name} — zur Startseite`}
          className="group flex min-w-0 cursor-pointer select-none items-center"
        >
          <Image
            src="/brand/scm-logo-green-transparent.png"
            alt="SCM Baupartner"
            width={260}
            height={72}
            priority
            draggable={false}
            className="h-8 w-auto shrink-0 cursor-pointer select-none sm:h-9"
          />
        </Link>

        <div ref={navWrapperRef} className="hidden min-[1180px]:flex min-[1180px]:items-center min-[1180px]:gap-2">
          <nav
            aria-label="Hauptnavigation"
            className="rounded-full border border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] px-1.5 py-1"
          >
            <ul className="flex items-center gap-0">
              {desktopNavigationItems.map((item) => {
                const normalized = normalizePath(item.href);
                const isHashLink = item.href.includes("#");
                const isActive = isHashLink ? false : normalized === "/" ? pathname === "/" : pathname.startsWith(normalized);
                const hasChildren = Boolean(item.children?.length);
                const isOpen = openMenu === item.label;
                const menuId = `mega-${item.label.toLowerCase().replaceAll(" ", "-")}`;
                return (
                  <li key={item.label} className="relative">
                    {hasChildren ? (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={menuId}
                        onMouseEnter={() => setOpenMenu(item.label)}
                        onFocus={() => setOpenMenu(item.label)}
                        onClick={() => setOpenMenu((previous) => (previous === item.label ? null : item.label))}
                        className={cn(
                          "inline-flex h-10 cursor-pointer items-center whitespace-nowrap rounded-full px-3 text-[0.84rem] font-medium leading-none transition-colors xl:px-3.5",
                          isActive || isOpen
                            ? "bg-white text-[var(--color-deep-green)] ring-1 ring-[var(--color-border-green-gray)]"
                            : "text-[var(--color-soft-graphite)] hover:text-[var(--color-deep-green)]",
                        )}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setOpenMenu(null)}
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
                    )}

                    {hasChildren && isOpen && (
                      <div
                        id={menuId}
                        role="menu"
                        onMouseLeave={() => setOpenMenu(null)}
                        className="absolute left-1/2 top-[calc(100%+0.65rem)] z-50 w-[min(48rem,72vw)] -translate-x-1/2 rounded-[1.15rem] border border-[var(--color-border-green-gray)] bg-white p-5 shadow-[0_28px_60px_-32px_rgba(18,60,46,0.42)]"
                      >
                        <div className="mb-4 border-b border-[var(--color-border-green-gray)] pb-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fresh-green)]">{item.label}</p>
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {item.children?.map((child) => (
                            <Link
                              key={`${item.label}-${child.label}`}
                              href={child.href}
                              onClick={() => setOpenMenu(null)}
                              role="menuitem"
                              className="rounded-[0.85rem] border border-[var(--color-border-green-gray)] bg-[var(--color-warm-off-white)] px-3.5 py-3 transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-mist-green)]"
                            >
                              <p className="text-sm font-semibold text-[var(--color-deep-green)]">{child.label}</p>
                              {child.description && <p className="mt-1 text-xs leading-relaxed text-[var(--color-soft-graphite)]">{child.description}</p>}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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
            Offerte anfragen
          </Button>
        </div>

        <div className="min-[1180px]:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

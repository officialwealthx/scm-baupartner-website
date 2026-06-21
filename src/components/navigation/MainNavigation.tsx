import Link from "next/link";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { MobileNavigation } from "./MobileNavigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/Button";

export function MainNavigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border-green-gray)] bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — Startseite`}
          className="group flex min-w-0 items-center gap-2"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.6rem] bg-[var(--color-deep-green)] text-xs font-bold tracking-tight text-white transition-colors group-hover:bg-[var(--color-fresh-green)]"
          >
            SCM
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-sm font-semibold tracking-wide text-[var(--color-deep-green)] sm:text-base">
              {siteConfig.name}
            </span>
            <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[var(--color-soft-graphite)] sm:block">
              Surface Studio
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Hauptnavigation">
          <ul className="flex items-center gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium text-[var(--color-soft-graphite)] transition-colors hover:bg-[var(--color-mist-green)] hover:text-[var(--color-deep-green)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <span aria-hidden="true" className="h-6 w-px bg-[var(--color-border-green-gray)]" />
          <Button href="/login" variant="ghost">
            Kundenlogin
          </Button>
          <Button href="/offerte" variant="primary">
            Offerte anfragen
          </Button>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}

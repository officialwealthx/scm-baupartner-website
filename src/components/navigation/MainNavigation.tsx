import Link from "next/link";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { MobileNavigation } from "./MobileNavigation";
import { Button } from "@/components/ui/Button";

export function MainNavigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border-green-gray)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0 text-sm font-semibold tracking-wide text-[var(--color-deep-green)] sm:text-base">
          {siteConfig.name}
        </Link>

        <nav className="hidden md:block" aria-label="Hauptnavigation">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm font-medium text-[var(--color-soft-graphite)] hover:text-[var(--color-deep-green)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="/offerte" variant="primary">
            Offerte anfragen
          </Button>
          <Button href="/login" variant="secondary">
            Kundenlogin
          </Button>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}

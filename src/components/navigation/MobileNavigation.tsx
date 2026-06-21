import Link from "next/link";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

const quickActions = [
  { href: "/offerte", label: "Offerte anfragen" },
  { href: siteConfig.whatsappUrl, label: "WhatsApp schreiben" },
  { href: `tel:${siteConfig.phoneTechnical}`, label: "Anrufen" },
  { href: "/login", label: "Login" },
] as const;

export function MobileNavigation() {
  return (
    <details className="group relative xl:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3 py-2 text-sm font-semibold text-[var(--color-deep-green)] [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true" className="flex h-4 w-4 flex-col justify-between">
          <span className="h-0.5 w-full rounded bg-[var(--color-deep-green)] transition-transform group-open:translate-y-[3px] group-open:rotate-45" />
          <span className="h-0.5 w-full rounded bg-[var(--color-deep-green)] transition-opacity group-open:opacity-0" />
          <span className="h-0.5 w-full rounded bg-[var(--color-deep-green)] transition-transform group-open:-translate-y-[3px] group-open:-rotate-45" />
        </span>
        <span className="group-open:hidden">Menü</span>
        <span className="hidden group-open:inline">Schliessen</span>
      </summary>

      <div className="fixed inset-x-3 bottom-3 top-20 z-50 overflow-hidden rounded-[1.7rem] border border-[var(--color-border-green-gray)] bg-white shadow-[0_26px_70px_-28px_rgba(18,60,46,0.55)] sm:inset-x-6 sm:top-22">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-deep-green)]">
              Navigation
            </p>
            <LanguageSwitcher />
          </div>

          <nav aria-label="Mobile Hauptnavigation" className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
            <ul className="space-y-1.5">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-12 items-center justify-between rounded-[var(--radius-md)] border border-transparent px-4 text-base font-medium text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-border-green-gray)] hover:bg-[var(--color-mist-green)]"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="text-[var(--color-fresh-green)]">
                      ↗
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
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="flex min-h-12 items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-[var(--color-mist-green)] px-4 text-sm font-semibold text-[var(--color-deep-green)] transition-colors hover:border-[var(--color-fresh-green)] hover:bg-[var(--color-soft-green)]"
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
    </details>
  );
}

import Link from "next/link";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

const quickActions = [
  { href: "/offerte", label: "Offerte anfragen", tone: "primary" as const },
  { href: siteConfig.whatsappUrl, label: "WhatsApp schreiben", tone: "accent" as const },
  { href: `tel:${siteConfig.phoneTechnical}`, label: "Anrufen", tone: "surface" as const },
  { href: "/login", label: "Kundenlogin", tone: "surface" as const },
];

const toneClasses = {
  primary: "bg-[var(--color-deep-green)] text-white",
  accent: "bg-[var(--color-fresh-green)] text-white",
  surface:
    "border border-[var(--color-border-green-gray)] bg-white text-[var(--color-deep-green)]",
};

export function MobileNavigation() {
  return (
    <details className="group relative lg:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3 py-2 text-sm font-semibold text-[var(--color-deep-green)] [&::-webkit-details-marker]:hidden">
        <span
          aria-hidden="true"
          className="flex h-4 w-4 flex-col justify-between"
        >
          <span className="h-0.5 w-full rounded bg-[var(--color-deep-green)]" />
          <span className="h-0.5 w-full rounded bg-[var(--color-deep-green)]" />
          <span className="h-0.5 w-full rounded bg-[var(--color-deep-green)]" />
        </span>
        Menü
      </summary>
      <div className="absolute right-0 z-50 mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-4 shadow-[var(--shadow-soft)]">
        <nav aria-label="Mobile Hauptnavigation">
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center rounded-[var(--radius-md)] px-3 text-sm font-medium text-[var(--color-soft-graphite)] hover:bg-[var(--color-mist-green)] hover:text-[var(--color-deep-green)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fresh-green)]">
          Schnellkontakt
        </p>
        <div className="grid gap-2">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={`flex min-h-11 items-center justify-center rounded-[var(--radius-md)] px-3 text-sm font-semibold transition-colors ${toneClasses[action.tone]}`}
            >
              {action.label}
            </Link>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border-green-gray)] pt-4">
          <span className="text-xs font-medium text-[var(--color-soft-graphite)]">Sprache</span>
          <LanguageSwitcher />
        </div>
      </div>
    </details>
  );
}

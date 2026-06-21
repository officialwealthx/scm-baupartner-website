import Link from "next/link";
import { navigationItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

const quickActions = [
  {
    href: "/offerte",
    label: "Offerte anfragen",
    hint: "Projekt starten",
    tone: "primary" as const,
  },
  {
    href: siteConfig.whatsappUrl,
    label: "WhatsApp schreiben",
    hint: "Schnelle Antwort",
    tone: "accent" as const,
  },
  {
    href: `tel:${siteConfig.phoneTechnical}`,
    label: "Anrufen",
    hint: siteConfig.phoneDisplay,
    tone: "surface" as const,
  },
  {
    href: "/login",
    label: "Kundenlogin",
    hint: "Portal · in Vorbereitung",
    tone: "surface" as const,
  },
];

const toneClasses = {
  primary: "bg-[var(--color-fresh-green)] text-white",
  accent: "bg-[var(--color-deep-green)] text-white",
  surface:
    "border border-[var(--color-border-green-gray)] bg-white text-[var(--color-deep-green)]",
};

const hintTone = {
  primary: "text-white/80",
  accent: "text-white/75",
  surface: "text-[var(--color-soft-graphite)]",
};

export function MobileNavigation() {
  return (
    <details className="group relative lg:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] bg-white px-3 py-2 text-sm font-semibold text-[var(--color-deep-green)] [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true" className="flex h-4 w-4 flex-col justify-between">
          <span className="h-0.5 w-full rounded bg-[var(--color-deep-green)] transition-transform group-open:translate-y-[3px] group-open:rotate-45" />
          <span className="h-0.5 w-full rounded bg-[var(--color-deep-green)] transition-opacity group-open:opacity-0" />
          <span className="h-0.5 w-full rounded bg-[var(--color-deep-green)] transition-transform group-open:-translate-y-[3px] group-open:-rotate-45" />
        </span>
        <span className="group-open:hidden">Menü</span>
        <span className="hidden group-open:inline">Schliessen</span>
      </summary>

      <div className="absolute right-0 z-50 mt-3 w-[min(21rem,calc(100vw-2rem))] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-green-gray)] bg-white shadow-[var(--shadow-soft)]">
        {/* Command panel header */}
        <div className="flex items-center justify-between gap-3 border-b border-[var(--color-border-green-gray)] bg-[var(--color-porcelain-surface)] px-4 py-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-deep-green)]">
            {siteConfig.name}
          </span>
          <LanguageSwitcher />
        </div>

        <nav aria-label="Mobile Hauptnavigation" className="px-3 py-3">
          <ul className="space-y-0.5">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center justify-between rounded-[var(--radius-md)] px-3 text-sm font-medium text-[var(--color-soft-graphite)] hover:bg-[var(--color-mist-green)] hover:text-[var(--color-deep-green)]"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-[var(--color-fresh-green)]">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-[var(--color-border-green-gray)] px-3 py-3">
          <p className="mb-2 px-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-fresh-green)]">
            Schnellkontakt
          </p>
          <div className="grid gap-2">
            {quickActions.map((action) => {
              const external = action.href.startsWith("http") || action.href.startsWith("tel:");
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={`flex min-h-11 items-center justify-between gap-3 rounded-[var(--radius-md)] px-3.5 py-2 text-sm font-semibold transition-colors ${toneClasses[action.tone]}`}
                >
                  <span>{action.label}</span>
                  <span className={`text-[0.65rem] font-medium ${hintTone[action.tone]}`}>
                    {action.hint}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </details>
  );
}

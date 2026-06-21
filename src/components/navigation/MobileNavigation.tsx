import Link from "next/link";
import { navigationItems, primaryCtas } from "@/content/navigation";

export function MobileNavigation() {
  return (
    <details className="md:hidden">
      <summary className="cursor-pointer rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] px-3 py-2 text-sm font-medium text-[var(--color-deep-green)]">
        Menü
      </summary>
      <div className="mt-3 rounded-[var(--radius-lg)] border border-[var(--color-border-green-gray)] bg-white p-4 shadow-[var(--shadow-soft)]">
        <nav aria-label="Mobile Hauptnavigation">
          <ul className="space-y-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm font-medium text-[var(--color-soft-graphite)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 grid gap-2">
          {primaryCtas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className="rounded-[var(--radius-md)] border border-[var(--color-border-green-gray)] px-3 py-2 text-sm font-semibold text-[var(--color-deep-green)]"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}

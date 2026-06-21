export const desktopNavigationItems = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/projekte", label: "Projekte" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/portal", label: "Portal" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const mobileNavigationItems = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/projekte", label: "Projekte" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/portal", label: "Portal" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const primaryCtas = [
  { href: "/offerte", label: "Kostenlose Offerte" },
  { href: "/login", label: "Login" },
] as const;

// Language switch placeholder. DE is active; EN/FR/IT are planned.
export const languages = [
  { code: "DE", active: true },
  { code: "EN", active: false },
  { code: "FR", active: false },
  { code: "IT", active: false },
] as const;

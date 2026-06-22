export type NavigationLeaf = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationItem = NavigationLeaf & {
  children?: readonly NavigationLeaf[];
};

export const desktopNavigationItems: readonly NavigationItem[] = [
  { href: "/", label: "Startseite" },
  {
    href: "/leistungen",
    label: "Leistungen",
    children: [
      { href: "/leistungen", label: "Malerarbeiten", description: "Innenräume und Oberflächen sauber umgesetzt." },
      { href: "/leistungen", label: "Gipserarbeiten und Verputz", description: "Glatte Flächen mit präziser Vorarbeit." },
      { href: "/leistungen", label: "Nassbau und Trockenbau", description: "Ausbauarbeiten strukturiert geplant." },
      { href: "/leistungen", label: "Fassadenarbeiten", description: "Aussenflächen schützen und erhalten." },
      { href: "/leistungen", label: "Renovationen", description: "Schrittweise erneuern ohne unnötiges Chaos." },
      { href: "/leistungen", label: "Ausbesserungen und Reparaturen", description: "Schäden rasch und sauber beheben." },
      { href: "/leistungen", label: "Schädenbehandlungen", description: "Schimmel und Oberflächenschäden fachgerecht behandeln." },
      { href: "/leistungen", label: "Graffitientfernung und Graffitischutz", description: "Reinigung und Schutz aus einer Hand." },
      { href: "/leistungen", label: "Spritzlackierungen", description: "Ruhige, gleichmässige Finishs." },
      { href: "/leistungen", label: "Unterhaltsarbeiten", description: "Regelmässige Pflege für dauerhafte Qualität." },
      { href: "/leistungen", label: "Alle Leistungen ansehen", description: "Zur gesamten Leistungsübersicht." },
    ],
  },
  {
    href: "/projekte",
    label: "Projekte",
    children: [
      { href: "/projekte", label: "Projekt Einblicke", description: "Arbeitsweise und Resultate kompakt erklärt." },
      { href: "/projekte", label: "Vorher Nachher", description: "Veränderungen nachvollziehbar dokumentiert." },
      { href: "/projekte", label: "Wohnungen und Innenräume", description: "Innenarbeiten strukturiert umgesetzt." },
      { href: "/projekte", label: "Fassaden", description: "Aussenarbeiten mit Fokus auf Werterhalt." },
      { href: "/projekte", label: "Treppenhäuser", description: "Belastete Bereiche sauber erneuert." },
      { href: "/projekte", label: "Gewerbeobjekte", description: "Koordinierte Ausführung im laufenden Betrieb." },
    ],
  },
  {
    href: "/ratgeber",
    label: "Ratgeber",
    children: [
      { href: "/ratgeber", label: "Malerarbeiten", description: "Tipps für Vorbereitung und saubere Resultate." },
      { href: "/ratgeber", label: "Gipserarbeiten und Verputz", description: "Wichtige Punkte für glatte Oberflächen." },
      { href: "/ratgeber", label: "Fassaden", description: "Schutz, Pflege und langfristiger Werterhalt." },
      { href: "/ratgeber", label: "Renovationen", description: "Abläufe und Prioritäten verständlich erklärt." },
      { href: "/ratgeber", label: "Schimmel und Schäden", description: "Erkennen, einordnen und richtig handeln." },
      { href: "/ratgeber", label: "Graffiti und Schutz", description: "Reinigung und Schutzsysteme im Vergleich." },
      { href: "/ratgeber", label: "Unterhalt und Pflege", description: "Regelmässige Massnahmen für stabile Qualität." },
      { href: "/ratgeber", label: "Vorbereitung und Ablauf", description: "Von Anfrage bis Übergabe den Überblick behalten." },
    ],
  },
  {
    href: "/portal",
    label: "Portal und App",
    children: [
      { href: "/portal", label: "Kundenportal", description: "Zentrale Projektübersicht in Vorbereitung." },
      { href: "/portal", label: "App Vision", description: "Geplanter Zugriff für Smartphone und Tablet." },
      { href: "/portal", label: "Projektstatus", description: "Fortschritte und nächste Schritte auf einen Blick." },
      { href: "/portal", label: "Dokumente und Fotos", description: "Wichtige Unterlagen geordnet bereitgestellt." },
      { href: "/portal", label: "Offerten und Freigaben", description: "Entscheide nachvollziehbar dokumentieren." },
      { href: "/portal", label: "Zahlungen und Quittungen", description: "Transparente Projektunterlagen vorbereitet." },
      { href: "/login", label: "Login", description: "Direkter Zugang zum Portalbereich." },
    ],
  },
  {
    href: "/ueber-uns",
    label: "Unternehmen",
    children: [
      { href: "/ueber-uns", label: "Über SCM Baupartner", description: "Fachunternehmen mit Erfahrung seit 1981." },
      { href: "/ueber-uns", label: "Team", description: "Klare Rollen und verlässliche Umsetzung." },
      { href: "/ueber-uns", label: "Qualität und Sicherheit", description: "Saubere Prozesse und kontrollierte Ausführung." },
      { href: "/ueber-uns", label: "Versicherungsschutz", description: "Wird nach Abschluss der Police ergänzt." },
      { href: "/ueber-uns", label: "Karriere", description: "Perspektiven für Fachkräfte und Nachwuchs." },
      { href: "/ueber-uns", label: "Lehrstellen", description: "Einstieg ins Handwerk mit Struktur." },
    ],
  },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const mobileNavigationItems: readonly NavigationItem[] = desktopNavigationItems;

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

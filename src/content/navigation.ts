export type NavigationLeaf = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationGroup = {
  title: string;
  href: string;
  items: readonly NavigationLeaf[];
};

export const desktopQuickLinks: readonly NavigationLeaf[] = [
  { href: "/ablauf", label: "Ablauf" },
  { href: "/#einsatzgebiete", label: "Einsatzgebiete" },
  { href: "/ueber-uns", label: "Unsere Geschichte" },
  { href: "/ueber-uns", label: "Qualität" },
] as const;

export const menuPanelGroups: readonly NavigationGroup[] = [
  {
    title: "Leistungen",
    href: "/leistungen",
    items: [
      { href: "/leistungen", label: "Malerarbeiten" },
      { href: "/leistungen", label: "Gipserarbeiten und Verputz" },
      { href: "/leistungen", label: "Nassbau und Trockenbau" },
      { href: "/leistungen", label: "Fassadenarbeiten" },
      { href: "/leistungen", label: "Renovationen" },
      { href: "/leistungen", label: "Ausbesserungen und Reparaturen" },
      { href: "/leistungen", label: "Schädenbehandlungen" },
      { href: "/leistungen", label: "Graffitientfernung und Graffitischutz" },
      { href: "/leistungen", label: "Spritzlackierungen" },
      { href: "/leistungen", label: "Unterhaltsarbeiten" },
      { href: "/leistungen", label: "Alle Leistungen ansehen" },
    ],
  },
  {
    title: "Projekte",
    href: "/projekte",
    items: [
      { href: "/projekte", label: "Projekt Einblicke" },
      { href: "/projekte", label: "Vorher Nachher" },
      { href: "/projekte", label: "Wohnungen und Innenräume" },
      { href: "/projekte", label: "Fassaden" },
      { href: "/projekte", label: "Treppenhäuser" },
      { href: "/projekte", label: "Gewerbeobjekte" },
    ],
  },
  {
    title: "Ratgeber",
    href: "/ratgeber",
    items: [
      { href: "/ratgeber", label: "Malerarbeiten" },
      { href: "/ratgeber", label: "Gipserarbeiten und Verputz" },
      { href: "/ratgeber", label: "Fassaden" },
      { href: "/ratgeber", label: "Renovationen" },
      { href: "/ratgeber", label: "Schimmel und Schäden" },
      { href: "/ratgeber", label: "Graffiti und Schutz" },
      { href: "/ratgeber", label: "Unterhalt und Pflege" },
      { href: "/ratgeber", label: "Vorbereitung und Ablauf" },
    ],
  },
  {
    title: "Portal und App",
    href: "/portal",
    items: [
      { href: "/portal", label: "Kundenportal" },
      { href: "/portal", label: "App Vision" },
      { href: "/portal", label: "Projektstatus" },
      { href: "/portal", label: "Dokumente und Fotos" },
      { href: "/portal", label: "Offerten und Freigaben" },
      { href: "/portal", label: "Zahlungen und Quittungen" },
      { href: "/login", label: "Login" },
    ],
  },
  {
    title: "Unternehmen",
    href: "/ueber-uns",
    items: [
      { href: "/ueber-uns", label: "Über SCM Baupartner" },
      { href: "/ueber-uns", label: "Unsere Geschichte" },
      { href: "/ueber-uns", label: "Team" },
      { href: "/ueber-uns", label: "Qualität und Sicherheit" },
      { href: "/ueber-uns", label: "Versicherungsschutz in Vorbereitung" },
      { href: "/ueber-uns", label: "Karriere" },
      { href: "/ueber-uns", label: "Lehrstellen" },
    ],
  },
  {
    title: "Kontakt",
    href: "/kontakt",
    items: [
      { href: "/kontakt", label: "Kontakt" },
      { href: "/offerte", label: "Offerte anfragen" },
      { href: "https://wa.me/41764691418", label: "WhatsApp schreiben" },
      { href: "tel:+41764691418", label: "Anrufen" },
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
  },
] as const;

export const mobileAccordionGroups: readonly NavigationGroup[] = menuPanelGroups;

export const primaryCtas = [
  { href: "/offerte", label: "Offerte anfragen" },
  { href: "/login", label: "Login" },
] as const;

export const languages = [
  { code: "DE", active: true },
  { code: "EN", active: false },
  { code: "FR", active: false },
  { code: "IT", active: false },
] as const;

export const serviceGroups = [
  {
    title: "Oberflächen und Farbe",
    description: "Saubere Innenflächen, präzise Farbarbeit und feine Lackoberflächen.",
    tags: ["Innen", "Farbe", "Lack"],
    items: ["Malerarbeiten", "Spritzlackierung", "Innenräume"],
  },
  {
    title: "Fassade und Schutz",
    description: "Schutz, Pflege und Werterhalt für Aussenflächen und Fassaden.",
    tags: ["Aussen", "Schutz", "Werterhalt"],
    items: [
      "Fassadenarbeiten",
      "Graffitischutz und Graffitientfernung",
      "Schimmelbehandlung",
    ],
  },
  {
    title: "Renovation und Ausbesserung",
    description: "Renovationen und gezielte Reparaturen für Räume mit Geschichte.",
    tags: ["Renovation", "Gips", "Reparatur"],
    items: ["Renovationen", "Gipserarbeiten", "Ausbesserungen und Reparaturen"],
  },
] as const;

export const footerServices = [
  "Malerarbeiten",
  "Gipserarbeiten",
  "Fassadenarbeiten",
  "Graffitischutz und Graffitientfernung",
  "Schimmelbehandlung",
  "Spritzlackierung",
  "Renovationen",
  "Innenräume",
  "Ausbesserungen und Reparaturen",
] as const;

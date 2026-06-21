export const regionGroups = {
  main: "Zürich und Umgebung",
  expanded: ["Zug", "Schwyz", "Winterthur", "Schaffhausen", "Aargau", "Aarau"],
} as const;

export const regionPins = [
  { name: "Zürich", top: "49%", left: "50%", primary: true },
  { name: "Zug", top: "63%", left: "58%" },
  { name: "Schwyz", top: "74%", left: "62%" },
  { name: "Winterthur", top: "35%", left: "63%" },
  { name: "Schaffhausen", top: "18%", left: "64%" },
  { name: "Aargau", top: "52%", left: "32%" },
] as const;

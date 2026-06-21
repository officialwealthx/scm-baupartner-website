export const regionGroups = {
  main: "Zürich und Umgebung",
  expanded: ["Winterthur", "Schaffhausen", "Aargau", "Zug", "Schwyz", "Basel"],
} as const;

export const regionPins = [
  { name: "Zürich", top: "52%", left: "56%", primary: true },
  { name: "Winterthur", top: "40%", left: "63%", primary: false },
  { name: "Schaffhausen", top: "24%", left: "66%", primary: false },
  { name: "Aargau", top: "52%", left: "40%", primary: false },
  { name: "Zug", top: "64%", left: "61%", primary: false },
  { name: "Schwyz", top: "74%", left: "66%", primary: false },
  { name: "Basel", top: "45%", left: "23%", primary: false },
] as const;

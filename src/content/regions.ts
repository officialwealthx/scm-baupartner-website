export const regionGroups = {
  main: "Zürich und Umgebung",
  expanded: ["Winterthur", "Aargau", "Zug", "Schwyz", "Basel"],
} as const;

export const servedRegions = [regionGroups.main, ...regionGroups.expanded] as const;

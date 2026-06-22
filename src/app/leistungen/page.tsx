import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Leistungen", path: "/leistungen", noIndex: true });

export default function LeistungenPage() {
  return (
    <PlaceholderPage
      title="Leistungen"
      description="Malerarbeiten Zürich, Gipserarbeiten Zürich, Fassadenarbeiten Zürich, Renovation Zürich sowie Ausbesserungen, Graffitientfernung, Graffitischutz, Schimmelbehandlung, Spritzlackierung und Verputz."
    />
  );
}

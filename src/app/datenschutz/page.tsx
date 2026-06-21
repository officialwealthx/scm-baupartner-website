import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Datenschutz", path: "/datenschutz" });

export default function DatenschutzPage() {
  return <PlaceholderPage title="Datenschutz" description="Platzhalterseite für die finale Datenschutzerklärung." />;
}

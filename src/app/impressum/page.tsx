import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Impressum", path: "/impressum" });

export default function ImpressumPage() {
  return <PlaceholderPage title="Impressum" description="Rechtliche Platzhalterseite für die finale juristische Ausgestaltung." />;
}

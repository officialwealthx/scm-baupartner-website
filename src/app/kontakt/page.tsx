import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Kontakt", path: "/kontakt" });

export default function KontaktPage() {
  return <PlaceholderPage title="Kontakt" description="Kontaktstruktur für Offertanfragen und direkte Projektabstimmung." />;
}

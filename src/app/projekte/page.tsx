import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Projekte", path: "/projekte" });

export default function ProjektePage() {
  return <PlaceholderPage title="Projekte" description="Platzhalter für zukünftige Projekt- und Surface-Einblicke ohne erfundene Referenzen." />;
}

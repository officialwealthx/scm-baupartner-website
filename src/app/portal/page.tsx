import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Portal", path: "/portal", noIndex: true });

export default function PortalPage() {
  return <PlaceholderPage title="Portal" description="Das Portal ist geplant und wird als digitale Projektkommunikation Schritt für Schritt aufgebaut." />;
}

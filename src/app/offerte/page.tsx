import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Offerte anfragen", path: "/offerte", noIndex: true });

export default function OffertePage() {
  return <PlaceholderPage title="Offerte anfragen" description="Platzhalterseite für den späteren Offertprozess ohne Preisangaben auf der Startseite." />;
}

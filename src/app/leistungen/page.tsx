import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Leistungen", path: "/leistungen" });

export default function LeistungenPage() {
  return <PlaceholderPage title="Leistungen" description="Strukturseite für Service-Detailbereiche von SCM Baupartner." />;
}

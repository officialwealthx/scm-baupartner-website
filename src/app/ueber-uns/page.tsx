import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Über uns", path: "/ueber-uns", noIndex: true });

export default function UeberUnsPage() {
  return <PlaceholderPage title="Über uns" description="Platzhalterseite für Unternehmensdarstellung mit realen, verifizierten Inhalten." />;
}

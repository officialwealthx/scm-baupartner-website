import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Portal Preview", path: "/portal" });

export default function PortalPage() {
  return <PlaceholderPage title="Kundenportal Preview" description="Das Kundenportal ist geplant und wird als zukünftige digitale Projektkommunikation aufgebaut." />;
}

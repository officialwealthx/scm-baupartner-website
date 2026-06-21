import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Kundenlogin", path: "/login" });

export default function LoginPage() {
  return <PlaceholderPage title="Kundenlogin" description="Platzhalter für den zukünftigen Zugriff auf das geplante Kundenportal." />;
}

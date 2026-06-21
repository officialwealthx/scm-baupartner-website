import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Login", path: "/login" });

export default function LoginPage() {
  return <PlaceholderPage title="Login" description="Platzhalter für den zukünftigen Zugriff auf das geplante Kundenportal." />;
}

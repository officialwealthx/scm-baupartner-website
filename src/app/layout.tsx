import type { Metadata } from "next";
import { BaseLayout } from "@/components/layout/BaseLayout";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { buildMetadata } from "@/lib/seo";
import { buildOrganizationSchema, toJsonLdScript } from "@/lib/schema";
import "@/styles/globals.css";

export const metadata: Metadata = buildMetadata({
  title: "Malerarbeiten, Gipserarbeiten und Renovation in Zürich",
  description:
    "SCM Baupartner bietet Malerarbeiten, Gipserarbeiten, Fassadenarbeiten, Renovation und Ausbesserungen in Zürich und Umgebung mit sauberer Projektkommunikation.",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full overflow-x-hidden">
        <BaseLayout>{children}</BaseLayout>
        <ScrollReveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLdScript(buildOrganizationSchema()) }} />
      </body>
    </html>
  );
}

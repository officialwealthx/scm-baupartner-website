import type { Metadata } from "next";
import { BaseLayout } from "@/components/layout/BaseLayout";
import { buildMetadata } from "@/lib/seo";
import { buildOrganizationSchema, toJsonLdScript } from "@/lib/schema";
import "@/styles/globals.css";

export const metadata: Metadata = buildMetadata({
  title: "SCM Baupartner Studio",
  description:
    "Premium Swiss Surface Studio für Maler-, Gipser-, Fassaden- und Renovationsarbeiten mit geplanter digitaler Projektkommunikation.",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full overflow-x-hidden">
        <BaseLayout>{children}</BaseLayout>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLdScript(buildOrganizationSchema()) }} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const baseUrl = "https://www.scmbaupartner.ch";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.title}`;
  const fullDescription = description ?? siteConfig.description;

  return {
    metadataBase: new URL(baseUrl),
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      type: "website",
      url: path,
      siteName: siteConfig.title,
      images: [
        {
          url: "/og-placeholder.svg",
          width: 1200,
          height: 630,
          alt: "SCM Baupartner Studio Open Graph Placeholder",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: ["/og-placeholder.svg"],
    },
  };
}

import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const baseUrl = "https://www.scmbaupartner.ch";

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.title}`;
  const fullDescription = description ?? siteConfig.description;

  return {
    metadataBase: new URL(baseUrl),
    title: fullTitle,
    description: fullDescription,
    keywords: [
      "Malerarbeiten Zürich",
      "Gipserarbeiten Zürich",
      "Fassadenarbeiten Zürich",
      "Renovation Zürich",
      "Ausbesserungen",
      "Graffitientfernung",
      "Graffitischutz",
      "Schimmelbehandlung",
      "Spritzlackierung",
      "Verputz",
      "Sanierung Zürich",
      "Zürich und Umgebung",
    ],
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
          alt: "SCM Baupartner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: ["/og-placeholder.svg"],
    },
    icons: {
      icon: "/brand/favicon-round-512.png",
      shortcut: "/brand/favicon-round-512.png",
      apple: "/brand/app-icon-1024.png",
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

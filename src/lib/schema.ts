import { siteConfig } from "@/content/site";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    areaServed: "Zürich und Umgebung",
    serviceType: [
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
      "Sanierung",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
      contactType: "customer service",
      areaServed: "CH",
      availableLanguage: ["de", "en", "fr", "it"],
    },
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      postalCode: "8051",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
  };
}

export function toJsonLdScript(data: object) {
  return JSON.stringify(data);
}

import { siteConfig } from "@/content/site";

export function buildOrganizationSchema() {
  const services = [
    "Malerarbeiten",
    "Gipserarbeiten",
    "Fassadenarbeiten",
    "Renovationen",
    "Ausbesserungen",
    "Graffitientfernung",
    "Graffitischutz",
    "Schimmelbehandlung",
    "Spritzlackierung",
    "Verputz",
    "Sanierung",
  ] as const;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Zürich und Umgebung",
    },
    serviceType: services,
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
      name: "Postadresse",
      streetAddress: siteConfig.address.line1,
      postalCode: "8051",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen SCM Baupartner",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };
}

export function toJsonLdScript(data: object) {
  return JSON.stringify(data);
}

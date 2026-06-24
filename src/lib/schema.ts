import { siteConfig } from "@/content/site";
import { servedRegions } from "@/content/regions";

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
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    areaServed: servedRegions.map((region) => ({
      "@type": "AdministrativeArea",
      name: region,
    })),
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

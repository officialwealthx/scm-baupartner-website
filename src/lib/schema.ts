import { siteConfig } from "@/content/site";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
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

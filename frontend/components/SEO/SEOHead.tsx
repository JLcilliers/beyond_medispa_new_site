import React, { useEffect } from 'react';

interface OpenGraphData {
  title?: string;
  description?: string;
  image?: string;
}

interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  keywords?: string[];
  openGraph?: OpenGraphData;
}

interface SchemaMarkupData {
  type?: string;
  customSchema?: string;
}

interface SEOHeadProps {
  seo?: SEOData;
  schemaMarkup?: SchemaMarkupData;
  defaultTitle: string;
  pagePath: string;
  treatmentCategory?: string;
  location?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  seo,
  schemaMarkup,
  defaultTitle,
  pagePath,
  treatmentCategory,
  location
}) => {
  const siteUrl = 'https://www.beyondmedispa.com';
  const siteName = 'Beyond MediSpa';
  const title = seo?.metaTitle || defaultTitle;
  const description = seo?.metaDescription ||
    'Premium medical aesthetics clinic in London and Edinburgh offering expert doctor-led treatments';

  // Generate schema based on type
  const generateSchema = (): object => {
    if (schemaMarkup?.customSchema) {
      try {
        return JSON.parse(schemaMarkup.customSchema);
      } catch (e) {
        console.error('Invalid custom schema JSON:', e);
      }
    }

    const baseOrganizationSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": siteName,
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "image": seo?.openGraph?.image || `${siteUrl}/og-image.jpg`,
      "description": description,
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Fourth Floor, Harvey Nichols, 109-125 Knightsbridge",
          "addressLocality": "London",
          "postalCode": "SW1X 7RJ",
          "addressCountry": "GB"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Second Floor, Harvey Nichols, 30-34 St Andrew Square",
          "addressLocality": "Edinburgh",
          "postalCode": "EH2 2AD",
          "addressCountry": "GB"
        }
      ],
      "telephone": ["+44 20 7201 8595", "+44 345 548 1151"],
      "email": "info@beyondmedispa.com",
      "priceRange": "£££",
      "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-17:00"],
      "medicalSpecialty": ["Dermatology", "PlasticSurgery", "Cosmetology"],
      "sameAs": [
        "https://www.instagram.com/beyond.aesthetic.clinic/",
        "https://www.facebook.com/BeyondAestheticClinicUK/",
        "https://www.youtube.com/@beyondmedispa2049"
      ]
    };

    // Enhance schema based on type
    if (schemaMarkup?.type === 'MedicalProcedure' || treatmentCategory) {
      const procedureSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": defaultTitle,
        "description": description,
        "procedureType": "Cosmetic",
        "bodyLocation": treatmentCategory === 'facial' ? 'Face' : treatmentCategory === 'body' ? 'Body' : undefined,
        "provider": {
          "@type": "MedicalBusiness",
          "name": siteName,
          "url": siteUrl
        }
      };

      return {
        "@context": "https://schema.org",
        "@graph": [baseOrganizationSchema, procedureSchema]
      };
    }

    if (schemaMarkup?.type === 'FAQPage') {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []  // Will be populated with actual FAQs
      };
    }

    if (schemaMarkup?.type === 'AboutPage') {
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": title,
        "description": description,
        "url": `${siteUrl}${pagePath}`,
        "mainEntity": baseOrganizationSchema
      };
    }

    if (schemaMarkup?.type === 'ContactPage') {
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": title,
        "description": description,
        "url": `${siteUrl}${pagePath}`,
        "mainEntity": baseOrganizationSchema
      };
    }

    return baseOrganizationSchema;
  };

  const schema = generateSchema();
  const ogTitle = seo?.openGraph?.title || title;
  const ogDescription = seo?.openGraph?.description || description;
  const ogImage = seo?.openGraph?.image || `${siteUrl}/og-image.jpg`;
  const canonicalUrl = seo?.canonicalUrl || `${siteUrl}${pagePath}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    updateMetaTag('name', 'description', description);

    // Update canonical URL
    updateOrCreateLink('canonical', canonicalUrl);

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', ogTitle);
    updateMetaTag('property', 'og:description', ogDescription);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:url', `${siteUrl}${pagePath}`);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', siteName);

    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', ogTitle);
    updateMetaTag('name', 'twitter:description', ogDescription);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Update keywords if provided
    if (seo?.keywords && seo.keywords.length > 0) {
      updateMetaTag('name', 'keywords', seo.keywords.join(', '));
    }

    // Update or create schema markup
    updateOrCreateScript('schema-markup', JSON.stringify(schema, null, 2));

  }, [title, description, ogTitle, ogDescription, ogImage, canonicalUrl, schema, seo?.keywords]);

  return null; // This component doesn't render anything
};

// Helper functions for DOM manipulation
function updateMetaTag(attribute: string, attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function updateOrCreateLink(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function updateOrCreateScript(id: string, content: string) {
  let element = document.getElementById(id);

  if (element) {
    element.textContent = content;
  } else {
    element = document.createElement('script');
    element.setAttribute('id', id);
    element.setAttribute('type', 'application/ld+json');
    element.textContent = content;
    document.head.appendChild(element);
  }
}

export default SEOHead;

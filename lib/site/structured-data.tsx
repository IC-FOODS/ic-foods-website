import { defaultMetadata } from "./seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ic-foods.org";

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "IC-FOODS",
          url: siteUrl,
          description: defaultMetadata.description,
          contactPoint: {
            "@type": "ContactPoint",
            email: "info@ic-foods.org",
            contactType: "General Inquiries",
          },
        }),
      }}
    />
  );
}

export function EventSchema({
  name,
  startDate,
  endDate,
  location,
  description,
}: {
  name: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name,
          startDate,
          endDate: endDate || startDate,
          location: location
            ? {
                "@type": "Place",
                name: location,
              }
            : undefined,
          description,
        }),
      }}
    />
  );
}

export function ArticleSchema({
  headline,
  datePublished,
  author,
  publisher,
  url,
}: {
  headline: string;
  datePublished?: string;
  author?: string;
  publisher?: string;
  url: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline,
          datePublished,
          author: author
            ? {
                "@type": "Person",
                name: author,
              }
            : undefined,
          publisher: publisher
            ? {
                "@type": "Organization",
                name: publisher,
              }
            : undefined,
          url,
        }),
      }}
    />
  );
}

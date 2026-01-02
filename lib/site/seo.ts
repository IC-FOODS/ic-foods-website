import type { Metadata } from "next";

const siteName = "IC-FOODS";
const siteDescription =
  "Internet of Food Systems - Connecting communities, data, and technology to build sustainable food systems.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ic-foods.org";

export const defaultMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/assets/og.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/assets/og.png`],
  },
};

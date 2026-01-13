import TechnicalSEOPage from "./client";

export const metadata = {
  title: "Technical SEO Services in India | Improve Site Speed & Rankings",
  description:
    "Fix technical SEO issues with expert Technical SEO services. We optimize site speed, Core Web Vitals, mobile usability, indexing & structured data for better rankings.",
  keywords: [
    "Technical SEO Services",
    "Technical SEO Company in India",
    "Website Technical SEO",
    "Core Web Vitals Optimization",
    "Page Speed Optimization Services",
    "Mobile SEO Optimization",
    "Schema Markup Services",
    "Website SEO Audit",
    "Search Engine Technical Optimization",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/technical-seo-services",
  },
  openGraph: {
    title: "Technical SEO Services | Optimize Website Performance",
    description:
      "Improve crawlability, indexing & performance with professional Technical SEO services.",
    url: "https://www.digitalsolution360.com/technical-seo-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/technical-seo-hero.webp",
        width: 1200,
        height: 630,
        alt: "Technical SEO Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO Services | Digital Solution 360",
    description:
      "Optimize site speed, indexing & Core Web Vitals with expert Technical SEO services.",
    images: [
      "https://www.digitalsolution360.com/services/technical-seo-hero.webp",
    ],
  },
};

export default function Page() {
  return <TechnicalSEOPage />;
}

import LocalSEOPage from "./client";

export const metadata = {
  title: "Local SEO Services in India | Google My Business Optimization",
  description:
    "Grow your local business with expert Local SEO services. We optimize Google My Business, local keywords, citations & reviews to bring nearby customers.",
  keywords: [
    "Local SEO Services",
    "Local SEO Company in India",
    "Google My Business Optimization",
    "GMB SEO Services",
    "Local SEO Agency",
    "Local Business SEO",
    "Map Pack SEO",
    "Near Me SEO Services",
    "Local SEO Expert",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/local-seo-services",
  },
  openGraph: {
    title: "Local SEO Services | Digital Solution 360",
    description:
      "Rank higher in Google Maps & local search results with our Local SEO services.",
    url: "https://www.digitalsolution360.com/local-seo-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/local-seo-hero.webp",
        width: 1200,
        height: 630,
        alt: "Local SEO Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services | Digital Solution 360",
    description:
      "Get more local leads with expert Local SEO & GMB optimization.",
    images: [
      "https://www.digitalsolution360.com/services/local-seo-hero.webp",
    ],
  },
};

export default function Page() {
  return <LocalSEOPage />;
}

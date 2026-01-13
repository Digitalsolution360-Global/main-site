import SEOServicesPage from "./client";

export const metadata = {
  title: "SEO Services in India | Professional Search Engine Optimization",
  description:
    "Boost your Google rankings with expert SEO services. We deliver keyword research, on-page SEO, technical SEO & link building to grow traffic and leads.",
  keywords: [
    "SEO Services",
    "Search Engine Optimization Services",
    "SEO Company in India",
    "Professional SEO Agency",
    "Google SEO Services",
    "Organic SEO Services",
    "SEO Expert India",
    "Website SEO Services",
    "SEO Marketing Services",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/seo-services",
  },
  openGraph: {
    title: "SEO Services | Grow Your Business with SEO",
    description:
      "Result-driven SEO services to increase organic traffic, rankings & conversions.",
    url: "https://www.digitalsolution360.com/seo-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/seo-services-hero.webp",
        width: 1200,
        height: 630,
        alt: "SEO Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | Digital Solution 360",
    description:
      "Rank higher on Google with professional SEO services that deliver results.",
    images: [
      "https://www.digitalsolution360.com/services/seo-services-hero.webp",
    ],
  },
};

export default function Page() {
  return <SEOServicesPage />;
}

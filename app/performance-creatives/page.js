import PerformanceCreativesPage from "./client";

export const metadata = {
  title: "Performance Creatives | Conversion-Focused Ad Creatives",
  description:
    "Performance-driven ad creatives designed to maximize engagement, conversions & ROI across social media, display & digital campaigns.",
  keywords: [
    "Performance Creatives",
    "Conversion Focused Creatives",
    "Ad Performance Creatives",
    "ROI Driven Ad Design",
    "High Converting Ad Creatives",
    "Digital Performance Ads",
    "Creative Optimization Services",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/performance-creatives",
  },
  openGraph: {
    title: "Performance Creatives | Digital Solution 360",
    description:
      "High-impact performance creatives designed using data, testing & optimization to drive measurable campaign results.",
    url: "https://www.digitalsolution360.com/performance-creatives",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/performance-creatives-hero.webp",
        width: 1200,
        height: 630,
        alt: "Performance Creatives",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Creatives | Digital Solution 360",
    description:
      "Conversion-focused creatives built to boost ad performance, engagement & ROI.",
    images: [
      "https://www.digitalsolution360.com/services/performance-creatives-hero.webp",
    ],
  },
};

export default function Page() {
  return <PerformanceCreativesPage />;
}

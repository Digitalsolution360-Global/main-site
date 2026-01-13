import FacebookMarketingPage from "./client";

export const metadata = {
  title: "Facebook Marketing Services in India | Facebook Ads & Growth Experts",
  description:
    "Grow leads, sales, and brand awareness with expert Facebook marketing services. High-converting Facebook ads, page optimization, creatives & performance tracking.",
  keywords: [
    "facebook marketing services",
    "facebook ads agency",
    "facebook advertising services",
    "facebook page management",
    "facebook lead generation",
    "social media agency india",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/facebook-marketing-services",
  },
  openGraph: {
    title: "Facebook Marketing Services | Digital Solution 360",
    description:
      "Scale your business with result-driven Facebook marketing strategies and ad campaigns.",
    url: "https://www.digitalsolution360.com/facebook-marketing-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "/services/facebook-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "Facebook Marketing Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Marketing Services | Digital Solution 360",
    description:
      "High-performing Facebook ads and marketing services to boost leads, sales & engagement.",
    images: ["/services/facebook-marketing-hero.webp"],
  },
};

export default function Page() {
  return <FacebookMarketingPage />;
}

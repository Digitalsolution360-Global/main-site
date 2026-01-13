// app/influencer-marketing-services/page.js
import InfluencerMarketingPage from "./client";

export const metadata = {
  title: "Influencer Marketing Services | Influencer Campaign Management Agency",
  description:
    "Boost your brand with expert influencer marketing services. We connect you with the right influencers to drive engagement, trust, leads, and sales.",
  keywords: [
    "Influencer Marketing Services",
    "Influencer Marketing Agency",
    "Influencer Campaign Management",
    "Social Media Influencer Marketing",
    "Brand Awareness Campaigns",
    "Influencer Collaboration",
    "Digital Marketing Agency",
    "Influencer Promotions",
    "ROI Driven Influencer Campaigns",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/influencer-marketing-services",
  },
  openGraph: {
    title: "Influencer Marketing Services | Connect with the Right Influencers",
    description:
      "Increase brand reach, engagement, and conversions with our professional influencer marketing campaigns and collaborations.",
    url: "https://www.digitalsolution360.com/influencer-marketing-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/influencer-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "Influencer Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Services | Boost Engagement & Brand Awareness",
    description:
      "Professional influencer marketing agency connecting brands with the right social media influencers for measurable results.",
    images: [
      "https://www.digitalsolution360.com/services/influencer-marketing-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <InfluencerMarketingPage />;
}

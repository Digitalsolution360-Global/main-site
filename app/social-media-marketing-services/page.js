import SocialMediaMarketingPage from "./client";

export const metadata = {
  title: "Social Media Marketing Services in India | Grow Your Brand Online",
  description:
    "Boost brand awareness, engagement, and conversions with our expert social media marketing services. Facebook, Instagram, LinkedIn & YouTube marketing tailored for business growth.",
  keywords: [
    "social media marketing services",
    "social media marketing company",
    "instagram marketing services",
    "facebook marketing agency",
    "linkedin marketing services",
    "youtube marketing",
    "social media management services",
    "digital marketing company india",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing Services | Digital Solution 360",
    description:
      "Grow your brand online with result-driven social media marketing strategies. Expert Facebook, Instagram, LinkedIn & YouTube marketing.",
    url: "https://www.digitalsolution360.com/social-media-marketing",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "/services/social-media-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Services | Digital Solution 360",
    description:
      "Increase reach, engagement & conversions with professional social media marketing services.",
    images: ["/services/social-media-marketing-hero.webp"],
  },
};

export default function Page() {
  return <SocialMediaMarketingPage />;
}

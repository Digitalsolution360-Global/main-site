import YouTubeMarketingPage from "./client";
export const metadata = {
  title: "YouTube Marketing Services | YouTube Ads & Video Growth Agency",
  description:
    "Grow your brand with expert YouTube marketing services. We help you increase views, subscribers, leads & sales with result-driven YouTube ads and video strategies.",
  keywords: [
    "YouTube Marketing Services",
    "YouTube Marketing Agency",
    "YouTube Ads Management",
    "YouTube Promotion Services",
    "Video Marketing Company",
    "YouTube SEO Services",
    "YouTube Channel Optimization",
    "YouTube Advertising Agency",
    "YouTube Growth Services",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/youtube-marketing-services",
  },
  openGraph: {
    title: "YouTube Marketing Services | Video Growth & YouTube Ads Experts",
    description:
      "Boost YouTube views, subscribers, and conversions with our professional YouTube marketing and advertising services.",
    url: "https://www.digitalsolution360.com/youtube-marketing-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/youtube-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "YouTube Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Marketing Services | Grow Views, Leads & Sales",
    description:
      "Professional YouTube marketing agency helping businesses grow through ads, SEO, and video strategy.",
    images: [
      "https://www.digitalsolution360.com/services/youtube-marketing-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function Page() {
  return <YouTubeMarketingPage />;
}































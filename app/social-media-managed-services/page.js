// app/social-media-managed-services/page.js
import SocialMediaManagedServicesPage from "./client";

export const metadata = {
  title: "Social Media Managed Services | Professional Social Media Management",
  description:
    "Grow your brand’s presence, engagement, and conversions with our expert social media managed services. Strategy, campaigns, community management, and analytics.",
  keywords: [
    "Social Media Managed Services",
    "Social Media Management",
    "Campaign Optimization",
    "Community Management",
    "Analytics & Reporting",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/social-media-managed-services",
  },
  openGraph: {
    title: "Social Media Managed Services | Professional Social Media Management",
    description:
      "Professional social media management services including strategy, campaign optimization, community management, and analytics for measurable growth.",
    url: "https://www.digitalsolution360.com/social-media-managed-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/social-media-managed-hero.webp",
        width: 1200,
        height: 630,
        alt: "Social Media Managed Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Managed Services | Professional Social Media Management",
    description:
      "Expert social media management to grow your audience, engagement, and conversions with strategy, campaigns, and analytics.",
    images: [
      "https://www.digitalsolution360.com/services/social-media-managed-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SocialMediaManagedServicesPage />;
}

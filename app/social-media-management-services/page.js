import SocialMediaManagementPage from "./client";

export const metadata = {
  title: "Social Media Management Services in India | Account Handling Experts",
  description:
    "Professional social media management services to handle content, posting, engagement, and performance tracking. Grow your brand on Facebook, Instagram, LinkedIn & more.",
  keywords: [
    "social media management services",
    "social media account management",
    "social media handling services",
    "instagram management services",
    "facebook page management",
    "linkedin account management",
    "social media agency india",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/social-media-management-services",
  },
  openGraph: {
    title: "Social Media Management Services | Digital Solution 360",
    description:
      "Let experts manage your social media accounts with strategic content, posting & performance optimization.",
    url: "https://www.digitalsolution360.com/social-media-management-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "/services/social-media-management-hero.webp",
        width: 1200,
        height: 630,
        alt: "Social Media Management Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management Services | Digital Solution 360",
    description:
      "Complete social media account management to grow engagement, reach & brand trust.",
    images: ["/services/social-media-management-hero.webp"],
  },
};

export default function Page() {
  return <SocialMediaManagementPage />;
}

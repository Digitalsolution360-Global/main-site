// app/b2b-digital-marketing-services/page.js
import B2BMarketingPage from "./client";

export const metadata = {
  title: "B2B Digital Marketing Services | Lead Generation & Growth",
  description:
    "Generate high-quality leads, engage decision-makers, and grow your B2B business with expert digital marketing services from Digital Solution 360.",
  keywords: [
    "B2B Digital Marketing",
    "B2B Lead Generation",
    "Account-Based Marketing",
    "Customer Acquisition",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/b2b-digital-marketing-services",
  },
  openGraph: {
    title: "B2B Digital Marketing Services | Lead Generation & Growth",
    description:
      "Expert B2B marketing services including lead generation, account-based marketing, customer acquisition, and analytics to grow your business.",
    url: "https://www.digitalsolution360.com/b2b-digital-marketing-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/b2b-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "B2B Digital Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Digital Marketing Services | Lead Generation & Growth",
    description:
      "Boost your B2B business with targeted lead generation, account-based campaigns, and analytics-driven marketing strategies.",
    images: [
      "https://www.digitalsolution360.com/services/b2b-marketing-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <B2BMarketingPage />;
}

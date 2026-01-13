// app/saas-marketing-services/page.js
import SaaSMarketingPage from "./client";

export const metadata = {
  title: "SaaS Marketing Services | Grow & Scale Your SaaS Product",
  description:
    "Drive growth, acquire users, and scale your SaaS product with expert marketing strategies including product-led growth, performance marketing, and analytics.",
  keywords: [
    "SaaS Marketing Services",
    "SaaS Growth Strategy",
    "Performance Marketing",
    "User Acquisition",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/saas-marketing-services",
  },
  openGraph: {
    title: "SaaS Marketing Services | Grow & Scale Your SaaS Product",
    description:
      "Expert SaaS marketing services to drive growth, increase user acquisition, and optimize your campaigns for maximum results.",
    url: "https://www.digitalsolution360.com/saas-marketing-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/saas-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "SaaS Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Marketing Services | Grow & Scale Your SaaS Product",
    description:
      "Tailored SaaS marketing services including growth strategy, performance campaigns, user acquisition, and analytics.",
    images: [
      "https://www.digitalsolution360.com/services/saas-marketing-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SaaSMarketingPage />;
}

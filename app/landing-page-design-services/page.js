// app/landing-page-design-services/page.js
import LandingPageDesignServicesPage from "./client";

export const metadata = {
  title:
    "Landing Page Design Services | High-Converting Pages - Digital Solution 360",
  description:
    "Digital Solution 360 offers expert landing page design services to create fast, visually appealing, and conversion-focused pages that maximize ROI.",
  keywords:
    "landing page design, high-converting landing pages, UI design, conversion optimization, A/B testing ready pages, Digital Solution 360",
  alternates: {
    canonical: "https://www.digitalsolution360.com/landing-page-design-services",
  },
  openGraph: {
    title: "Landing Page Design Services | Digital Solution 360",
    description:
      "Get high-performing, conversion-driven landing pages with Digital Solution 360's expert landing page design services.",
    url: "https://www.digitalsolution360.com/landing-page-design-services",
    siteName: "Digital Solution 360",
    type: "website",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/landing-page-design-hero.webp",
        width: 1200,
        height: 630,
        alt: "Landing Page Design Services - Digital Solution 360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Design Services | Digital Solution 360",
    description:
      "Get high-performing, conversion-driven landing pages with Digital Solution 360's expert landing page design services.",
    images: [
      "https://www.digitalsolution360.com/services/landing-page-design-hero.webp",
    ],
  },
};

export default function Page() {
  return <LandingPageDesignServicesPage />;
}

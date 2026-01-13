// app/ppc-managed-services/page.js
import PPCManagedServicesPage from "./client";

export const metadata = {
  title: "PPC Managed Services | Professional PPC Campaign Management",
  description:
    "Maximize ROI and drive targeted traffic with our full-service PPC managed services. Campaign setup, optimization, targeting, and analytics for measurable results.",
  keywords: [
    "PPC Managed Services",
    "PPC Campaign Setup",
    "Conversion Optimization",
    "Targeted Ads Strategy",
    "Analytics & Reporting",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/ppc-managed-services",
  },
  openGraph: {
    title: "PPC Managed Services | Professional PPC Campaign Management",
    description:
      "Get expert PPC campaign management with setup, optimization, audience targeting, and detailed analytics for better ROI.",
    url: "https://www.digitalsolution360.com/ppc-managed-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/ppc-managed-hero.webp",
        width: 1200,
        height: 630,
        alt: "PPC Managed Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPC Managed Services | Professional PPC Campaign Management",
    description:
      "Professional PPC management services including campaign setup, conversion optimization, targeted ads, and analytics for measurable results.",
    images: [
      "https://www.digitalsolution360.com/services/ppc-managed-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PPCManagedServicesPage />;
}

// app/seo-managed-services/page.js
import SEOManagedServicesPage from "./client";

export const metadata = {
  title: "SEO Managed Services | Professional SEO Management",
  description:
    "Boost your website rankings, traffic, and leads with our full-service SEO managed solutions. Technical audits, keyword strategy, on-page optimization & reporting.",
  keywords: [
    "SEO Managed Services",
    "Technical SEO Audit",
    "Keyword Strategy",
    "On-Page SEO",
    "SEO Reporting",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/seo-managed-services",
  },
  openGraph: {
    title: "SEO Managed Services | Professional SEO Management",
    description:
      "Maximize your online visibility and organic growth with expert SEO managed services including audits, keyword strategy, optimization, and reporting.",
    url: "https://www.digitalsolution360.com/seo-managed-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/seo-managed-hero.webp",
        width: 1200,
        height: 630,
        alt: "SEO Managed Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Managed Services | Professional SEO Management",
    description:
      "Let our experts handle all aspects of SEO including technical audits, on-page optimization, keyword strategy, and growth tracking.",
    images: [
      "https://www.digitalsolution360.com/services/seo-managed-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SEOManagedServicesPage />;
}

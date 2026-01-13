import SEOAuditPage from "./client";

export const metadata = {
  title: "SEO Audit Services in India | Website SEO Audit Experts",
  description:
    "Get a comprehensive SEO audit to identify technical, on-page & off-page issues. Improve rankings, traffic & conversions with our professional SEO audit services.",
  keywords: [
    "SEO Audit Services",
    "Website SEO Audit",
    "Technical SEO Audit",
    "On Page SEO Audit",
    "Off Page SEO Audit",
    "SEO Audit Company in India",
    "SEO Website Analysis",
    "SEO Performance Audit",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/seo-audit-services",
  },
  openGraph: {
    title: "SEO Audit Services | Improve Rankings & Performance",
    description:
      "Identify SEO issues and growth opportunities with our in-depth SEO audit services.",
    url: "https://www.digitalsolution360.com/seo-audit-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/seo-audit-hero.webp",
        width: 1200,
        height: 630,
        alt: "SEO Audit Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Audit Services | Digital Solution 360",
    description:
      "Professional SEO audits covering technical, on-page & off-page SEO factors.",
    images: [
      "https://www.digitalsolution360.com/services/seo-audit-hero.webp",
    ],
  },
};

export default function Page() {
  return <SEOAuditPage />;
}

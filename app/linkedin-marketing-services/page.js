import LinkedInMarketingPage from "./client";

export const metadata = {
  title: "LinkedIn Marketing Services in India | B2B Lead Generation Experts",
  description:
    "Generate high-quality B2B leads with expert LinkedIn marketing services. Profile optimization, content strategy, LinkedIn ads & lead tracking for business growth.",
  keywords: [
    "linkedin marketing services",
    "linkedin ads agency",
    "b2b lead generation linkedin",
    "linkedin advertising services",
    "linkedin company page management",
    "social media agency india",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/linkedin-marketing-services",
  },
  openGraph: {
    title: "LinkedIn Marketing Services | Digital Solution 360",
    description:
      "Grow B2B leads and brand authority with result-driven LinkedIn marketing strategies.",
    url: "https://www.digitalsolution360.com/linkedin-marketing-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "/services/linkedin-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "LinkedIn Marketing Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Marketing Services | Digital Solution 360",
    description:
      "Professional LinkedIn marketing services for B2B lead generation and growth.",
    images: ["/services/linkedin-marketing-hero.webp"],
  },
};

export default function Page() {
  return <LinkedInMarketingPage />;
}

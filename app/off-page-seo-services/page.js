import OffPageSEOPage from "./client";

export const metadata = {
  title: "Off-Page SEO Services in India | Link Building & Authority Growth",
  description:
    "Boost your website authority, rankings, and organic traffic with professional Off-Page SEO services. High-quality link building, guest blogging, social signals & reputation management.",
  keywords: [
    "Off-Page SEO Services",
    "Off Page SEO Company in India",
    "Link Building Services",
    "Guest Blogging Services",
    "Backlink Building Agency",
    "SEO Authority Building",
    "Online Reputation Management SEO",
    "White Hat Link Building",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/off-page-seo-services",
  },
  openGraph: {
    title: "Off-Page SEO Services | Build Authority & Rankings",
    description:
      "Improve domain authority and search rankings with trusted Off-Page SEO strategies including backlinks, outreach, and brand building.",
    url: "https://www.digitalsolution360.com/off-page-seo-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/off-page-seo-hero.webp",
        width: 1200,
        height: 630,
        alt: "Off-Page SEO Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off-Page SEO Services | Digital Solution 360",
    description:
      "Grow authority, backlinks, and organic traffic with expert Off-Page SEO services.",
    images: [
      "https://www.digitalsolution360.com/services/off-page-seo-hero.webp",
    ],
  },
};

export default function Page() {
  return <OffPageSEOPage />;
}

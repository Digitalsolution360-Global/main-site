import InstagramMarketingPage from "./client";

export const metadata = {
  title: "Instagram Marketing Services in India | Grow Followers & Engagement",
  description:
    "Grow your brand on Instagram with expert Instagram marketing services. Profile optimization, content creation, reels, ads & analytics to boost followers and engagement.",
  keywords: [
    "instagram marketing services",
    "instagram marketing company",
    "instagram ads services",
    "instagram management services",
    "grow instagram followers",
    "instagram reels marketing",
    "social media agency india",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/instagram-marketing-services",
  },
  openGraph: {
    title: "Instagram Marketing Services | Digital Solution 360",
    description:
      "Boost engagement, followers & brand visibility with professional Instagram marketing services.",
    url: "https://www.digitalsolution360.com/instagram-marketing-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "/services/instagram-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "Instagram Marketing Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Marketing Services | Digital Solution 360",
    description:
      "Professional Instagram marketing to grow followers, engagement & conversions.",
    images: ["/services/instagram-marketing-hero.webp"],
  },
};

export default function Page() {
  return <InstagramMarketingPage />;
}

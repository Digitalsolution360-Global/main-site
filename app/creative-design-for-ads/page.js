import CreativeDesignForAdsPage from "./client";

export const metadata = {
  title: "Creative Design for Ads | High-Converting Ad Creatives",
  description:
    "Professional creative design for ads including social media creatives, display banners, video ads & motion graphics to boost conversions and ROI.",
  keywords: [
    "Creative Design for Ads",
    "Ad Creative Services",
    "Social Media Ad Creatives",
    "Display Banner Ads",
    "Video Ad Creatives",
    "Performance Ad Creatives",
    "Advertising Creative Agency",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/creative-design-for-ads",
  },
  openGraph: {
    title: "Creative Design for Ads | Digital Solution 360",
    description:
      "High-impact ad creatives designed for social media, display & video campaigns that drive clicks and conversions.",
    url: "https://www.digitalsolution360.com/creative-design-for-ads",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/creative-for-ads-hero.webp",
        width: 1200,
        height: 630,
        alt: "Creative Design for Ads",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Design for Ads | Digital Solution 360",
    description:
      "Ad creative design services that boost engagement, conversions & ad performance.",
    images: [
      "https://www.digitalsolution360.com/services/creative-for-ads-hero.webp",
    ],
  },
};

export default function Page() {
  return <CreativeDesignForAdsPage />;
}

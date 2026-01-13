// app/short-video-marketing/page.js
import ShortVideoMarketingPage from "./client";

export const metadata = {
  title: "Short Video Marketing Services | Reels, Shorts & TikTok Agency",
  description:
    "Boost brand engagement with expert short video marketing. We create high-performing Reels, YouTube Shorts, and TikTok videos for views, leads, and sales.",
  keywords: [
    "Short Video Marketing",
    "Short Video Agency",
    "Reels Marketing",
    "YouTube Shorts Marketing",
    "TikTok Marketing",
    "Viral Video Creation",
    "Social Media Video Marketing",
    "Video Content Strategy",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/short-video-marketing",
  },
  openGraph: {
    title: "Short Video Marketing Services | Reels, Shorts & TikTok Experts",
    description:
      "Create viral short videos for Instagram, YouTube, and TikTok to boost brand visibility, engagement, and conversions.",
    url: "https://www.digitalsolution360.com/short-video-marketing",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/short-video-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "Short Video Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Short Video Marketing Services | Reels, Shorts & TikTok Growth",
    description:
      "Professional short video marketing agency helping brands grow on Instagram, YouTube, and TikTok with engaging, viral content.",
    images: [
      "https://www.digitalsolution360.com/services/short-video-marketing-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ShortVideoMarketingPage />;
}

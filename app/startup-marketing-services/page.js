// app/startup-marketing-services/page.js
import StartupMarketingPage from "./client";

export const metadata = {
  title: "Startup Marketing Services | Launch & Grow Your Startup",
  description:
    "Launch, grow, and scale your startup with expert marketing strategies including launch planning, growth hacking, audience targeting, and analytics.",
  keywords: [
    "Startup Marketing Services",
    "Startup Growth Strategy",
    "Launch Marketing",
    "Growth Hacking",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/startup-marketing-services",
  },
  openGraph: {
    title: "Startup Marketing Services | Launch & Grow Your Startup",
    description:
      "Professional marketing services for startups to help you launch, acquire users, and grow your business efficiently.",
    url: "https://www.digitalsolution360.com/startup-marketing-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/startup-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "Startup Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Marketing Services | Launch & Grow Your Startup",
    description:
      "Expert startup marketing services including launch strategy, growth hacking, audience targeting, and analytics.",
    images: [
      "https://www.digitalsolution360.com/services/startup-marketing-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <StartupMarketingPage />;
}

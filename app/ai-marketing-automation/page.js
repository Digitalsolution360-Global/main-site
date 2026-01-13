// app/ai-marketing-automation/page.js
import AIMarketingAutomationPage from "./client";

export const metadata = {
  title: "AI Marketing Automation | Smarter Campaigns with AI",
  description:
    "Automate your marketing campaigns using AI. Optimize audience targeting, predictive analytics, and campaign performance with Digital Solution 360.",
  keywords: [
    "AI Marketing Automation",
    "AI Campaigns",
    "Predictive Analytics",
    "Audience Segmentation",
    "Automated Marketing",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/ai-marketing-automation",
  },
  openGraph: {
    title: "AI Marketing Automation | Smarter Campaigns with AI",
    description:
      "Leverage AI to automate marketing campaigns, optimize targeting, and maximize ROI with Digital Solution 360.",
    url: "https://www.digitalsolution360.com/ai-marketing-automation",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/ai-marketing-automation-hero.webp",
        width: 1200,
        height: 630,
        alt: "AI Marketing Automation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Automation | Smarter Campaigns with AI",
    description:
      "Automate marketing campaigns using AI for smarter targeting, predictive analytics, and optimized performance.",
    images: [
      "https://www.digitalsolution360.com/services/ai-marketing-automation-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <AIMarketingAutomationPage />;
}

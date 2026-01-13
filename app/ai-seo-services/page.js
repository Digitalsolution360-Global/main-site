import AISEOPage from "./client";

export const metadata = {
  title: "AI SEO Services in India | AI-Driven SEO Solutions",
  description:
    "Boost rankings with AI SEO services. Smart keyword research, AI-powered audits, predictive SEO trends & content optimization for faster growth.",
  keywords: [
    "AI SEO Services",
    "AI Driven SEO",
    "Artificial Intelligence SEO",
    "AI SEO Company in India",
    "AI Keyword Research",
    "AI SEO Tools",
    "Predictive SEO",
    "AI Content Optimization",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/ai-seo-services",
  },
  openGraph: {
    title: "AI SEO Services | AI-Powered Search Engine Optimization",
    description:
      "Leverage artificial intelligence to optimize SEO strategy, content & rankings with advanced AI SEO solutions.",
    url: "https://www.digitalsolution360.com/ai-seo-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/ai-seo-hero.webp",
        width: 1200,
        height: 630,
        alt: "AI SEO Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO Services | Digital Solution 360",
    description:
      "AI-powered SEO audits, keyword research & content optimization for higher rankings.",
    images: [
      "https://www.digitalsolution360.com/services/ai-seo-hero.webp",
    ],
  },
};

export default function Page() {
  return <AISEOPage />;
}

import OnPageSEOPage from "./client";

export const metadata = {
  title: "On-Page SEO Services in India | Page Optimization Experts",
  description:
    "Improve your website rankings with expert On-Page SEO services. We optimize meta tags, content, internal linking, images & on-page factors for better visibility and conversions.",
  keywords: [
    "On-Page SEO Services",
    "On Page SEO Company in India",
    "Website On-Page Optimization",
    "Meta Tags Optimization",
    "Content Optimization Services",
    "Internal Linking SEO",
    "Image SEO Optimization",
    "On Page SEO Expert",
    "SEO Page Optimization Services",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/on-page-seo-services",
  },
  openGraph: {
    title: "On-Page SEO Services | Optimize Website Pages",
    description:
      "Optimize every page of your website for higher rankings and better conversions with our On-Page SEO services.",
    url: "https://www.digitalsolution360.com/on-page-seo-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/on-page-seo-hero.webp",
        width: 1200,
        height: 630,
        alt: "On-Page SEO Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Page SEO Services | Digital Solution 360",
    description:
      "Boost rankings, traffic & conversions with professional On-Page SEO services.",
    images: [
      "https://www.digitalsolution360.com/services/on-page-seo-hero.webp",
    ],
  },
};

export default function Page() {
  return <OnPageSEOPage />;
}

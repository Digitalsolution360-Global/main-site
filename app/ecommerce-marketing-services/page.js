// app/ecommerce-marketing-services/page.js
import EcommerceMarketingPage from "./client";

export const metadata = {
  title: "Ecommerce Marketing Services | Boost Online Sales & Conversions",
  description:
    "Drive traffic, increase conversions, and scale your online store with expert ecommerce marketing services from Digital Solution 360.",
  keywords: [
    "Ecommerce Marketing Services",
    "Online Store Marketing",
    "Performance Marketing",
    "Customer Acquisition",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/ecommerce-marketing-services",
  },
  openGraph: {
    title: "Ecommerce Marketing Services | Boost Online Sales & Conversions",
    description:
      "Expert ecommerce marketing services including strategy, performance campaigns, customer acquisition, and analytics to grow your online store.",
    url: "https://www.digitalsolution360.com/ecommerce-marketing-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/ecommerce-marketing-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ecommerce Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Marketing Services | Boost Online Sales & Conversions",
    description:
      "Drive traffic, boost conversions, and scale your ecommerce business with data-driven marketing strategies.",
    images: [
      "https://www.digitalsolution360.com/services/ecommerce-marketing-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <EcommerceMarketingPage />;
}

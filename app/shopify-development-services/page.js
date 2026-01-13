// app/shopify-development-services/page.js
import ShopifyDevelopmentServicesPage from "./client";

export const metadata = {
  title:
    "Shopify Development Services | Custom & Conversion-Optimized Stores - Digital Solution 360",
  description:
    "Digital Solution 360 provides expert Shopify development services including custom store design, theme customization, app integration, and performance optimization.",
  keywords:
    "Shopify development services, custom Shopify store, Shopify theme customization, Shopify apps, eCommerce website development, conversion-optimized Shopify store, Digital Solution 360",
  alternates: {
    canonical: "https://www.digitalsolution360.com/shopify-development-services",
  },
  openGraph: {
    title: "Shopify Development Services | Digital Solution 360",
    description:
      "Get custom, high-performing, and conversion-optimized Shopify stores with Digital Solution 360's expert Shopify development services.",
    url: "https://www.digitalsolution360.com/shopify-development-services",
    siteName: "Digital Solution 360",
    type: "website",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/shopify-development-hero.webp",
        width: 1200,
        height: 630,
        alt: "Shopify Development Services - Digital Solution 360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Services | Digital Solution 360",
    description:
      "Get custom, high-performing, and conversion-optimized Shopify stores with Digital Solution 360's expert Shopify development services.",
    images: [
      "https://www.digitalsolution360.com/services/shopify-development-hero.webp",
    ],
  },
};

export default function Page() {
  return <ShopifyDevelopmentServicesPage />;
}

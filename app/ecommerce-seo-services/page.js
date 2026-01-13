import EcommerceSEOPage from "./client";

export const metadata = {
  title: "Ecommerce SEO Services in India | Grow Online Store Sales",
  description:
    "Increase your ecommerce sales with expert Ecommerce SEO services. We optimize product pages, categories, technical SEO & content to drive organic traffic and conversions.",
  keywords: [
    "Ecommerce SEO Services",
    "Ecommerce SEO Company in India",
    "SEO for Ecommerce Website",
    "Online Store SEO Services",
    "Product Page SEO",
    "Category Page SEO",
    "Shopify SEO Services",
    "WooCommerce SEO Services",
    "Ecommerce SEO Agency",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/ecommerce-seo-services",
  },
  openGraph: {
    title: "Ecommerce SEO Services | Increase Online Store Sales",
    description:
      "Drive more traffic and sales with result-oriented Ecommerce SEO strategies.",
    url: "https://www.digitalsolution360.com/ecommerce-seo-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/ecommerce-seo-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ecommerce SEO Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce SEO Services | Digital Solution 360",
    description:
      "Boost ecommerce traffic, rankings & conversions with professional SEO services.",
    images: [
      "https://www.digitalsolution360.com/services/ecommerce-seo-hero.webp",
    ],
  },
};

export default function Page() {
  return <EcommerceSEOPage />;
}

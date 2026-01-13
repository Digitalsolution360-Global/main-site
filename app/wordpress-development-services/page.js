// app/wordpress-development-services/page.js
import WordPressDevelopmentServicesPage from "./client";

export const metadata = {
  title:
    "WordPress Development Services | Custom & SEO-Friendly Websites - Digital Solution 360",
  description:
    "Digital Solution 360 provides professional WordPress development services including custom themes, plugins, responsive design, and SEO-optimized websites.",
  keywords:
    "WordPress development services, custom WordPress website, WordPress themes, WordPress plugins, responsive WordPress design, SEO-friendly WordPress site, WordPress developers India, Digital Solution 360",
  alternates: {
    canonical: "https://www.digitalsolution360.com/wordpress-development-services",
  },
  openGraph: {
    title: "WordPress Development Services | Digital Solution 360",
    description:
      "Get custom, scalable, and SEO-friendly WordPress websites with Digital Solution 360's professional WordPress development services.",
    url: "https://www.digitalsolution360.com/wordpress-development-services",
    siteName: "Digital Solution 360",
    type: "website",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/wordpress-development-hero.webp",
        width: 1200,
        height: 630,
        alt: "WordPress Development Services - Digital Solution 360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services | Digital Solution 360",
    description:
      "Get custom, scalable, and SEO-friendly WordPress websites with Digital Solution 360's professional WordPress development services.",
    images: [
      "https://www.digitalsolution360.com/services/wordpress-development-hero.webp",
    ],
  },
};

export default function Page() {
  return <WordPressDevelopmentServicesPage />;
}

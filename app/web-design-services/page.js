// app/web-design-services/page.js
import WebDesignServicesPage from "./client";

export const metadata = {
  title:
    "Web Design Services | Creative & Responsive Websites - Digital Solution 360",
  description:
    "Digital Solution 360 offers professional web design services including creative designs, responsive layouts, UX-focused interfaces, and conversion-optimized websites.",
  keywords:
    "web design services, responsive web design, creative website design, UX design, UI design, conversion-focused websites, web designers in India, Digital Solution 360",
  alternates: {
    canonical: "https://www.digitalsolution360.com/web-design-services",
  },
  openGraph: {
    title: "Web Design Services | Digital Solution 360",
    description:
      "Get creative, responsive, and conversion-focused web design services from Digital Solution 360.",
    url: "https://www.digitalsolution360.com/web-design-services",
    siteName: "Digital Solution 360",
    type: "website",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/web-design-hero.webp",
        width: 1200,
        height: 630,
        alt: "Web Design Services - Digital Solution 360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Services | Digital Solution 360",
    description:
      "Get creative, responsive, and conversion-focused web design services from Digital Solution 360.",
    images: [
      "https://www.digitalsolution360.com/services/web-design-hero.webp",
    ],
  },
};

export default function Page() {
  return <WebDesignServicesPage />;
}

import LogoDesignPage from "./client";

export const metadata = {
  title: "Logo Design Services in India | Professional Logo Designers",
  description:
    "Professional logo design services to create unique, memorable and scalable logos for your brand. Get custom logo design for web, print & digital branding.",
  keywords: [
    "Logo Design Services",
    "Professional Logo Design",
    "Custom Logo Design",
    "Business Logo Design",
    "Brand Logo Design",
    "Logo Design Company in India",
    "Creative Logo Designers",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/logo-design-services",
  },
  openGraph: {
    title: "Logo Design Services | Custom & Creative Logos",
    description:
      "Get professionally designed logos that reflect your brand identity and leave a lasting impression.",
    url: "https://www.digitalsolution360.com/logo-design-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/logo-design-hero.webp",
        width: 1200,
        height: 630,
        alt: "Logo Design Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design Services | Digital Solution 360",
    description:
      "Custom logo design services for startups, businesses & brands.",
    images: [
      "https://www.digitalsolution360.com/services/logo-design-hero.webp",
    ],
  },
};

export default function Page() {
  return <LogoDesignPage />;
}

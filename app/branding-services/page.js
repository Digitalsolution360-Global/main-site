import BrandingServicesPage from "./client";

export const metadata = {
  title: "Branding Services in India | Brand Identity & Creative Design",
  description:
    "Professional branding services including brand identity design, logo design, graphic design & creative ad solutions to grow your brand.",
  keywords: [
    "Branding Services",
    "Brand Identity Design",
    "Logo Design Services",
    "Creative Design Services",
    "Graphic Design Company",
    "Branding Agency in India",
    "Creative for Ads",
    "Performance Creatives",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/branding-services",
  },
  openGraph: {
    title: "Branding Services | Brand Identity & Creative Solutions",
    description:
      "Build a powerful brand with expert branding, logo design, creative ads & graphic design services.",
    url: "https://www.digitalsolution360.com/branding-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/branding-services-hero.webp",
        width: 1200,
        height: 630,
        alt: "Branding & Creative Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Services | Digital Solution 360",
    description:
      "Brand identity, logo design, graphic design & high-performing creative services.",
    images: [
      "https://www.digitalsolution360.com/services/branding-services-hero.webp",
    ],
  },
};

export default function Page() {
  return <BrandingServicesPage />;
}

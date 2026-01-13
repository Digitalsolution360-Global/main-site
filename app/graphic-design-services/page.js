import GraphicDesignPage from "./client";

export const metadata = {
  title: "Graphic Design Services in India | Creative Graphic Designers",
  description:
    "Professional graphic design services for branding, marketing collaterals, digital creatives, infographics & print designs. Elevate your brand visually.",
  keywords: [
    "Graphic Design Services",
    "Professional Graphic Design",
    "Creative Graphic Designers",
    "Marketing Collateral Design",
    "Digital Graphic Design",
    "Brand Graphic Design",
    "Graphic Design Company in India",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/graphic-design-services",
  },
  openGraph: {
    title: "Graphic Design Services | Creative & Professional Designs",
    description:
      "High-quality graphic design services for digital, print & marketing materials that strengthen your brand identity.",
    url: "https://www.digitalsolution360.com/graphic-design-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/graphic-design-hero.webp",
        width: 1200,
        height: 630,
        alt: "Graphic Design Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Services | Digital Solution 360",
    description:
      "Creative graphic design services for branding, digital marketing & print media.",
    images: [
      "https://www.digitalsolution360.com/services/graphic-design-hero.webp",
    ],
  },
};

export default function Page() {
  return <GraphicDesignPage />;
}

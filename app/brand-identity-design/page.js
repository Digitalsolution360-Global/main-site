import BrandIdentityDesignPage from "./client";

export const metadata = {
  title: "Brand Identity Design Services in India | Brand Identity Agency",
  description:
    "Professional brand identity design services including logo design, typography, color systems & brand guidelines to build a strong brand presence.",
  keywords: [
    "Brand Identity Design",
    "Brand Identity Services",
    "Brand Identity Agency",
    "Logo and Brand Identity",
    "Visual Identity Design",
    "Brand Guidelines Design",
    "Brand Identity Company in India",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/brand-identity-design",
  },
  openGraph: {
    title: "Brand Identity Design Services | Build a Strong Brand",
    description:
      "Create a consistent and powerful brand identity with expert logo, typography & visual identity design services.",
    url: "https://www.digitalsolution360.com/brand-identity-design",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/brand-identity-hero.webp",
        width: 1200,
        height: 630,
        alt: "Brand Identity Design",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Identity Design | Digital Solution 360",
    description:
      "Logo design, visual identity, brand guidelines & creative branding services.",
    images: [
      "https://www.digitalsolution360.com/services/brand-identity-hero.webp",
    ],
  },
};

export default function Page() {
  return <BrandIdentityDesignPage />;
}

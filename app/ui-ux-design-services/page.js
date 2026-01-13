// app/ui-ux-design-services/page.js
import UiUxDesignServicesPage from "./client";

export const metadata = {
  title:
    "UI/UX Design Services | User-Centered & Conversion-Focused - Digital Solution 360",
  description:
    "Digital Solution 360 provides professional UI/UX design services, creating intuitive, engaging, and conversion-focused digital experiences for web and mobile.",
  keywords:
    "UI UX design services, user experience design, user interface design, conversion-focused design, responsive UI UX, web design India, Digital Solution 360",
  alternates: {
    canonical: "https://www.digitalsolution360.com/ui-ux-design-services",
  },
  openGraph: {
    title: "UI/UX Design Services | Digital Solution 360",
    description:
      "Create intuitive, engaging, and conversion-focused digital experiences with Digital Solution 360's UI/UX design services.",
    url: "https://www.digitalsolution360.com/ui-ux-design-services",
    siteName: "Digital Solution 360",
    type: "website",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/ui-ux-design-hero.webp",
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services - Digital Solution 360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services | Digital Solution 360",
    description:
      "Create intuitive, engaging, and conversion-focused digital experiences with Digital Solution 360's UI/UX design services.",
    images: [
      "https://www.digitalsolution360.com/services/ui-ux-design-hero.webp",
    ],
  },
};

export default function Page() {
  return <UiUxDesignServicesPage />;
}

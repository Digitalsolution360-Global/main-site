// app/sales-funnel-automation/page.js
import SalesFunnelAutomationPage from "./client";

export const metadata = {
  title: "Sales Funnel Automation | Convert Leads into Customers",
  description:
    "Automate your sales funnels to capture, nurture, and convert leads into paying customers efficiently with Digital Solution 360.",
  keywords: [
    "Sales Funnel Automation",
    "Lead Nurturing",
    "Funnel Optimization",
    "Workflow Automation",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/sales-funnel-automation",
  },
  openGraph: {
    title: "Sales Funnel Automation | Convert Leads into Customers",
    description:
      "Boost conversions and revenue with automated sales funnels. Automate workflows, lead nurturing, and funnel optimization.",
    url: "https://www.digitalsolution360.com/sales-funnel-automation",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/sales-funnel-automation-hero.webp",
        width: 1200,
        height: 630,
        alt: "Sales Funnel Automation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Funnel Automation | Convert Leads into Customers",
    description:
      "Automate your sales funnels to turn leads into customers with smart workflows, automation, and funnel optimization.",
    images: [
      "https://www.digitalsolution360.com/services/sales-funnel-automation-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SalesFunnelAutomationPage />;
}

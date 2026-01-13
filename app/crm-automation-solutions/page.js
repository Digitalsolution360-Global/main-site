// app/crm-automation-solutions/page.js
import CRMAutomationPage from "./client";

export const metadata = {
  title: "CRM Automation Solutions | Automate Sales & Customer Management",
  description:
    "Boost productivity and close more deals with CRM automation solutions. Automate workflows, manage customer data, and track performance effectively.",
  keywords: [
    "CRM Automation Solutions",
    "CRM Workflow Automation",
    "Sales Pipeline Automation",
    "Customer Data Automation",
    "CRM Integration",
    "CRM Automation Agency",
    "Automated CRM Workflows",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/crm-automation-solutions",
  },
  openGraph: {
    title: "CRM Automation Solutions | Sales & Customer Management Automation",
    description:
      "Streamline your sales pipeline and customer management with professional CRM automation services.",
    url: "https://www.digitalsolution360.com/crm-automation-solutions",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/crm-automation-hero.webp",
        width: 1200,
        height: 630,
        alt: "CRM Automation Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Automation Solutions | Automate Your Sales & Customer Management",
    description:
      "Professional CRM automation agency helping businesses automate customer workflows, manage sales pipelines, and improve efficiency.",
    images: [
      "https://www.digitalsolution360.com/services/crm-automation-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CRMAutomationPage />;
}

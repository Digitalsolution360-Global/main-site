// app/lead-automation-services/page.js
import LeadAutomationPage from "./client";

export const metadata = {
  title: "Lead Automation Services | Capture, Nurture & Convert Leads",
  description:
    "Automate your lead generation and nurturing processes with our Lead Automation Services. Capture leads, qualify them, and boost conversions efficiently.",
  keywords: [
    "Lead Automation Services",
    "Automated Lead Capture",
    "Lead Qualification Automation",
    "Lead Scoring Services",
    "CRM Lead Routing",
    "Lead Nurturing Automation",
    "Marketing Automation Agency",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/lead-automation-services",
  },
  openGraph: {
    title: "Lead Automation Services | Automate Lead Capture & Nurturing",
    description:
      "Convert more leads efficiently with professional lead automation services, including automated capture, scoring, routing, and nurturing.",
    url: "https://www.digitalsolution360.com/lead-automation-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/lead-automation-hero.webp",
        width: 1200,
        height: 630,
        alt: "Lead Automation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Automation Services | Automate Lead Capture & Nurturing",
    description:
      "Boost your sales with Lead Automation Services. Capture, qualify, and nurture leads automatically for higher conversions.",
    images: [
      "https://www.digitalsolution360.com/services/lead-automation-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <LeadAutomationPage />;
}

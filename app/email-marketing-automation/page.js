// app/email-marketing-automation/page.js
import EmailAutomationPage from "./client";

export const metadata = {
  title: "Email Marketing Automation Services | Automate Email Campaigns",
  description:
    "Automate your email campaigns with our Email Marketing Automation Services. Send drip campaigns, trigger emails, and track performance to increase conversions.",
  keywords: [
    "Email Marketing Automation",
    "Automated Email Campaigns",
    "Drip Email Automation",
    "Trigger-Based Emails",
    "Email Analytics & Optimization",
    "Marketing Automation Agency",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/email-marketing-automation",
  },
  openGraph: {
    title: "Email Marketing Automation Services | Automate Your Campaigns",
    description:
      "Boost engagement and conversions with Email Marketing Automation. Schedule emails, send behavior-based triggers, and optimize campaigns effectively.",
    url: "https://www.digitalsolution360.com/email-marketing-automation",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/email-automation-hero.webp",
        width: 1200,
        height: 630,
        alt: "Email Marketing Automation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing Automation Services | Automate Your Campaigns",
    description:
      "Increase engagement and conversions with smart Email Marketing Automation. Schedule, trigger, and optimize emails automatically.",
    images: [
      "https://www.digitalsolution360.com/services/email-automation-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <EmailAutomationPage />;
}

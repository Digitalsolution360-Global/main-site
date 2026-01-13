// app/whatsapp-automation-services/page.js
import WhatsAppAutomationPage from "./client";

export const metadata = {
  title: "WhatsApp Automation Services | Automate Customer Messaging",
  description:
    "Automate WhatsApp conversations for instant customer communication, lead handling, and broadcasts with WhatsApp Automation Services by Digital Solution 360.",
  keywords: [
    "WhatsApp Automation",
    "WhatsApp Business API",
    "WhatsApp Chatbot",
    "Automated Messaging",
    "Broadcast Automation",
    "Digital Solution 360",
  ],
  alternates: {
    canonical: "https://www.digitalsolution360.com/whatsapp-automation-services",
  },
  openGraph: {
    title: "WhatsApp Automation Services | Automate Customer Messaging",
    description:
      "Boost engagement and sales with WhatsApp Automation. Use AI chatbots, automated broadcasts, and performance tracking to improve communication.",
    url: "https://www.digitalsolution360.com/whatsapp-automation-services",
    siteName: "Digital Solution 360",
    images: [
      {
        url: "https://www.digitalsolution360.com/services/whatsapp-automation-hero.webp",
        width: 1200,
        height: 630,
        alt: "WhatsApp Automation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Automation Services | Automate Customer Messaging",
    description:
      "Engage customers instantly and scale conversations with WhatsApp Automation. Automate messages, broadcasts, and chatbots for better ROI.",
    images: [
      "https://www.digitalsolution360.com/services/whatsapp-automation-hero.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <WhatsAppAutomationPage />;
}

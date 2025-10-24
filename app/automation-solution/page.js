import AutomationSolutionClient from './automationClient'

export const metadata = {
  title: 'Automation Solutions - Business Process Automation | Digital Solution 360',
  description: 'Streamline your business with automation solutions. We offer workflow automation, marketing automation, CRM integration, and custom automation tools. Boost efficiency today!',
  keywords: 'business automation, workflow automation, marketing automation, CRM integration, process automation, automation tools, business efficiency',
  openGraph: {
    title: 'Automation Solutions - Business Process Automation | Digital Solution 360',
    description: 'Streamline your business with automation solutions. We offer workflow automation, marketing automation, CRM integration, and custom automation tools.',
    url: 'https://www.digitalsolution360.com/automation-solution',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Automation Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automation Solutions - Business Process Automation | Digital Solution 360',
    description: 'Streamline your business with automation solutions.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/automation-solution',
  },
}

export default function AutomationSolutionPage() {
  return <AutomationSolutionClient />
}

import ORMServicesClient from './ormServicesClient'

export const metadata = {
  title: 'ORM Services - Online Reputation Management | Digital Solution 360',
  description: 'Protect and enhance your brand reputation with our ORM services. We monitor, manage, and improve your online presence to build trust and credibility.',
  keywords: 'ORM services, online reputation management, brand reputation, social media management, reviews monitoring, digital reputation, business credibility',
  openGraph: {
    title: 'ORM Services - Online Reputation Management | Digital Solution 360',
    description: 'Protect and enhance your brand reputation with our ORM services. Monitor reviews, manage online presence, and build trust with your audience.',
    url: 'https://www.digitalsolution360.com/orm-services',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/orm-hero.webp',
        width: 1200,
        height: 630,
        alt: 'ORM Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORM Services - Online Reputation Management | Digital Solution 360',
    description: 'Enhance your brand reputation with our ORM services.',
    images: ['https://www.digitalsolution360.com/services/orm-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/orm-services',
  },
}

export default function ORMServicesPage() {
  return <ORMServicesClient />
}

import ManagedServiceClient from './managedClient'

export const metadata = {
  title: 'Managed Services - IT Support & Maintenance | Digital Solution 360',
  description: 'Get reliable managed services for your business. We offer IT support, website maintenance, security monitoring, and technical assistance. Focus on growth while we handle the rest!',
  keywords: 'managed services, IT support, website maintenance, technical support, security monitoring, managed IT, business support services',
  openGraph: {
    title: 'Managed Services - IT Support & Maintenance | Digital Solution 360',
    description: 'Get reliable managed services for your business. We offer IT support, website maintenance, security monitoring, and technical assistance.',
    url: 'https://www.digitalsolution360.com/managed-service',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Managed Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed Services - IT Support & Maintenance | Digital Solution 360',
    description: 'Get reliable managed services for your business.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/managed-service',
  },
}

export default function ManagedServicePage() {
  return <ManagedServiceClient />
}

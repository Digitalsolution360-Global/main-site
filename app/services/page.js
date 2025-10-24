import ServicesPageClient from './servicesClient'

export const metadata = {
  title: 'Our Services - Digital Marketing & Web Development Solutions | Digital Solution 360',
  description: 'Discover our comprehensive digital services including SEO, web development, app development, social media marketing, branding, and more to grow your business online.',
  keywords: 'digital marketing services, web development services, SEO services, app development, social media marketing, branding services, digital solutions',
  openGraph: {
    title: 'Our Services - Digital Marketing & Web Development Solutions | Digital Solution 360',
    description: 'Discover our comprehensive digital services to grow your business online.',
    url: 'https://www.digitalsolution360.com/services',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Digital Marketing & Web Development Solutions | Digital Solution 360',
    description: 'Discover our comprehensive digital services to grow your business online.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/services',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}

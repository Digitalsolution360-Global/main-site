import DigitalMarketingClient from './digitalClient'

export const metadata = {
  title: 'Digital Marketing Services - SEO, PPC, Social Media | Digital Solution 360',
  description: 'Boost your online presence with expert digital marketing services. We offer SEO, PPC, social media marketing, content marketing, and email campaigns. Get results-driven strategies today!',
  keywords: 'digital marketing services, SEO services, PPC advertising, social media marketing, content marketing, email marketing, online marketing, digital marketing agency',
  openGraph: {
    title: 'Digital Marketing Services - SEO, PPC, Social Media | Digital Solution 360',
    description: 'Boost your online presence with expert digital marketing services. We offer SEO, PPC, social media marketing, content marketing, and email campaigns.',
    url: 'https://www.digitalsolution360.com/digital-marketing',
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
    title: 'Digital Marketing Services - SEO, PPC, Social Media | Digital Solution 360',
    description: 'Boost your online presence with expert digital marketing services. We offer SEO, PPC, social media marketing, and more.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/digital-marketing',
  },
}

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />
}

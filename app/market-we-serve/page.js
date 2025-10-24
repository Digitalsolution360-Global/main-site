import MarketWeServePageClient from './marketClient'

export const metadata = {
  title: 'Markets We Serve - Local Digital Marketing Services | Digital Solution 360',
  description: 'We provide digital marketing and web development services across multiple cities, states, and countries. Find expert local SEO, web development, and GMB services in your area.',
  keywords: 'local digital marketing, local SEO services, web development by location, GMB services, city-wise digital marketing, regional digital services',
  openGraph: {
    title: 'Markets We Serve - Local Digital Marketing Services | Digital Solution 360',
    description: 'Expert digital marketing and web development services across multiple locations.',
    url: 'https://www.digitalsolution360.com/market-we-serve',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Markets We Serve',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markets We Serve - Local Digital Marketing Services | Digital Solution 360',
    description: 'Expert digital marketing services across multiple locations.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/market-we-serve',
  },
}

export default function MarketWeServePage() {
  return <MarketWeServePageClient />
}

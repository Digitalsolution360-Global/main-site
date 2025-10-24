import PortfolioPageClient from './portfolioClient'

export const metadata = {
  title: 'Our Portfolio - Successful Digital Marketing Projects | Digital Solution 360',
  description: 'Explore our portfolio of successful digital marketing, web development, SEO, and Google My Business projects. See how we have helped businesses grow with proven results.',
  keywords: 'Digital Solution 360 portfolio, our work, case studies, successful projects, web development portfolio, SEO results, digital marketing projects, client success stories',
  openGraph: {
    title: 'Our Portfolio - Successful Digital Marketing Projects | Digital Solution 360',
    description: 'Explore our portfolio of successful digital marketing, web development, SEO, and Google My Business projects. See how we have helped businesses grow with proven results.',
    url: 'https://www.digitalsolution360.com/portfolio',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Digital Solution 360 Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Portfolio - Successful Digital Marketing Projects | Digital Solution 360',
    description: 'Explore our portfolio of successful digital marketing, web development, SEO, and Google My Business projects.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/portfolio',
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}

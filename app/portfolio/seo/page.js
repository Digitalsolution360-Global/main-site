import SEOPageClient from './seoPortClient'

export const metadata = {
  title: 'SEO Portfolio - Search Engine Optimization Results | Digital Solution 360',
  description: 'Explore our SEO portfolio showcasing successful search engine optimization campaigns, ranking improvements, and organic traffic growth for our clients.',
  keywords: 'SEO portfolio, SEO results, search rankings, organic traffic growth, SEO case studies, search optimization',
  openGraph: {
    title: 'SEO Portfolio - Search Engine Optimization Results | Digital Solution 360',
    description: 'Explore our SEO portfolio showcasing successful search engine optimization campaigns and ranking improvements.',
    url: 'https://www.digitalsolution360.com/portfolio/seo',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'SEO Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Portfolio - Search Engine Optimization Results | Digital Solution 360',
    description: 'Explore our SEO portfolio showcasing successful campaigns.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/portfolio/seo',
  },
}

export default function SEOPage() {
  return <SEOPageClient />
}

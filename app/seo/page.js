import SEOClient from './seoClient'

export const metadata = {
  title: 'SEO Services - Search Engine Optimization Experts | Digital Solution 360',
  description: 'Improve your search rankings with professional SEO services. We offer on-page SEO, off-page SEO, technical SEO, local SEO, and keyword research. Get more organic traffic today!',
  keywords: 'SEO services, search engine optimization, local SEO, technical SEO, SEO expert, keyword research, link building, SEO agency, organic traffic',
  openGraph: {
    title: 'SEO Services - Search Engine Optimization Experts | Digital Solution 360',
    description: 'Improve your search rankings with professional SEO services. Get more organic traffic with our expert SEO strategies.',
    url: 'https://www.digitalsolution360.com/seo',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'SEO Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services - Search Engine Optimization Experts | Digital Solution 360',
    description: 'Improve your search rankings with professional SEO services.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/seo',
  },
}

export default function SEOServicesPage() {
  return <SEOClient />
}

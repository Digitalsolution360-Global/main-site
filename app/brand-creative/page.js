import BrandCreativeClient from './brandClient'

export const metadata = {
  title: 'Brand & Creative Services - Logo Design, Branding | Digital Solution 360',
  description: 'Transform your brand with our creative services. We offer logo design, brand identity, graphic design, and visual content creation. Make your brand stand out today!',
  keywords: 'brand design, creative services, logo design, brand identity, graphic design, visual content, branding agency, corporate identity',
  openGraph: {
    title: 'Brand & Creative Services - Logo Design, Branding | Digital Solution 360',
    description: 'Transform your brand with our creative services. We offer logo design, brand identity, graphic design, and visual content creation.',
    url: 'https://www.digitalsolution360.com/brand-creative',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Brand & Creative Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand & Creative Services - Logo Design, Branding | Digital Solution 360',
    description: 'Transform your brand with our creative services.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/brand-creative',
  },
}

export default function BrandCreativePage() {
  return <BrandCreativeClient />
}

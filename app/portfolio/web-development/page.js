import WebDevPageClient from './webDevPortClient'

export const metadata = {
  title: 'Web Development Portfolio - Our Best Projects | Digital Solution 360',
  description: 'Explore our web development portfolio featuring custom websites, e-commerce platforms, and web applications. See our successful projects and client results.',
  keywords: 'web development portfolio, website projects, e-commerce websites, custom web development, web design portfolio, client websites',
  openGraph: {
    title: 'Web Development Portfolio - Our Best Projects | Digital Solution 360',
    description: 'Explore our web development portfolio featuring custom websites, e-commerce platforms, and web applications.',
    url: 'https://www.digitalsolution360.com/portfolio/web-development',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/portfolio/web-dev-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Web Development Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Portfolio - Our Best Projects | Digital Solution 360',
    description: 'Explore our web development portfolio featuring custom websites and web applications.',
    images: ['https://www.digitalsolution360.com/portfolio/web-dev-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/portfolio/web-development',
  },
}

export default function WebDevPage() {
  return <WebDevPageClient />
}

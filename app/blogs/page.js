import BlogsPageClient from './blogClient'

export const metadata = {
  title: 'Our Blog - Latest News & Insights | Digital Solution 360',
  description: 'Stay updated with the latest digital marketing trends, web development tips, SEO strategies, and technology insights from Digital Solution 360 experts.',
  keywords: 'digital marketing blog, web development articles, SEO tips, technology news, business insights, Digital Solution 360 blog',
  openGraph: {
    title: 'Our Blog - Latest News & Insights | Digital Solution 360',
    description: 'Stay updated with the latest digital marketing trends, web development tips, SEO strategies, and technology insights from Digital Solution 360 experts.',
    url: 'https://www.digitalsolution360.com/blogs',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Digital Solution 360 Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Blog - Latest News & Insights | Digital Solution 360',
    description: 'Stay updated with the latest digital marketing trends, web development tips, SEO strategies, and technology insights from Digital Solution 360 experts.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/blogs',
  },
}

export default function BlogsPage() {
  return <BlogsPageClient />
}
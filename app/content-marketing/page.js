import ContentMarketingClient from './contentMarketingClient'

export const metadata = {
  title: 'Content Marketing Services | Digital Solution 360',
  description: 'Boost your brand with our content marketing services. We offer content strategy, SEO articles, social media posts, email campaigns, and analytics to engage your audience and increase conversions.',
  keywords: 'content marketing, SEO content, social media marketing, email campaigns, content strategy, brand engagement, content analytics',
  openGraph: {
    title: 'Content Marketing Services | Digital Solution 360',
    description: 'Boost your brand with our content marketing services. We create SEO articles, social media posts, email campaigns, and track performance to grow your business.',
    url: 'https://www.digitalsolution360.com/content-marketing',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/content-marketing-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Content Marketing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Marketing Services | Digital Solution 360',
    description: 'Boost your brand with our content marketing services.',
    images: ['https://www.digitalsolution360.com/services/content-marketing-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/content-marketing',
  },
}

export default function ContentMarketingPage() {
  return <ContentMarketingClient />
}

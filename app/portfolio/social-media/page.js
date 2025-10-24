import SocialMediaPageClient from './socialPortClient'

export const metadata = {
  title: 'Social Media Portfolio - Successful Campaigns & Results | Digital Solution 360',
  description: 'View our social media marketing portfolio showcasing engaging campaigns, increased followers, and brand growth across Facebook, Instagram, LinkedIn, and more.',
  keywords: 'social media portfolio, social media campaigns, Instagram marketing, Facebook marketing, social media results, digital marketing portfolio',
  openGraph: {
    title: 'Social Media Portfolio - Successful Campaigns & Results | Digital Solution 360',
    description: 'View our social media marketing portfolio showcasing engaging campaigns and brand growth.',
    url: 'https://www.digitalsolution360.com/portfolio/social-media',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Social Media Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Portfolio - Successful Campaigns & Results | Digital Solution 360',
    description: 'View our social media marketing portfolio showcasing engaging campaigns.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/portfolio/social-media',
  },
}

export default function SocialMediaPage() {
  return <SocialMediaPageClient />
}

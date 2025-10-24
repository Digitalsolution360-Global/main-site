import AppDevPageClient from './appDevClient'

export const metadata = {
  title: 'App Development Portfolio - Mobile Apps We Built | Digital Solution 360',
  description: 'Discover our app development portfolio showcasing iOS, Android, and cross-platform mobile applications. See how we create engaging mobile experiences.',
  keywords: 'app development portfolio, mobile app projects, iOS apps, Android apps, mobile development, app design portfolio',
  openGraph: {
    title: 'App Development Portfolio - Mobile Apps We Built | Digital Solution 360',
    description: 'Discover our app development portfolio showcasing iOS, Android, and cross-platform mobile applications.',
    url: 'https://www.digitalsolution360.com/portfolio/app-development',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'App Development Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Development Portfolio - Mobile Apps We Built | Digital Solution 360',
    description: 'Discover our app development portfolio showcasing mobile applications.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/portfolio/app-development',
  },
}

export default function AppDevPage() {
  return <AppDevPageClient />
}

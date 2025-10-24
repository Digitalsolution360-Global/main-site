import AboutPageClient from './aboutClient'

export const metadata = {
  title: 'About Us - Digital Marketing & Web Development Company | Digital Solution 360',
  description: 'Learn about Digital Solution 360, a leading digital marketing and web development company. We help businesses grow with innovative solutions, expert teams, and proven strategies.',
  keywords: 'about Digital Solution 360, digital marketing company, web development agency, our story, our team, company values, mission and vision',
  openGraph: {
    title: 'About Us - Digital Marketing & Web Development Company | Digital Solution 360',
    description: 'Learn about Digital Solution 360, a leading digital marketing and web development company. We help businesses grow with innovative solutions, expert teams, and proven strategies.',
    url: 'https://www.digitalsolution360.com/about',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'About Digital Solution 360',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Digital Marketing & Web Development Company | Digital Solution 360',
    description: 'Learn about Digital Solution 360, a leading digital marketing and web development company. We help businesses grow with innovative solutions, expert teams, and proven strategies.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}

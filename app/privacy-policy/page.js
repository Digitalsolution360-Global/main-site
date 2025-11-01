import PrivacyPageClient from './privacyClient'

export const metadata = {
  title: 'Privacy Policy | Digital Solution 360',
  description: '',
  keywords: '',
  openGraph: {
    title: 'Privacy Policy | Digital Solution 360',
    description: '',
    url: 'https://www.digitalsolution360.com/privacy-policy',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy Digital Solution 360',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Digital Solution 360',
    description: '',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/privacy-policy',
  },
}

export default function PrivcyPage() {
  return <PrivacyPageClient />
}

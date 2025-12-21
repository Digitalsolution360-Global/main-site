import GoogleBusinessPageClient from './gmbPortClient'

export const metadata = {
  title: 'Google My Business Portfolio - GMB Success Stories | Digital Solution 360',
  description:
    'See our Google My Business optimization portfolio. Real results from local businesses we helped with GMB management, local SEO, and online visibility.',

  openGraph: {
    title: 'Google My Business Portfolio - GMB Success Stories | Digital Solution 360',
    description:
      'See our Google My Business optimization portfolio. Real results from local businesses we helped.',
    url: 'https://www.digitalsolution360.com/portfolio/google-my-business',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/portfolio/gmb-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Google My Business Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Google My Business Portfolio - GMB Success Stories | Digital Solution 360',
    description:
      'See our Google My Business optimization portfolio with real results.',
    images: ['https://www.digitalsolution360.com/portfolio/gmb-og-image.webp'],
  },

  alternates: {
    canonical: 'https://www.digitalsolution360.com/portfolio/google-my-business',
  },
}

export default function GoogleBusinessPage() {
  return <GoogleBusinessPageClient />
}

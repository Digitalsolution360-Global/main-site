import WebAppDevClient from './webAppDevClient'

export const metadata = {
  title: 'Web & App Development Services - Custom Solutions | Digital Solution 360',
  description: 'Professional web and app development services. We build custom websites, mobile apps, and web applications using latest technologies. Get scalable and secure solutions today!',
  keywords: 'web development, app development, mobile app development, custom website, web application, software development, React development, responsive design',
  openGraph: {
    title: 'Web & App Development Services - Custom Solutions | Digital Solution 360',
    description: 'Professional web and app development services. We build custom websites, mobile apps, and web applications using latest technologies.',
    url: 'https://www.digitalsolution360.com/web-app-development',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Web & App Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web & App Development Services - Custom Solutions | Digital Solution 360',
    description: 'Professional web and app development services. Build custom websites, mobile apps, and web applications.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/web-app-development',
  },
}

export default function WebAppDevPage() {
  return <WebAppDevClient />
}

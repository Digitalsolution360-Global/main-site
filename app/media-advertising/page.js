import MediaAdvertisingClient from './mediaClient'

export const metadata = {
  title: 'Media & Advertising Services - PPC, Display Ads | Digital Solution 360',
  description: 'Maximize your ROI with our media and advertising services. We offer PPC campaigns, display advertising, social media ads, and video marketing. Get targeted results today!',
  keywords: 'media advertising, PPC services, display advertising, social media ads, Google Ads, Facebook Ads, video marketing, online advertising',
  openGraph: {
    title: 'Media & Advertising Services - PPC, Display Ads | Digital Solution 360',
    description: 'Maximize your ROI with our media and advertising services. We offer PPC campaigns, display advertising, social media ads, and video marketing.',
    url: 'https://www.digitalsolution360.com/media-advertising',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Media & Advertising Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Advertising Services - PPC, Display Ads | Digital Solution 360',
    description: 'Maximize your ROI with our media and advertising services.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/media-advertising',
  },
}

export default function MediaAdvertisingPage() {
  return <MediaAdvertisingClient />
}

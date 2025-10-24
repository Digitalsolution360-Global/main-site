import CareersPageClient from './careersClient'

export const metadata = {
  title: 'Careers - Join Our Team of Digital Marketing Experts | Digital Solution 360',
  description: 'Explore exciting career opportunities at Digital Solution 360. Join our team of digital marketing, web development, SEO, and creative professionals. Apply now and grow with us!',
  keywords: 'careers at Digital Solution 360, job opportunities, digital marketing jobs, web developer jobs, SEO specialist jobs, hiring, work with us, join our team',
  openGraph: {
    title: 'Careers - Join Our Team of Digital Marketing Experts | Digital Solution 360',
    description: 'Explore exciting career opportunities at Digital Solution 360. Join our team of digital marketing, web development, SEO, and creative professionals. Apply now and grow with us!',
    url: 'https://www.digitalsolution360.com/careers',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Careers at Digital Solution 360',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Join Our Team of Digital Marketing Experts | Digital Solution 360',
    description: 'Explore exciting career opportunities at Digital Solution 360. Join our team of digital marketing, web development, SEO, and creative professionals.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/careers',
  },
}

export default function CareersPage() {
  return <CareersPageClient />
}

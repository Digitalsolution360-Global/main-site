import ContactPageClient from './contactClient'

export const metadata = {
  title: 'Contact Us - Get in Touch with Digital Marketing Experts | Digital Solution 360',
  description: 'Contact Digital Solution 360 for digital marketing, web development, SEO, and business solutions. Call +91 99905 56217 or fill our contact form. We are here to help your business grow.',
  keywords: 'contact Digital Solution 360, get in touch, digital marketing consultation, web development inquiry, SEO services contact, business inquiry, phone number, email address',
  openGraph: {
    title: 'Contact Us - Get in Touch with Digital Marketing Experts | Digital Solution 360',
    description: 'Contact Digital Solution 360 for digital marketing, web development, SEO, and business solutions. Call +91 99905 56217 or fill our contact form. We are here to help your business grow.',
    url: 'https://www.digitalsolution360.com/contact',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Digital Solution 360',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get in Touch with Digital Marketing Experts | Digital Solution 360',
    description: 'Contact Digital Solution 360 for digital marketing, web development, SEO, and business solutions. Call +91 99905 56217 or fill our contact form.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}

import { Figtree } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
};

export const metadata = {
  metadataBase: new URL('https://www.digitalsolution360.com'),
  title: {
    default: "Digital Solution 360 Digital Marketing Agency, SEO Services and Web Development Company.",
    template: "%s | Digital Solution 360"
  },
  description: "Digital Solution 360 is a performance based digital marketing firm that provides solutions to web development, SEO solutions, social media marketing, PPC management, and lead generation solutions to growing businesses.",
  keywords: [
    "digital marketing",
    "SEO services",
    "web development",
    "website design",
    "e-commerce development",
    "social media marketing",
    "brand design",
    "creative agency",
    "automation solutions",
    "managed IT services",
    "WordPress development",
    "Shopify development",
    "Google Ads",
    "Facebook Ads",
    "content marketing",
    "local SEO",
    "responsive web design",
    "mobile app development",
    "UI/UX design",
    "digital agency Dubai",
    "digital agency UAE",
    "digital agency England",
    "PPC advertising",
    "email marketing",
    "conversion rate optimization",
    "graphic design",
    "logo design",
    "RPA automation",
    "IT support services",
  ],
  authors: [{ name: "Digital Solution 360" }],
  creator: "Digital Solution 360",
  publisher: "Digital Solution 360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitalsolution360.com',
    siteName: 'Digital Solution 360',
    title: 'Digital Solution 360 - Expert SEO, Digital Marketing & Web Development',
    description: 'Elevate your brand with tailored digital marketing, SEO services, and web development solutions. Expert team delivering proven results.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Digital Solution 360 Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Solution 360 - Expert SEO, Digital Marketing & Web Development',
    description: 'Elevate your brand with tailored digital marketing, SEO services, and web development solutions.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com',
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Digital Solution 360',
    url: 'https://www.digitalsolution360.com',
    logo: 'https://www.digitalsolution360.com/logo.png',
    description: 'Expert digital marketing, SEO services, and web development agency',
    telephone: '+919990556217',
    email: 'globalweb3600@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AE',
    },
    sameAs: [
      // Add your social media links here when available
    ],
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '7',
      offers: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing Services',
            description: 'Comprehensive digital marketing solutions including SEO, social media, and PPC advertising',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            description: 'Custom website and e-commerce development services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            description: 'Search engine optimization to improve your online visibility',
          },
        },
      ],
    },
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Preconnect to external domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/home/images/offerings/digital-marketing.webp" />
          
          {/* DNS prefetch for analytics and external services */}
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body
          className={`${figtree.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

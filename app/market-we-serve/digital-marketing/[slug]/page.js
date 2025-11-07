import DigitalMarketingPageClient from './digitalMarketClient'

// Fetch location data for metadata generation
async function getLocationData(slug) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/locations/details/${slug}`, {
      cache: 'no-store'
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching location for metadata:', error)
    return null
  }
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params
  const data = await getLocationData(slug)
  
  if (!data || !data.location) {
    return {
      title: 'Digital Marketing Services | Digital Solution 360',
      description: 'Professional digital marketing services to grow your business online with proven strategies.',
    }
  }

  const { location, locationType } = data
  const locationName = locationType === 'city' 
    ? location.city 
    : locationType === 'state' 
    ? location.name 
    : location.name

  const title = `Digital Marketing Services in ${locationName} | Top Agency | Digital Solution 360`
  const description = `Grow your business with expert digital marketing services in ${locationName}. Digital Solution 360 offers SEO, social media marketing, PPC, content marketing, and more. Get a free consultation today!`
  const keywords = `digital marketing services ${locationName}, digital marketing agency ${locationName}, online marketing ${locationName}, social media marketing ${locationName}, PPC services ${locationName}, Digital Solution 360`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.digitalsolution360.com/market-we-serve/digital-marketing/${slug}`,
      siteName: 'Digital Solution 360',
      images: [
        {
          url: 'https://www.digitalsolution360.com/services/services-hero.webp',
          width: 1200,
          height: 630,
          alt: `Digital Marketing Services in ${locationName}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
    },
    alternates: {
      canonical: `https://www.digitalsolution360.com/market-we-serve/digital-marketing/${slug}`,
    },
  }
}

export default function DigitalMarketingPage({ params }) {
  return <DigitalMarketingPageClient params={params} />
}
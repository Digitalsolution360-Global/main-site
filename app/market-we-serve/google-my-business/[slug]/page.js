import GMBServicePageClient from './gmbMarketClient'

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
      title: 'Google My Business Services | Digital Solution 360',
      description: 'Professional Google My Business optimization to increase your local visibility and attract more customers.',
    }
  }

  const { location, locationType } = data
  const locationName = locationType === 'city' 
    ? location.city 
    : locationType === 'state' 
    ? location.name 
    : location.name

  const title = `Google My Business Services in ${locationName} | GMB Optimization | Digital Solution 360`
  const description = `Maximize your local presence with expert Google My Business services in ${locationName}. Digital Solution 360 offers GMB optimization, profile management, review management, and local SEO. Get started today!`
  const keywords = `Google My Business ${locationName}, GMB services ${locationName}, Google Business Profile ${locationName}, local business listing ${locationName}, GMB optimization ${locationName}, Digital Solution 360`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.digitalsolution360.com/market-we-serve/google-my-business/${slug}`,
      siteName: 'Digital Solution 360',
      images: [
        {
          url: 'https://www.digitalsolution360.com/services/services-hero.webp',
          width: 1200,
          height: 630,
          alt: `Google My Business Services in ${locationName}`,
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
      canonical: `https://www.digitalsolution360.com/market-we-serve/google-my-business/${slug}`,
    },
  }
}

export default function GMBServicePage({ params }) {
  return <GMBServicePageClient params={params} />
}

import WebDevServicePageClient from './webMarketClient'

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
      title: 'Website Development Services | Digital Solution 360',
      description: 'Professional website development services to help your business grow online.',
    }
  }

  const { location, locationType } = data
  const locationName = locationType === 'city' 
    ? location.city 
    : locationType === 'state' 
    ? location.name 
    : location.name

  const title = `Website Development Company in ${locationName} | Digital Solution 360`
  const description = `Looking for professional website development services in ${locationName}? Digital Solution 360 offers custom web design, e-commerce solutions, and responsive websites. Get a free quote today!`
  const keywords = `website development ${locationName}, web design ${locationName}, website company ${locationName}, custom website ${locationName}, responsive website ${locationName}, e-commerce website ${locationName}, Digital Solution 360`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.digitalsolution360.com/market-we-serve/website-development/${slug}`,
      siteName: 'Digital Solution 360',
      images: [
        {
          url: 'https://www.digitalsolution360.com/services/services-hero.webp',
          width: 1200,
          height: 630,
          alt: `Website Development in ${locationName}`,
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
      canonical: `https://www.digitalsolution360.com/market-we-serve/website-development/${slug}`,
    },
  }
}

export default function WebDevServicePage({ params }) {
  return <WebDevServicePageClient params={params} />
}

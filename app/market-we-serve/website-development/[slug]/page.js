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

  const title = `Transform Your Business with Expert Web Development in ${locationName} | Digital Solution 360`
  const description = `Top Web Development Company in ${locationName}. We craft custom, high-performance websites and e-commerce solutions that drive measurable business growth and dominate search rankings. Future-proof your digital presence.`
  const keywords = `web development company ${locationName}, web development companies in ${locationName}, ${locationName} web development company, web development company in ${locationName}, web design company ${locationName}, web development ${locationName}, best web development company in ${locationName}, web development agency, web development services, web development ${locationName}, web design company in ${locationName}`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.digitalsolution360.com/${slug}`,
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
      canonical: `https://www.digitalsolution360.com/${slug}`,
    },
  }
}

export default function WebDevServicePage({ params }) {
  return <WebDevServicePageClient params={params} />
}

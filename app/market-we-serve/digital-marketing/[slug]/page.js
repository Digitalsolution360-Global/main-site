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

  const title = `Elevate Your Brand with ${locationName}'s Digital Marketing Services`
  const description = `Build your success in the ${locationName} digital marketing. We offer expert SEO services in ${locationName} and across the Emirates, creating responsive, high-performance websites optimized for business growth.`
  const keywords = `digital marketing services in ${locationName}, digital marketing services ${locationName}, digital marketing services in ${locationName}, digital marketing services in ${locationName}, ecommerce digital marketing services ${locationName}, best digital marketing services, digital marketing services company, agency digital marketing services, ${locationName} digital marketing services, affordable digital marketing services in ${locationName}`

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
      canonical: `https://www.digitalsolution360.com/${slug}`,
    },
  }
}

export default function DigitalMarketingPage({ params }) {
  return <DigitalMarketingPageClient params={params} />
}
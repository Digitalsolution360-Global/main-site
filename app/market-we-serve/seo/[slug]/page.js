import SEOServicePageClient from './seoMarketClient'

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
      title: 'SEO Services | Digital Solution 360',
      description: 'Professional SEO services to improve your search engine rankings and drive organic traffic.',
    }
  }

  const { location, locationType } = data
  const locationName = locationType === 'city' 
    ? location.city 
    : locationType === 'state' 
    ? location.name 
    : location.name

  const title = `SEO Services in ${locationName} | Best SEO Company | Digital Solution 360`
  const description = `Boost your online visibility with expert SEO services in ${locationName}. Digital Solution 360 offers local SEO, technical SEO, content optimization, and link building. Get a free SEO audit today!`
  const keywords = `SEO services ${locationName}, SEO company ${locationName}, search engine optimization ${locationName}, local SEO ${locationName}, SEO expert ${locationName}, Digital Solution 360`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.digitalsolution360.com/market-we-serve/seo/${slug}`,
      siteName: 'Digital Solution 360',
      images: [
        {
          url: 'https://www.digitalsolution360.com/services/services-hero.webp',
          width: 1200,
          height: 630,
          alt: `SEO Services in ${locationName}`,
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
      canonical: `https://www.digitalsolution360.com/market-we-serve/seo/${slug}`,
    },
  }
}

export default function SEOServicePage({ params }) {
  return <SEOServicePageClient params={params} />
}

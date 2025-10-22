import { getCityDetails, getStateDetails, getCountryDetails } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    
    // Try to find as city first
    let location = await getCityDetails(slug);
    let locationType = 'city';
    
    // If not found as city, try as state
    if (!location) {
      location = await getStateDetails(slug);
      locationType = 'state';
    }
    
    // If not found as state, try as country
    if (!location) {
      location = await getCountryDetails(slug);
      locationType = 'country';
    }
    
    if (!location) {
      return Response.json({ error: 'Location not found' }, { status: 404 });
    }

    // Determine service type based on slug
    let serviceType = 'website-development';
    if (slug.includes('google-my-business') || slug.includes('gmb')) {
      serviceType = 'google-my-business';
    } else if (slug.includes('seo-service')) {
      serviceType = 'seo';
    } else if (slug.includes('content-writer')) {
      serviceType = 'content-writing';
    }

    return Response.json({
      location,
      locationType,
      serviceType
    });
  } catch (error) {
    console.error('Error fetching location details:', error);
    return Response.json({ error: 'Failed to fetch location details' }, { status: 500 });
  }
}

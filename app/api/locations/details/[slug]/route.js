import { getCityDetails, getStateDetails, getCountryDetails } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    
    // Determine service type based on which slug column matched
    let serviceType = 'website-development';
    
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

    // Determine service type by checking which slug column matched
    if (location.gmb_slug === slug) {
      serviceType = 'google-my-business';
    } else if (location.seo_slug === slug) {
      serviceType = 'seo';
    } else if (location.content_slug === slug) {
      serviceType = 'content-writing';
    } else if (location.web_slug === slug) {
      serviceType = 'website-development';
    }

    // Add appropriate parent slugs based on service type
    if (locationType === 'city') {
      if (serviceType === 'google-my-business') {
        location.state_slug = location.state_gmb_slug;
        location.country_slug = location.country_gmb_slug;
      } else if (serviceType === 'seo') {
        location.state_slug = location.state_seo_slug;
        location.country_slug = location.country_seo_slug;
      } else {
        location.state_slug = location.state_web_slug;
        location.country_slug = location.country_web_slug;
      }
    } else if (locationType === 'state') {
      if (serviceType === 'google-my-business') {
        location.country_slug = location.country_gmb_slug;
      } else if (serviceType === 'seo') {
        location.country_slug = location.country_seo_slug;
      } else {
        location.country_slug = location.country_web_slug;
      }
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

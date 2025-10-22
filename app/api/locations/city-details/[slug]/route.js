import { getCityDetails } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const city = await getCityDetails(slug);
    
    if (!city) {
      return Response.json({ error: 'City not found' }, { status: 404 });
    }

    return Response.json({
      city_name: city.name,
      state_name: city.state_name,
      state_id: city.state_id,
      country_name: city.country_name,
      country_id: city.country_id
    });
  } catch (error) {
    console.error('Error fetching city details:', error);
    return Response.json({ error: 'Failed to fetch city details' }, { status: 500 });
  }
}

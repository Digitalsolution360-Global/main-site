import { getStatesByCountry } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { countryId } = await params;
    const states = await getStatesByCountry(countryId);
    return Response.json({ states });
  } catch (error) {
    console.error('Error fetching states:', error);
    return Response.json({ error: 'Failed to fetch states' }, { status: 500 });
  }
}

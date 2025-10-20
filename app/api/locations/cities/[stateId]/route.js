import { getCitiesByState } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { stateId } = params;
    const cities = await getCitiesByState(stateId);
    return Response.json({ cities });
  } catch (error) {
    console.error('Error fetching cities:', error);
    return Response.json({ error: 'Failed to fetch cities' }, { status: 500 });
  }
}

import { getCountries } from '@/lib/db';

export async function GET() {
  try {
    const countries = await getCountries();
    return Response.json({ countries });
  } catch (error) {
    console.error('Error fetching countries:', error);
    return Response.json({ error: 'Failed to fetch countries' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const sql = 'SELECT * FROM leads ORDER BY created_at DESC';
    const leads = await query(sql);
    return NextResponse.json({ leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      city, 
      website, 
      priority, 
      lead_status, 
      follow_up_date, 
      next_follow_up_date, 
      business_type, 
      remarks 
    } = body;

    if (!name || !phone || !business_type) {
      return NextResponse.json(
        { error: 'Name, phone, and business type are required' },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO leads (
        name, email, phone, city, website, priority, lead_status, 
        follow_up_date, next_follow_up_date, business_type, remarks
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await query(sql, [
      name,
      email || null,
      phone,
      city || null,
      website || null,
      priority || 'medium',
      lead_status || 'new',
      follow_up_date || null,
      next_follow_up_date || null,
      business_type,
      remarks || null
    ]);

    return NextResponse.json({ success: true, message: 'Lead created successfully' });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}

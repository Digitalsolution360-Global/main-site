import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lead_id = searchParams.get('lead_id');

    if (!lead_id) {
      return NextResponse.json(
        { error: 'Lead ID is required' },
        { status: 400 }
      );
    }

    const sql = `
      SELECT * FROM leads_history 
      WHERE lead_id = ? 
      ORDER BY created_at DESC
    `;
    
    const history = await query(sql, [lead_id]);
    return NextResponse.json({ history });
  } catch (error) {
    console.error('Error fetching lead history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch lead history' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { lead_id, remarks, follow_up_date } = body;

    if (!lead_id || !remarks) {
      return NextResponse.json(
        { error: 'Lead ID and remarks are required' },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO leads_history (lead_id, remarks, follow_up_date)
      VALUES (?, ?, ?)
    `;

    await query(sql, [lead_id, remarks, follow_up_date]);

    return NextResponse.json({ 
      message: 'History entry created successfully' 
    });
  } catch (error) {
    console.error('Error creating lead history:', error);
    return NextResponse.json(
      { error: 'Failed to create lead history' },
      { status: 500 }
    );
  }
}

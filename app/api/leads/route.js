import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    // Fetch leads with their latest history entry
    const sql = `
      SELECT 
        l.*,
        lh.remarks as latest_remark,
        lh.follow_up_date as latest_follow_up_date,
        lh.created_at as latest_remark_date,
        CASE 
          WHEN DATE(l.created_at) = CURDATE() THEN 1 
          ELSE 0 
        END as is_created_today
      FROM leads l
      LEFT JOIN (
        SELECT lead_id, remarks, follow_up_date, created_at,
        ROW_NUMBER() OVER (PARTITION BY lead_id ORDER BY created_at DESC) as rn
        FROM leads_history
      ) lh ON l.id = lh.lead_id AND lh.rn = 1
      ORDER BY l.created_at DESC
    `;
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
        follow_up_date, next_follow_up_date, business_type, remarks, created_at, updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
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

import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const sql = 'SELECT * FROM leads WHERE id = ?';
    const leads = await query(sql, [id]);
    
    if (!leads || leads.length === 0) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ lead: leads[0] });
  } catch (error) {
    console.error('Error fetching lead:', error);
    return NextResponse.json(
      { error: 'Failed to fetch lead' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
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
      UPDATE leads 
      SET name = ?, email = ?, phone = ?, city = ?, website = ?, priority = ?, 
          lead_status = ?, follow_up_date = ?, next_follow_up_date = ?, 
          business_type = ?, remarks = ?, updated_at = NOW()
      WHERE id = ?
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
      remarks || null,
      id
    ]);

    return NextResponse.json({ success: true, message: 'Lead updated successfully' });
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    const sql = 'DELETE FROM leads WHERE id = ?';
    await query(sql, [id]);

    return NextResponse.json({ success: true, message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Error deleting lead:', error);
    return NextResponse.json(
      { error: 'Failed to delete lead' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

// GET single contact
export async function GET(request, { params }) {
  try {
    await auth.protect();
    
    const { id } = await params;
    
    const sql = 'SELECT * FROM contacts WHERE id = ?';
    const results = await query(sql, [id]);
    
    if (results.length === 0) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { success: true, contact: results[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching contact:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact' },
      { status: 500 }
    );
  }
}

// UPDATE contact
export async function PUT(request, { params }) {
  try {
    await auth.protect();
    
    const { id } = await params;
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      country_code,
      company,
      website,
      services,
      message,
      source,
      page_url
    } = body;
    
    const sql = `
      UPDATE contacts 
      SET name = ?, email = ?, phone = ?, country_code = ?, 
          company = ?, website = ?, services = ?, message = ?, 
          source = ?, page_url = ?
      WHERE id = ?
    `;
    
    await query(sql, [
      name, email, phone, country_code, company, 
      website, services, message, source, page_url, id
    ]);
    
    return NextResponse.json(
      { success: true, message: 'Contact updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json(
      { error: 'Failed to update contact' },
      { status: 500 }
    );
  }
}

// DELETE contact
export async function DELETE(request, { params }) {
  try {
    await auth.protect();
    
    const { id } = await params;
    
    const sql = 'DELETE FROM contacts WHERE id = ?';
    await query(sql, [id]);
    
    return NextResponse.json(
      { success: true, message: 'Contact deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact' },
      { status: 500 }
    );
  }
}

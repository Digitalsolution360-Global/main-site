import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      country_code = '+91',
      company = null,
      website = null,
      services = null,
      message = null,
      source = 'contact_form',
      page_url = null
    } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Insert contact into database
    const sql = `
      INSERT INTO contacts 
      (name, email, phone, country_code, company, website, services, message, source, page_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
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
    ];

    const result = await query(sql, params);

    return NextResponse.json(
      { 
        success: true,
        message: 'Contact saved successfully',
        contactId: result.insertId
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Failed to save contact. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve contacts (for admin purposes)
export async function GET(request) {
  try {
    await auth.protect();
    
    const { searchParams } = new URL(request.url);
    const source = searchParams.get('source');
    const page_url = searchParams.get('page_url');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let sql = 'SELECT * FROM contacts WHERE 1=1';
    const params = [];

    if (source) {
      sql += ' AND source = ?';
      params.push(source);
    }

    if (page_url) {
      sql += ' AND page_url = ?';
      params.push(page_url);
    }

    sql += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);

    const contacts = await query(sql, params);

    return NextResponse.json(
      { 
        success: true,
        contacts,
        count: contacts.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}

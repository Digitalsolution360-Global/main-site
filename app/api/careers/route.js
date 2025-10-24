import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      city,
      expected_salary = null,
      apply_for,
      resume_filename = null
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !city || !apply_for) {
      return NextResponse.json(
        { error: 'Name, email, phone, city, and position are required fields' },
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

    // Insert career application into database
    const sql = `
      INSERT INTO careers 
      (name, email, phone, city, expected_salary, apply_for, resume_filename)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      name,
      email,
      phone,
      city,
      expected_salary,
      apply_for,
      resume_filename
    ];

    const result = await query(sql, params);

    return NextResponse.json(
      { 
        success: true,
        message: 'Career application saved successfully',
        applicationId: result.insertId
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving career application:', error);
    return NextResponse.json(
      { error: 'Failed to save career application. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve career applications (for admin purposes)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const apply_for = searchParams.get('apply_for');
    const city = searchParams.get('city');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let sql = 'SELECT * FROM careers WHERE 1=1';
    const params = [];

    if (apply_for) {
      sql += ' AND apply_for = ?';
      params.push(apply_for);
    }

    if (city) {
      sql += ' AND city = ?';
      params.push(city);
    }

    sql += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);

    const applications = await query(sql, params);

    return NextResponse.json(
      { 
        success: true,
        applications,
        count: applications.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error fetching career applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch career applications' },
      { status: 500 }
    );
  }
}

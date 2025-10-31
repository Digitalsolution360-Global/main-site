import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const city = formData.get('city');
    const expected_salary = formData.get('expected_salary') || null;
    const apply_for = formData.get('apply_for');
    const resume = formData.get('resume'); // File input

    // Validate required fields
    if (!name || !email || !phone || !city || !apply_for || !resume) {
      return NextResponse.json(
        { error: 'All fields including resume are required' },
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

    // Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), 'public','careers');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Save the uploaded file
    const resumeBytes = await resume.arrayBuffer();
    const buffer = Buffer.from(resumeBytes);
    const fileName = `${Date.now()}_${resume.name}`;
    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, buffer);

    // Save entry to DB
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
      fileName
    ];

    const result = await query(sql, params);

    return NextResponse.json(
      { 
        success: true,
        message: 'Career application and resume uploaded successfully',
        applicationId: result.insertId,
        resume_url: `/uploads/careers/${fileName}`
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error uploading resume:', error);
    return NextResponse.json(
      { error: 'Failed to upload resume or save application.' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve career applications (for admin purposes)
export async function GET(request) {
  try {
    await auth.protect();
    
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

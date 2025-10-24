import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { auth } from '@clerk/nextjs/server';

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// GET - Fetch a single career application by ID
export async function GET(request, { params }) {
  try {
    await auth.protect();
    
    const { id } = params;
    
    if (!id) {
      return NextResponse.json({ 
        success: false, 
        message: 'Career ID is required' 
      }, { status: 400 });
    }

    const connection = await mysql.createConnection(dbConfig);
    
    const [rows] = await connection.execute(
      'SELECT * FROM careers WHERE id = ?',
      [id]
    );
    
    await connection.end();

    if (rows.length === 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'Career application not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      career: rows[0] 
    }, { status: 200 });

  } catch (error) {
    console.error('Error fetching career application:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Error fetching career application',
      error: error.message 
    }, { status: 500 });
  }
}

// PUT - Update a career application by ID
export async function PUT(request, { params }) {
  try {
    await auth.protect();
    
    const { id } = params;
    const body = await request.json();

    if (!id) {
      return NextResponse.json({ 
        success: false, 
        message: 'Career ID is required' 
      }, { status: 400 });
    }

    // Build update query dynamically based on provided fields
    const allowedFields = ['name', 'email', 'phone', 'city', 'expected_salary', 'apply_for', 'resume_filename'];
    const updates = [];
    const values = [];

    allowedFields.forEach(field => {
      if (body[field] !== undefined) {
        updates.push(`${field} = ?`);
        values.push(body[field]);
      }
    });

    if (updates.length === 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'No valid fields provided for update' 
      }, { status: 400 });
    }

    // Add id to values array for WHERE clause
    values.push(id);

    const connection = await mysql.createConnection(dbConfig);
    
    const [result] = await connection.execute(
      `UPDATE careers SET ${updates.join(', ')} WHERE id = ?`,
      values
    );
    
    await connection.end();

    if (result.affectedRows === 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'Career application not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Career application updated successfully' 
    }, { status: 200 });

  } catch (error) {
    console.error('Error updating career application:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Error updating career application',
      error: error.message 
    }, { status: 500 });
  }
}

// DELETE - Delete a career application by ID
export async function DELETE(request, { params }) {
  try {
    await auth.protect();
    
    const { id } = params;

    if (!id) {
      return NextResponse.json({ 
        success: false, 
        message: 'Career ID is required' 
      }, { status: 400 });
    }

    const connection = await mysql.createConnection(dbConfig);
    
    const [result] = await connection.execute(
      'DELETE FROM careers WHERE id = ?',
      [id]
    );
    
    await connection.end();

    if (result.affectedRows === 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'Career application not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Career application deleted successfully' 
    }, { status: 200 });

  } catch (error) {
    console.error('Error deleting career application:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Error deleting career application',
      error: error.message 
    }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import getPool from '@/lib/db';
const pool = getPool();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const city_id = searchParams.get('city_id');

    if (!city_id) {
      return NextResponse.json(
        { error: 'City ID is required' },
        { status: 400 }
      );
    }

    const [rows] = await pool.query(
      `
      SELECT * FROM global_cities_faqs 
      WHERE city_id = ? 
      ORDER BY serial_no ASC, created_at DESC
      `,
      [city_id]
    );

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error('GET CITY FAQS ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to fetch FAQs' },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { city_id, question, answer, serial_no } = body;

    const [result] = await pool.query(
      `
      INSERT INTO global_cities_faqs (city_id, question, answer, serial_no)
      VALUES (?, ?, ?, ?)
      `,
      [city_id, question, answer, serial_no || 0]
    );

    return NextResponse.json({
      success: true,
      id: result.insertId,
    });
  } catch (error) {
    console.error('CREATE CITY FAQ ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to create FAQ' },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, city_id, question, answer, serial_no } = body;

    await pool.query(
      `
      UPDATE global_cities_faqs 
      SET city_id = ?, question = ?, answer = ?, serial_no = ?
      WHERE id = ?
      `,
      [city_id, question, answer, serial_no || 0, id]
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error('UPDATE CITY FAQ ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to update FAQ' },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'FAQ ID is required' },
        { status: 400 }
      );
    }

    await pool.query('DELETE FROM global_cities_faqs WHERE id = ?', [id]);

    return NextResponse.json({
      success: true,
      message: 'FAQ deleted successfully',
    });
  } catch (error) {
    console.error('DELETE CITY FAQ ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to delete FAQ' },
      { status: 500 }
    );
  }
}
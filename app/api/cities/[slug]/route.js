// app/api/admin/cities/[slug]/route.js
import { NextRequest, NextResponse } from 'next/server';
import getPool from '@/lib/db';
const pool = getPool();

export async function GET(req, { params }) {
  try {
    const { slug } = params;

    const [rows] = await pool.query(
      `
      SELECT 
        city_id,
        state_id,
        city,
        category_name,
        slug,
        h1_title,
        description,
        image,
        meta_title,
        meta_description,
        meta_keyword,
        status,
        created_at,
        updated_at
      FROM global_cities
      WHERE slug = ?
      `,
      [slug]
    );

    const city = rows[0];

    if (!city) {
      return NextResponse.json(
        { error: 'City not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: city,
    });

  } catch (error) {
    console.error('GET CITY BY SLUG ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to fetch city' },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { slug } = await params;
    const body = await req.json();

    const {
      state_id,
      city,
      category_name,
      h1_title,
      description,
      image,
      meta_title,
      meta_description,
      meta_keyword,
      status,
    } = body;

    // Generate new slug from city if provided
    let finalSlug = body.slug;
    if (!finalSlug && city) {
      finalSlug = city
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }

    const [result] = await pool.query(
      `
      UPDATE global_cities
      SET
        state_id = ?,
        city = ?,
        category_name = ?,
        slug = ?,
        h1_title = ?,
        description = ?,
        image = ?,
        meta_title = ?,
        meta_description = ?,
        meta_keyword = ?,
        status = ?
      WHERE city_id = ?
      `,
      [
        state_id || null,
        city,
        category_name || null,
        finalSlug,
        h1_title || null,
        description || null,
        image || null,
        meta_title || null,
        meta_description || null,
        meta_keyword || null,
        status ?? 1,
        slug,
      ]
    );
    console.log("Slug:", slug);
console.log("Result:", result);
    return NextResponse.json({
      success: true,
      message: 'City updated successfully',
    });

  } catch (error) {
    console.error('UPDATE CITY BY SLUG ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to update city' },
      { status: 500 }
    );
  }
}

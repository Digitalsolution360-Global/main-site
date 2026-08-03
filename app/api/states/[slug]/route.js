// app/api/admin/states/[slug]/route.js
import { NextRequest, NextResponse } from 'next/server';
import getPool from '@/lib/db';
const pool = getPool();

export async function GET(req, { params }) {
  try {
    const { slug } = params;

    const [rows] = await pool.query(
      `
      SELECT 
        state_id,
        country_id,
        name,
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
      FROM global_states
      WHERE slug = ?
      `,
      [slug]
    );

    const state = rows[0];

    if (!state) {
      return NextResponse.json(
        { error: 'State not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: state,
    });

  } catch (error) {
    console.error('GET STATE BY SLUG ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to fetch state' },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { slug } = params;
    const body = await req.json();

    const {
      country_id,
      name,
      category_name,
      h1_title,
      description,
      image,
      meta_title,
      meta_description,
      meta_keyword,
      status,
    } = body;

    // Generate new slug from name if provided
    let finalSlug = body.slug;
    if (!finalSlug && name) {
      finalSlug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }

    await pool.query(
      `
      UPDATE global_states
      SET
        country_id = ?,
        name = ?,
        category_name = ?,
        slug = ?,
        h1_title = ?,
        description = ?,
        image = ?,
        meta_title = ?,
        meta_description = ?,
        meta_keyword = ?,
        status = ?
      WHERE state_id = ?
      `,
      [
        country_id || null,
        name,
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

    return NextResponse.json({
      success: true,
      message: 'State updated successfully',
    });

  } catch (error) {
    console.error('UPDATE STATE BY SLUG ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to update state' },
      { status: 500 }
    );
  }
}

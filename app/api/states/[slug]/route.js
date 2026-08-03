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
      WHERE slug = ?
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

export async function DELETE(req, { params }) {
  try {
    const { slug } = params;

    // Delete related records first
    try {
      await pool.query(
        'DELETE FROM global_cities WHERE state_id IN (SELECT state_id FROM global_states WHERE slug = ?)',
        [slug]
      );
    } catch (err) {
      console.log('No cities table or no records deleted');
    }

    const [result] = await pool.query(
      'DELETE FROM global_states WHERE slug = ?',
      [slug]
    );

    const affectedRows = result.affectedRows;
    
    if (affectedRows === 0) {
      return NextResponse.json(
        { error: 'State not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'State deleted successfully',
    });

  } catch (error) {
    console.error('DELETE STATE BY SLUG ERROR:', error);

    if (error.code === 'ER_ROW_IS_REFERENCED_2' || error.code === 'ER_ROW_IS_REFERENCED') {
      return NextResponse.json(
        { error: 'Cannot delete state because it has related records' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to delete state' },
      { status: 500 }
    );
  }
}
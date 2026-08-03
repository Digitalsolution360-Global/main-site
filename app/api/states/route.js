import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';

    const offset = (page - 1) * limit;

    let query = `
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
    `;

    let countQuery = `
      SELECT COUNT(*) as total
      FROM global_states
    `;

    const params = [];

    if (search) {
      query += `
        WHERE 
          name LIKE ? OR
          slug LIKE ? OR
          category_name LIKE ? OR
          h1_title LIKE ? OR
          meta_title LIKE ? OR
          meta_description LIKE ?
      `;

      countQuery += `
        WHERE 
          name LIKE ? OR
          slug LIKE ? OR
          category_name LIKE ? OR
          h1_title LIKE ? OR
          meta_title LIKE ? OR
          meta_description LIKE ?
      `;

      params.push(
        `%${search}%`,
        `%${search}%`,
        `%${search}%`,
        `%${search}%`,
        `%${search}%`,
        `%${search}%`
      );
    }

    query += `
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `;

    const [rows] = await pool.query(query, [
      ...params,
      limit,
      offset,
    ]);

    const [countResult] = await pool.query(countQuery, params);

    return NextResponse.json({
      data: rows,
      total: countResult[0].total,
      page,
      limit,
    });

  } catch (error) {
    console.error('GET STATES ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to fetch states' },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
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
    } = body;

    // Generate slug from name if not provided
    let finalSlug = slug;
    if (!finalSlug && name) {
      finalSlug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }

    const [result] = await pool.query(
      `
      INSERT INTO global_states (
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
        status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
      ]
    );

    return NextResponse.json({
      success: true,
      id: result.insertId,
    });

  } catch (error) {
    console.error('CREATE STATE ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to create state' },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();

    const {
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
    } = body;

    // Generate slug from name if not provided
    let finalSlug = slug;
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
        state_id,
      ]
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error('UPDATE STATE ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to update state' },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);

    const state_id = searchParams.get('state_id');

    if (!state_id) {
      return NextResponse.json(
        { error: 'State ID is required' },
        { status: 400 }
      );
    }

    // Delete related records first based on your foreign key constraints
    // Example: Delete from cities if exists
    try {
      await pool.query(
        'DELETE FROM global_cities WHERE state_id = ?',
        [state_id]
      );
    } catch (err) {
      console.log('No cities table or no records deleted');
    }

    // Delete state
    const [result] = await pool.query(
      'DELETE FROM global_states WHERE state_id = ?',
      [state_id]
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
    console.error('DELETE STATE ERROR:', error);

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
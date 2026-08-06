import { NextRequest, NextResponse } from 'next/server';
import getPool from '@/lib/db';
const pool = getPool();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';

    const offset = (page - 1) * limit;

    let query = `
      SELECT 
        c.city_id,
        c.state_id,
        c.city,
        c.category_name,
        c.slug,
        c.h1_title,
        c.description,
        c.image,
        c.meta_title,
        c.meta_description,
        c.meta_keyword,
        c.status,
        c.created_at,
        c.updated_at,
        s.name as state_name,
        s.country_id
      FROM global_cities c
      LEFT JOIN global_states s ON c.state_id = s.state_id
    `;

    let countQuery = `
      SELECT COUNT(*) as total
      FROM global_cities c
      LEFT JOIN global_states s ON c.state_id = s.state_id
    `;

    const params = [];

    if (search) {
      query += `
        WHERE 
          c.city LIKE ? OR
          c.slug LIKE ? OR
          c.category_name LIKE ? OR
          c.h1_title LIKE ? OR
          c.meta_title LIKE ? OR
          c.meta_description LIKE ?
      `;
      countQuery += `
        WHERE 
          c.city LIKE ? OR
          c.slug LIKE ? OR
          c.category_name LIKE ? OR
          c.h1_title LIKE ? OR
          c.meta_title LIKE ? OR
          c.meta_description LIKE ?
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

    // Country filter
    // if (countryId) {
    //   const hasWhere = query.includes('WHERE');
    //   query += hasWhere ? ' AND' : ' WHERE';
    //   query += ` s.country_id = ?`;
    //   countQuery += hasWhere ? ' AND' : ' WHERE';
    //   countQuery += ` s.country_id = ?`;
    //   params.push(parseInt(countryId));
    // }

    query += `
      ORDER BY c.created_at DESC
      LIMIT ? OFFSET ?
    `;

    const [rows] = await pool.query(query, [
      ...params,
      limit,
      offset,
    ]);

    const [countResult] = await pool.query(countQuery, params);

      const [cityCount] = await pool.query(`
  SELECT COUNT(*) AS total_cities
  FROM global_cities
`);

const totalCities = cityCount[0].total_cities;

    return NextResponse.json({
      data: rows,
      total: countResult[0].total,
      page,
      limit,
      totalCities,
    });

  } catch (error) {
    console.error('GET CITIES ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to fetch cities' },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
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
    } = body;

    // Generate slug from name if not provided
    let finalSlug = slug;
    if (!finalSlug && city) {
      finalSlug = city
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }

    const [result] = await pool.query(
      `
      INSERT INTO global_cities (
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
        status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
      ]
    );

    return NextResponse.json({
      success: true,
      id: result.insertId,
    });

  } catch (error) {
    console.error('CREATE CITIES ERROR:', error);

    return NextResponse.json(
      { error: 'Failed to create city' },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);

    const city_id = searchParams.get('city_id');

    if (!city_id) {
      return NextResponse.json(
        { error: 'City ID is required' },
        { status: 400 }
      );
    }


    // Delete city
    const [result] = await pool.query(
      'DELETE FROM global_cities WHERE city_id = ?',
      [city_id]
    );

    const affectedRows = result.affectedRows;
    
    if (affectedRows === 0) {
      return NextResponse.json(
        { error: 'City not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'City deleted successfully',
    });

  } catch (error) {
    console.error('DELETE CITY ERROR:', error);

    if (error.code === 'ER_ROW_IS_REFERENCED_2' || error.code === 'ER_ROW_IS_REFERENCED') {
      return NextResponse.json(
        { error: 'Cannot delete city because it has related records' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to delete city' },
      { status: 500 }
    );
  }
}
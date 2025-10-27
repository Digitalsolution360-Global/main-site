import { NextResponse } from 'next/server';
import { getAllBlogs, query } from '@/lib/db';

export async function GET() {
  try {
    const blogs = await getAllBlogs();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, slug, description, image, status, meta_title, meta_description, meta_keywords } = body;

    if (!title || !slug || !description) {
      return NextResponse.json(
        { error: 'Title, slug, and description are required' },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO blogs (title, slug, description, image, status, meta_title, meta_description, meta_keywords)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await query(sql, [
      title,
      slug,
      description,
      image || null,
      status || 0,
      meta_title || null,
      meta_description || null,
      meta_keywords || null
    ]);

    return NextResponse.json({ success: true, message: 'Blog created successfully' });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}

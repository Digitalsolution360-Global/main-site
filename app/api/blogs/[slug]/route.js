import { NextResponse } from 'next/server';
import { getBlogBySlug, query } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ blog });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { title, description, image, status, meta_title, meta_description, meta_keywords } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const sql = `
      UPDATE blogs 
      SET title = ?, description = ?, image = ?, status = ?, meta_title = ?, meta_description = ?, meta_keywords = ?, updated_at = NOW()
      WHERE slug = ?
    `;

    await query(sql, [
      title,
      description,
      image || null,
      status || 0,
      meta_title || null,
      meta_description || null,
      meta_keywords || null,
      slug
    ]);

    return NextResponse.json({ success: true, message: 'Blog updated successfully' });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { slug } = await params;

    const sql = 'DELETE FROM blogs WHERE slug = ?';
    await query(sql, [slug]);

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}

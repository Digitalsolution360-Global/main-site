import { NextResponse } from 'next/server';
import { getBlogBySlug } from '@/lib/db';

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

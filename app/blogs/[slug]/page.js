import BlogDetailPageClient from './blogSlugClient'
import { getBlogBySlug } from '@/lib/db'
import { notFound } from 'next/navigation'

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)
  
  if (!blog) {
    return {
      title: 'Blog Not Found | Digital Solution 360',
      description: 'The requested blog post could not be found.',
    }
  }

  // Strip HTML from description for meta description
  const stripHtml = (html) => html.replace(/<[^>]*>/g, '').substring(0, 160)
  const metaDescription = blog.meta_description || stripHtml(blog.description)

  return {
    title: blog.meta_title || `${blog.title} | Digital Solution 360`,
    description: metaDescription,
    keywords: blog.meta_keywords || `${blog.title}, digital marketing, web development, SEO, Digital Solution 360`,
    openGraph: {
      title: blog.meta_title || blog.title,
      description: metaDescription,
      url: `https://www.digitalsolution360.com/${slug}`,
      siteName: 'Digital Solution 360',
      images: [
        {
          url: `https://www.digitalsolution360.com/${blog.image}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.meta_title || blog.title,
      description: metaDescription,
      images: [`https://www.digitalsolution360.com/${blog.image}`],
    },
    alternates: {
      canonical: `https://www.digitalsolution360.com/${slug}`,
    },
  }
}

export default function BlogDetailPage({ params }) {
  return <BlogDetailPageClient params={params} />
}

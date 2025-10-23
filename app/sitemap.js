import { getAllBlogs } from '@/lib/db';

export default async function sitemap() {
  const baseUrl = 'https://www.digitalsolution360.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/portfolio',
    '/careers',
    '/blogs',
    '/market-we-serve',
  ];

  // Service pages
  const servicePages = [
    '/digital-marketing',
    '/web-app-development',
    '/seo',
    '/brand-creative',
    '/media-advertising',
    '/automation-solution',
    '/managed-service',
  ];

  const staticRoutes = [...staticPages, ...servicePages].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch blog posts dynamically
  let blogRoutes = [];
  try {
    const blogs = await getAllBlogs();
    blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(blog.updated_at || blog.created_at),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}

import { getAllBlogs, getAllCities, getAllStates, getAllCountriesForSitemap } from '@/lib/db';

// Helper function to escape XML special characters
function escapeXml(unsafe) {
  if (!unsafe) return unsafe;
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

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
    console.log(`[Sitemap] Fetched ${blogs?.length || 0} blogs`);
    
    if (blogs && Array.isArray(blogs)) {
      blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/${blog.slug}`,
        lastModified: new Date(blog.updated_at || blog.created_at),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
      console.log(`[Sitemap] Generated ${blogRoutes.length} blog routes`);
    } else {
      console.warn('[Sitemap] getAllBlogs returned non-array or empty result:', blogs);
    }
  } catch (error) {
    console.error('[Sitemap] Error fetching blogs for sitemap:', error);
  }

  // Fetch location pages dynamically
  let locationRoutes = [];
  try {
    const [cities, states, countries] = await Promise.all([
      getAllCities(),
      getAllStates(),
      getAllCountriesForSitemap()
    ]);

    console.log(`[Sitemap] Fetched ${cities?.length || 0} cities, ${states?.length || 0} states, ${countries?.length || 0} countries`);

    // Service configurations with their base paths and slug fields
    const services = [
      { path: '/market-we-serve/website-development', slugField: 'web_slug' },
      { path: '/market-we-serve/seo-service', slugField: 'seo_slug' },
      { path: '/market-we-serve/google-my-business-listing', slugField: 'gmb_slug' },
    ];

    // Generate routes for all cities
    cities?.forEach(city => {
      services.forEach(service => {
        if (city[service.slugField]) {
          locationRoutes.push({
            url: `${baseUrl}/${escapeXml(city[service.slugField])}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
          });
        }
      });
    });

    // Generate routes for all states
    states?.forEach(state => {
      services.forEach(service => {
        if (state[service.slugField]) {
          locationRoutes.push({
            url: `${baseUrl}/${escapeXml(state[service.slugField])}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
          });
        }
      });
    });

    // Generate routes for all countries
    countries?.forEach(country => {
      services.forEach(service => {
        if (country[service.slugField]) {
          locationRoutes.push({
            url: `${baseUrl}/${escapeXml(country[service.slugField])}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
          });
        }
      });
    });

    console.log(`[Sitemap] Generated ${locationRoutes.length} location routes`);
  } catch (error) {
    console.error('[Sitemap] Error fetching locations for sitemap:', error);
  }

  const finalRoutes = [...staticRoutes, ...blogRoutes, ...locationRoutes];
  console.log(`[Sitemap] Final routes count: Static=${staticRoutes.length}, Blogs=${blogRoutes.length}, Locations=${locationRoutes.length}, Total=${finalRoutes.length}`);
  
  return finalRoutes;
}

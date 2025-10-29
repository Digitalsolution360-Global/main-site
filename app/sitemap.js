import { getAllBlogs, getAllBlogsForSitemap, getAllCities, getAllStates, getAllCountriesForSitemap } from '@/lib/db';

/**
 * IMPORTANT NOTE ABOUT BLOG ROUTES IN SITEMAP:
 * 
 * If you see "Blog routes: 0" in the build logs, it means the database query timed out.
 * This is likely a database connectivity issue on Vercel (not localhost).
 * 
 * SOLUTIONS:
 * 1. Whitelist Vercel's IP addresses in your database firewall/security group
 *    - Vercel IPs vary by region. Check: https://vercel.com/docs/concepts/edge-network/regions
 *    - If using AWS: Add Vercel's IP range to your security group
 *    - If using PlanetScale/other managed DB: Add IPs to IP whitelist
 * 
 * 2. Check database SSL certificates (if applicable)
 * 
 * 3. Ensure database host is accessible from external networks
 * 
 * The code below will retry 3 times before giving up, so blog routes should appear
 * once database connectivity is fixed.
 */

// Helper function to fetch with timeout and retry
async function fetchWithTimeout(fetchFn, timeoutMs = 10000, retries = 2) {
  let lastError;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`[Sitemap] Attempt ${attempt}/${retries}: Starting fetch with ${timeoutMs}ms timeout...`);
      
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Fetch timeout')), timeoutMs)
      );
      
      const result = await Promise.race([fetchFn(), timeoutPromise]);
      console.log(`[Sitemap] Attempt ${attempt} succeeded`);
      return result;
    } catch (error) {
      lastError = error;
      console.warn(`[Sitemap] Attempt ${attempt} failed:`, error?.code || error?.message);
      
      if (attempt < retries) {
        // Wait before retrying (exponential backoff)
        const waitTime = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
        console.log(`[Sitemap] Waiting ${waitTime}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }
  
  throw lastError;
}

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

    // Fetch blog posts dynamically with timeout and retry
  let blogRoutes = [];
  try {
    console.log('[Sitemap] Starting blog fetch with retries...');
    const blogs = await fetchWithTimeout(() => getAllBlogsForSitemap(), 8000, 3);
    console.log(`[Sitemap] Fetched ${blogs?.length || 0} blogs`);
    
    if (blogs && Array.isArray(blogs) && blogs.length > 0) {
      blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/${blog.slug}`,
        lastModified: new Date(blog.updated_at || blog.created_at),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
      console.log(`[Sitemap] ✓ Generated ${blogRoutes.length} blog routes successfully`);
    } else {
      console.warn('[Sitemap] getAllBlogsForSitemap returned empty array');
    }
  } catch (error) {
    console.error('[Sitemap] ✗ Failed to fetch blogs after retries:', error?.code || error?.message);
    console.error('[Sitemap] IMPORTANT: Check if Vercel IP needs to be whitelisted in your database firewall');
    console.warn('[Sitemap] Continuing with 0 blog routes - this is expected if database is unreachable');
    blogRoutes = [];
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

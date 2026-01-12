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
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Fetch timeout')), timeoutMs)
      );
      
      const result = await Promise.race([fetchFn(), timeoutPromise]);
      return result;
    } catch (error) {
      lastError = error;
      
      if (attempt < retries) {
        // Wait before retrying (exponential backoff)
        const waitTime = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
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

// Service pages (BASE + ALL DETAILED SERVICES)
const servicePages = [

  // 🔹 Base / Parent Service Pages (OLD – KEEP)
  '/digital-marketing',
  '/web-app-development',
  '/seo',
  '/brand-creative',
  '/media-advertising',
  '/automation-solution',
  '/managed-service',

  // 🔹 Digital Marketing Services
  '/digital-marketing-services/',
  '/performance-marketing-services/',
  '/growth-marketing-services/',
  '/google-ads-management-services/',
  '/facebook-instagram-ads-services/',

  // 🔹 Website Development
  '/website-development-services/',
  '/web-design-services/',
  '/ui-ux-design-services/',
  '/wordpress-development-services/',
  '/shopify-development-services/',
  '/landing-page-design-services/',

  // 🔹 SEO Services
  '/seo-services/',
  '/local-seo-services/',
  '/ecommerce-seo-services/',
  '/technical-seo-services/',
  '/on-page-seo-services/',
  '/off-page-seo-services/',
  '/seo-audit-services/',
  '/ai-seo-services/',

  // 🔹 Brand & Creative
  '/branding-services/',
  '/brand-identity-design/',
  '/logo-design-services/',
  '/graphic-design-services/',
  '/creative-design-for-ads/',
  '/performance-creatives/',

  // 🔹 Social Media Marketing
  '/social-media-marketing-services/',
  '/social-media-management-services/',
  '/instagram-marketing-services/',
  '/facebook-marketing-services/',
  '/linkedin-marketing-services/',
  '/youtube-marketing-services/',
  '/influencer-marketing-services/',
  '/short-video-marketing/',

  // 🔹 Automation Solutions
  '/marketing-automation-services/',
  '/crm-automation-solutions/',
  '/lead-automation-services/',
  '/email-marketing-automation/',
  '/whatsapp-automation-services/',
  '/sales-funnel-automation/',
  '/ai-marketing-automation/',

  // 🔹 Managed Services
  '/digital-marketing-managed-services/',
  '/seo-managed-services/',
  '/ppc-managed-services/',
  '/social-media-managed-services/',
  '/startup-marketing-services/',
  '/saas-marketing-services/',
  '/ecommerce-marketing-services/',
  '/b2b-digital-marketing-services/',
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
    const blogs = await fetchWithTimeout(() => getAllBlogsForSitemap(), 8000, 3);
    
    if (blogs && Array.isArray(blogs) && blogs.length > 0) {
      blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/${blog.slug}`,
        lastModified: new Date(blog.updated_at || blog.created_at),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
    }
  } catch (error) {
    // Silently continue with 0 blog routes if database is unavailable
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
  
  return finalRoutes;
}

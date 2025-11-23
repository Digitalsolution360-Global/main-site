export const dynamic = "force-dynamic";

import { 
  getAllBlogsForSitemap, 
  getAllCities, 
  getAllStates, 
  getAllCountriesForSitemap 
} from "@/lib/db";

export async function GET() {
  const baseUrl = "https://www.digitalsolution360.com";

  let routes = [];

  // Fetch all routes
  const [blogs, cities, states, countries] = await Promise.all([
    getAllBlogsForSitemap(),
    getAllCities(),
    getAllStates(),
    getAllCountriesForSitemap()
  ]);

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/portfolio",
    "/careers",
    "/blogs",
    "/market-we-serve",
  ];

  const servicePages = [
    "/digital-marketing",
    "/web-app-development",
    "/seo",
    "/brand-creative",
    "/media-advertising",
    "/automation-solution",
    "/managed-service",
  ];

  routes = [
    ...staticPages.map(p => baseUrl + p),
    ...servicePages.map(p => baseUrl + p),
    ...blogs.filter(b => b?.slug).map(b => `${baseUrl}/${b.slug}`)
  ];

  // Add location routes
  const services = [
    "web_slug",
    "seo_slug",
    "gmb_slug"
  ];

  const addLocation = items => {
    items.forEach(item => {
      services.forEach(slug => {
        if (item?.[slug]) {
          routes.push(`${baseUrl}/${item[slug]}`);
        }
      });
    });
  };

  addLocation(cities);
  addLocation(states);
  addLocation(countries);

  // Chunk into groups of 1000
  const chunkSize = 1000;
  const sitemapCount = Math.ceil(routes.length / chunkSize);

  const sitemapIndexXml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${Array.from({ length: sitemapCount })
      .map(
        (_, i) => `
      <sitemap>
        <loc>${baseUrl}/sitemaps/sitemap-${i + 1}.xml</loc>
      </sitemap>
    `
      )
      .join("")}
  </sitemapindex>`;

  return new Response(sitemapIndexXml.trim(), {
    headers: { "Content-Type": "application/xml" },
  });
}

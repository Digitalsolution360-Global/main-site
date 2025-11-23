export const dynamic = "force-dynamic";

import { 
  getAllBlogsForSitemap,
  getAllCities,
  getAllStates,
  getAllCountriesForSitemap
} from "@/lib/db";

export async function GET(req, { params }) {
  const baseUrl = "https://www.digitalsolution360.com";
  const chunkSize = 1000;

  // Extract the number from params.id (e.g., "sitemap-1.xml" → 1)
  const match = params.id.match(/(\d+)/);
  if (!match) {
    return new Response("Invalid sitemap index", { status: 400 });
  }
  const id = Number(match[1]);
  const index = id - 1;

  // Fetch all URLs
  const [blogs, cities, states, countries] = await Promise.all([
    getAllBlogsForSitemap(),
    getAllCities(),
    getAllStates(),
    getAllCountriesForSitemap()
  ]);

  const routes = [];

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

  routes.push(...staticPages.map(p => baseUrl + p));
  routes.push(...servicePages.map(p => baseUrl + p));
  routes.push(...blogs.filter(b => b?.slug).map(b => `${baseUrl}/${b.slug}`));

  const services = ["web_slug", "seo_slug", "gmb_slug"];

  const addLocation = items => {
    items.forEach(item => {
      services.forEach(s => {
        if (item?.[s]) {
          routes.push(`${baseUrl}/${item[s]}`);
        }
      });
    });
  };

  addLocation(cities);
  addLocation(states);
  addLocation(countries);

  // Get the correct chunk
  const start = index * chunkSize;
  const end = start + chunkSize;
  const chunk = routes.slice(start, end);

  // Generate XML
  const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${chunk
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new Response(xml.trim(), {
    headers: { "Content-Type": "application/xml" },
  });
}

import { getAllBlogsForSitemap, getAllCities, getAllStates, getAllCountriesForSitemap } from "@/lib/db";

export async function GET() {
  const baseUrl = "https://www.digitalsolution360.com";

  // Fetch all routes
  let routes = [];

  // Combine all your logic
  const blogs = await getAllBlogsForSitemap();
  const cities = await getAllCities();
  const states = await getAllStates();
  const countries = await getAllCountriesForSitemap();

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
    ...staticPages.map((p) => baseUrl + p),
    ...servicePages.map((p) => baseUrl + p),
    ...blogs.map((b) => `${baseUrl}/${b.slug}`)
  ];

  // Add location routes (simplified)
  const services = [
    { slugField: "web_slug" },
    { slugField: "seo_slug" },
    { slugField: "gmb_slug" },
  ];

  const addLocation = (items) => {
    items.forEach(item => {
      services.forEach(service => {
        if (item[service.slugField])
          routes.push(`${baseUrl}/${item[service.slugField]}`);
      });
    });
  };

  addLocation(cities);
  addLocation(states);
  addLocation(countries);

  console.log("Total URLs:", routes.length);

  // Chunk into groups of 1000
  const chunkSize = 1000;
  const sitemapCount = Math.ceil(routes.length / chunkSize);

  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
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

  return new Response(sitemapIndexXml, {
    headers: { "Content-Type": "application/xml" },
  });
}

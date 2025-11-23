import { getAllBlogsForSitemap, getAllCities, getAllStates, getAllCountriesForSitemap } from "@/lib/db";

export async function GET(_, { params }) {
  const baseUrl = "https://www.digitalsolution360.com";
  const id = Number(params.id); // sitemap number (1,2,3,...)

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

  const blogs = await getAllBlogsForSitemap();
  const cities = await getAllCities();
  const states = await getAllStates();
  const countries = await getAllCountriesForSitemap();

  let routes = [
    ...staticPages.map((p) => baseUrl + p),
    ...servicePages.map((p) => baseUrl + p),
    ...blogs.map((b) => `${baseUrl}/${b.slug}`)
  ];

  const services = [
    "web_slug",
    "seo_slug",
    "gmb_slug",
  ];

  const addLocation = (items) => {
    items.forEach(item => {
      services.forEach(field => {
        if (item[field])
          routes.push(`${baseUrl}/${item[field]}`);
      });
    });
  };

  addLocation(cities);
  addLocation(states);
  addLocation(countries);

  // Chunk logic
  const chunkSize = 1000;
  const start = (id - 1) * chunkSize;
  const end = id * chunkSize;

  const chunk = routes.slice(start, end);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${chunk
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <changefreq>monthly</changefreq>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new Response(sitemapXml, {
    headers: { "Content-Type": "application/xml" },
  });
}

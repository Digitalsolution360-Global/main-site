import mysql from 'mysql2/promise';

// Create a connection pool for better performance
let pool = null;

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  return pool;
}

export async function query(sql, params = []) {
  try {
    const connection = getPool();
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export async function getCountries() {
  const sql = 'SELECT id, name, web_slug, digital_slug, gmb_slug, content_slug, seo_slug, status FROM global_countries WHERE status = 1 ORDER BY name ASC';
  return await query(sql);
}

export async function getStatesByCountry(countryId) {
  const sql = 'SELECT state_id as id, name, country_id, web_slug, digital_slug, gmb_slug, content_slug, seo_slug, status FROM global_states WHERE country_id = ? AND status = 1 ORDER BY name ASC';
  return await query(sql, [countryId]);
}

export async function getCitiesByState(stateId) {
  const sql = 'SELECT city_id as id, city as name, state_id, web_slug, digital_slug, gmb_slug, content_slug, seo_slug, status FROM global_cities WHERE state_id = ? AND status = 1 ORDER BY city ASC';
  return await query(sql, [stateId]);
}

export async function getCityDetails(citySlug) {
  const sql = `
    SELECT c.*, 
           s.name as state_name, s.state_id, 
           s.web_slug as state_web_slug, s.seo_slug as state_seo_slug, s.gmb_slug as state_gmb_slug, s.digital_slug as state_digital_slug,
           co.name as country_name, co.id as country_id,
           co.web_slug as country_web_slug, co.seo_slug as country_seo_slug, co.gmb_slug as country_gmb_slug, co.digital_slug as country_digital_slug
    FROM global_cities c
    JOIN global_states s ON c.state_id = s.state_id
    JOIN global_countries co ON s.country_id = co.id
    WHERE c.web_slug = ? OR c.gmb_slug = ? OR c.seo_slug = ? OR c.content_slug = ? OR c.digital_slug = ?
  `;
  const results = await query(sql, [citySlug, citySlug, citySlug, citySlug, citySlug]);
  return results[0] || null;
}

export async function getStateDetails(stateSlug) {
  const sql = `
    SELECT s.*, 
           co.name as country_name, co.id as country_id,
           co.web_slug as country_web_slug, co.seo_slug as country_seo_slug, co.gmb_slug as country_gmb_slug, co.digital_slug as country_digital_slug
    FROM global_states s
    JOIN global_countries co ON s.country_id = co.id
    WHERE s.web_slug = ? OR s.gmb_slug = ? OR s.seo_slug = ? OR s.content_slug = ? OR s.digital_slug = ?
  `;
  const results = await query(sql, [stateSlug, stateSlug, stateSlug, stateSlug, stateSlug]);
  return results[0] || null;
}

export async function getCountryDetails(countrySlug) {
  const sql = 'SELECT * FROM global_countries WHERE web_slug = ? OR gmb_slug = ? OR seo_slug = ? OR content_slug = ? OR digital_slug = ?';
  const results = await query(sql, [countrySlug, countrySlug, countrySlug, countrySlug, countrySlug]);
  return results[0] || null;
}

// Blog functions
export async function getAllBlogs(limit = null) {
  let sql = 'SELECT * FROM blogs ORDER BY created_at DESC';
  if (limit) {
    sql += ` LIMIT ${limit}`;
  }
  return await query(sql);
}

export async function getAllBlogsForSitemap() {
  // Optimized query for sitemap - only fetch necessary fields
  const sql = 'SELECT id, slug, created_at, updated_at FROM blogs ORDER BY created_at DESC';
  return await query(sql);
}

export async function getBlogBySlug(slug) {
  const sql = 'SELECT * FROM blogs WHERE slug = ?';
  const results = await query(sql, [slug]);
  return results[0] || null;
}

export async function getRecentBlogs(limit = 5, excludeSlug = null) {
  let sql = 'SELECT id, title, slug, description, image, created_at FROM blogs';
  const params = [];
  
  if (excludeSlug) {
    sql += ' WHERE slug != ?';
    params.push(excludeSlug);
  }
  
  sql += ' ORDER BY created_at DESC LIMIT ?';
  params.push(limit);
  
  return await query(sql, params);
}

// Get all cities for sitemap
export async function getAllCities() {
  const sql = 'SELECT city_id as id, city as name, web_slug, gmb_slug, seo_slug, content_slug FROM global_cities WHERE status = 1 ORDER BY city ASC';
  return await query(sql);
}

// Get all states for sitemap
export async function getAllStates() {
  const sql = 'SELECT state_id as id, name, web_slug, gmb_slug, seo_slug, content_slug FROM global_states WHERE status = 1 ORDER BY name ASC';
  return await query(sql);
}

// Get all countries for sitemap (already filtered by status in getCountries, but adding specific version)
export async function getAllCountriesForSitemap() {
  const sql = 'SELECT id, name, web_slug, gmb_slug, seo_slug, content_slug FROM global_countries WHERE status = 1 ORDER BY name ASC';
  return await query(sql);
}

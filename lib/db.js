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
    SELECT c.*, s.name as state_name, s.state_id, s.name as state_name, co.name as country_name, co.id as country_id
    FROM global_cities c
    JOIN global_states s ON c.state_id = s.state_id
    JOIN global_countries co ON s.country_id = co.id
    WHERE c.web_slug = ? OR c.gmb_slug = ? OR c.seo_slug = ? OR c.content_slug = ?
  `;
  const results = await query(sql, [citySlug, citySlug, citySlug, citySlug]);
  return results[0] || null;
}

export async function getStateDetails(stateSlug) {
  const sql = `
    SELECT s.*, co.name as country_name, co.id as country_id
    FROM global_states s
    JOIN global_countries co ON s.country_id = co.id
    WHERE s.web_slug = ? OR s.gmb_slug = ? OR s.seo_slug = ? OR s.content_slug = ?
  `;
  const results = await query(sql, [stateSlug, stateSlug, stateSlug, stateSlug]);
  return results[0] || null;
}

export async function getCountryDetails(countrySlug) {
  const sql = 'SELECT * FROM global_countries WHERE web_slug = ? OR gmb_slug = ? OR seo_slug = ? OR content_slug = ?';
  const results = await query(sql, [countrySlug, countrySlug, countrySlug, countrySlug]);
  return results[0] || null;
}

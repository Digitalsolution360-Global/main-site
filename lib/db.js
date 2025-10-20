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
  const sql = 'SELECT * FROM global_countries ORDER BY name ASC';
  return await query(sql);
}

export async function getStatesByCountry(countryId) {
  const sql = 'SELECT * FROM global_states WHERE country_id = ? ORDER BY name ASC';
  return await query(sql, [countryId]);
}

export async function getCitiesByState(stateId) {
  const sql = 'SELECT * FROM global_cities WHERE state_id = ? ORDER BY name ASC';
  return await query(sql, [stateId]);
}

export async function getCityDetails(citySlug) {
  const sql = `
    SELECT c.*, s.name as state_name, s.id as state_id, co.name as country_name, co.id as country_id
    FROM global_cities c
    JOIN global_states s ON c.state_id = s.id
    JOIN global_countries co ON s.country_id = co.id
    WHERE c.slug = ?
  `;
  const results = await query(sql, [citySlug]);
  return results[0] || null;
}

export async function getStateDetails(stateSlug) {
  const sql = `
    SELECT s.*, co.name as country_name, co.id as country_id
    FROM global_states s
    JOIN global_countries co ON s.country_id = co.id
    WHERE s.slug = ?
  `;
  const results = await query(sql, [stateSlug]);
  return results[0] || null;
}

export async function getCountryDetails(countrySlug) {
  const sql = 'SELECT * FROM global_countries WHERE slug = ?';
  const results = await query(sql, [countrySlug]);
  return results[0] || null;
}

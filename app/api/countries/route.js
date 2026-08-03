import { NextResponse } from "next/server";
import getPool from '@/lib/db';
const pool = getPool();
export async function GET() {
  try {
    const [rows] = await pool.query(`
      SELECT
        id,
        name
      FROM global_countries
      WHERE status = 1
      ORDER BY name ASC
    `);

    return NextResponse.json({
      success: true,
      data: rows,
    });

  } catch (error) {
    console.error("GET COUNTRIES ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch countries",
      },
      { status: 500 }
    );
  }
}
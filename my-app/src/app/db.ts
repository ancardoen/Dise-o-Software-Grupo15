import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

if (
  !process.env.DATABASE_HOST ||
  !process.env.DATABASE_PORT ||
  !process.env.DATABASE_NAME ||
  !process.env.DATABASE_USER ||
  !process.env.DATABASE_PASSWORD
) {
  throw new Error("Missing database configuration in environment variables");
}

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

pool.connect();

console.log({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
});

export default pool;

import { createHash } from "crypto";
import pool from "../../db";

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();

  const { username, password } = body;

  // Check if user exists
  const res = await pool.query("SELECT * FROM auth_user WHERE username = $1", [
    username,
  ]);

  if (res.rows.length !== 0) {
    // Return a json response
    return new Response(JSON.stringify({ message: "User already exists" }), {
      headers: { "content-type": "application/json" },
    });
  }

  // generate sha256 hash of password
  const passwordHash = createHash("sha256").update(password).digest("hex");

  await pool.query(
    "INSERT INTO auth_user (username, password) VALUES ($1, $2)",
    [username, passwordHash]
  );

  return new Response(JSON.stringify({ message: "User created" }), {
    headers: { "content-type": "application/json" },
  });
}

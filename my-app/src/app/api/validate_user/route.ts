import { createHash } from "crypto";
import pool from "../../db";

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();

  const { username, password } = body;

  const passwordHash = createHash("sha256").update(password).digest("hex");

  const user = await pool.query(
    "SELECT * FROM auth_user WHERE username = $1 AND password = $2",
    [username, passwordHash]
  );

  if (user.rows.length === 0) {
    // Return a json response
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      headers: { "Content-Type": "application/json" },
      status: 401,
    });
  }

  return new Response(JSON.stringify({ message: "Valid credentials" }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

import { migrate } from "drizzle-orm/neon-serverless/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as dotenv from "dotenv"

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  throw new Error("Database url is not set in .env");
}
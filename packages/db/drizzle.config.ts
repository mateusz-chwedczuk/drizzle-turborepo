import type { Config } from "drizzle-kit";

export default {
  breakpoints: true,
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  driver: 'pg',
  schema: "./src/schemas/*",
  out: "./migrations",
  verbose: true
} satisfies Config;
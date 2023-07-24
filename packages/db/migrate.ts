import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import * as postgres from "postgres";

const main = async () => {
  const client = postgres(process.env.DATABASE_URL!, { max: 1 });
  const db = drizzle(client);
  await migrate(db, { migrationsFolder: "migrations" });
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
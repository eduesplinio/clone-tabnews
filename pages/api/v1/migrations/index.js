import migrationRunner from "node-pg-migrate";
import { join } from "path";

export default async function migrations(request, response) {
  const migrations = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "migrations",
  });
  response.status(200).json([]);
}
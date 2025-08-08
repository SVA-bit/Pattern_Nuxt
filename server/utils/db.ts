import { Database, open } from "sqlite";
import sqlite3 from "sqlite3";
import { useRuntimeConfig } from "#imports";

let db: Database | null = null;

export async function getDb() {
  if (!db) {
    const config = useRuntimeConfig();
    try {
      db = await open({
        filename: config.private.sqliteDbPath,
        driver: sqlite3.Database,
      });

      await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE NOT NULL,
          name TEXT
        );

        CREATE TABLE IF NOT EXISTS contacts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS images (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          bucket TEXT NOT NULL,
          key TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      console.log("SQLite database initialized");
    } catch (error) {
      console.error("Failed to initialize SQLite:", error);
      throw error;
    }
  }
  return db;
}

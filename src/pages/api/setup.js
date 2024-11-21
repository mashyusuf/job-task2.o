import { openDB } from "../../database/lib/db";


export default async function setup() {
  const db = await openDB();

  // Categories টেবিল তৈরি
  await db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );
  `);

  // Subcategories টেবিল তৈরি
  await db.exec(`
    CREATE TABLE IF NOT EXISTS subcategories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category_id INTEGER,
      FOREIGN KEY(category_id) REFERENCES categories(id)
    );
  `);

  // Duas টেবিল তৈরি
  await db.exec(`
    CREATE TABLE IF NOT EXISTS duas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subcategory_id INTEGER,
      title TEXT NOT NULL,
      arabic TEXT NOT NULL,
      transliteration TEXT,
      translation TEXT NOT NULL,
      reference TEXT,
      FOREIGN KEY(subcategory_id) REFERENCES subcategories(id)
    );
  `);

  console.log("Tables created successfully!");
}
setup();

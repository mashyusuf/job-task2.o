import { openDB } from "../../database/lib/db";


export default async function handler(req, res) {
  const db = await openDB();

  // টেবিল তৈরি করার জন্য SQL কমান্ড
  await db.exec(`
    CREATE TABLE IF NOT EXISTS duas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      url TEXT NOT NULL,
      title TEXT NOT NULL,
      arabic TEXT NOT NULL,
      transliteration TEXT,
      translation TEXT,
      reference TEXT
    );
  `);

  res.status(200).json({ message: "Duas table created successfully!" });
}

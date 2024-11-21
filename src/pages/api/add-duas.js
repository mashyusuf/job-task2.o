import { openDB } from "../../../database/lib/db";

export default async function insertData() {
  const db = await openDB();

  // Categories ইনসার্ট করা
  await db.run(`INSERT INTO categories (name) VALUES (?)`, ["Daily Duas"]);

  // Subcategories ইনসার্ট করা
  await db.run(`INSERT INTO subcategories (name, category_id) VALUES (?, ?)`, [
    "Before Eating",
    1,
  ]);

  // Duas ইনসার্ট করা
  await db.run(
    `INSERT INTO duas (subcategory_id, title, arabic, transliteration, translation, reference) 
    VALUES (?, ?, ?, ?, ?, ?)`,
    [
      1,
      "Dua Before Eating",
      "اللّهُـمَّ بارِكْ لنا فيما رزقتنا وَقِنا عذابَ النار",
      "Allahumma barik lana fima razaqtana waqina adhab an-nar",
      "O Allah! Bless the food You have provided us and save us from the punishment of the Hellfire.",
      "Tirmidhi",
    ]
  );

  console.log("Data inserted successfully!");
}
insertData();

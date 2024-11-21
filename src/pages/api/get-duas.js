import { openDB } from "../../database/lib/db";


export default async function handler(req, res) {
  const db = await openDB();

  // Fetch Categories, Subcategories, and Duas
  const data = await db.all(`
    SELECT 
      categories.name AS category_name, 
      subcategories.name AS subcategory_name, 
      duas.title AS dua_title,
      duas.arabic,
      duas.transliteration,
      duas.translation,
      duas.reference
    FROM categories
    LEFT JOIN subcategories ON categories.id = subcategories.category_id
    LEFT JOIN duas ON subcategories.id = duas.subcategory_id
  `);

  res.status(200).json(data);
}

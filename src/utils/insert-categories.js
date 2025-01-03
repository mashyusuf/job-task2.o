import { openDB } from "../database/lib/db";

async function insertCategoryData() {
  const db = await openDB();

  const categories = [
    {
        "cat_icon": "duar_gurutto",
        "cat_id": 1,
        "cat_name_bn": "দোয়ার গুরুত্ব",
        "cat_name_en": "Dua's Importance",
        "id": 1,
        "no_of_dua": 21,
        "no_of_subcat": 7
    },
    {
        "cat_icon": "zikirer_fozilot",
        "cat_id": 2,
        "cat_name_bn": "যিকিরের ফযীলত",
        "cat_name_en": "Dua's Excellence",
        "id": 2,
        "no_of_dua": 15,
        "no_of_subcat": 1
    },
    {
        "cat_icon": "dua_kobuler_somoy",
        "cat_id": 3,
        "cat_name_bn": "দোয়া কবুলের সময়",
        "cat_name_en": "Time of Dua",
        "id": 3,
        "no_of_dua": 30,
        "no_of_subcat": 1
    },
    {
        "cat_icon": "jader_dua_kobul_hoy",
        "cat_id": 4,
        "cat_name_bn": "দোয়া কবুল হওয়া",
        "cat_name_en": "Dua Acceptance",
        "id": 4,
        "no_of_dua": 14,
        "no_of_subcat": 1
    },
    {
        "cat_icon": "sokal_sondha",
        "cat_id": 5,
        "cat_name_bn": "সকাল-সন্ধ্যার যিক্‌র",
        "cat_name_en": "Morning & Evening",
        "id": 6,
        "no_of_dua": 53,
        "no_of_subcat": 3
    },
    {
        "cat_icon": "ghum",
        "cat_id": 6,
        "cat_name_bn": "ঘুম",
        "cat_name_en": "Sleep",
        "id": 9,
        "no_of_dua": 35,
        "no_of_subcat": 2
    },
    {
        "cat_icon": "poshak",
        "cat_id": 7,
        "cat_name_bn": "কাপড় পরিধান",
        "cat_name_en": "Cloths",
        "id": 10,
        "no_of_dua": 8,
        "no_of_subcat": 1
    },
    {
        "cat_icon": "bari",
        "cat_id": 8,
        "cat_name_bn": "ঘর-বাড়ি",
        "cat_name_en": "Home",
        "id": 11,
        "no_of_dua": 6,
        "no_of_subcat": 2
    },
    {
        "cat_icon": "toilet",
        "cat_id": 9,
        "cat_name_bn": "টয়লেট",
        "cat_name_en": "Toilet",
        "id": 12,
        "no_of_dua": 2,
        "no_of_subcat": 1
    },
    {
        "cat_icon": "azan_ikamot",
        "cat_id": 10,
        "cat_name_bn": "আযান ও ইকামত",
        "cat_name_en": "Adhaan & Iqamah",
        "id": 13,
        "no_of_dua": 7,
        "no_of_subcat": 4
    }
]
  for (const category of categories) {
    await db.run(
      `
      INSERT INTO categories (cat_icon, cat_id, cat_name_bn, cat_name_en, id, no_of_dua, no_of_subcat)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        category.cat_icon,
        category.cat_id,
        category.cat_name_bn,
        category.cat_name_en,
        category.id,
        category.no_of_dua,
        category.no_of_subcat,
      ]
    );
  }

  console.log("Categories inserted successfully!");
}

insertCategoryData();

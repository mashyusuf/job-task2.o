import { openDB } from "../../database/lib/db";


export default async function handler(req, res) {
  const db = await openDB();
  const duas = await db.all("SELECT * FROM duas");
  res.status(200).json(duas);
}

// pages/api/get-categories.ts
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const db = await openDB();
      const categories = await db.all('SELECT * FROM categories');
      
      res.status(200).json(categories); // Send the categories as a response
    } catch (error) {
      res.status(500).json({ message: 'Error fetching categories', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // Handle unsupported methods
  }
}

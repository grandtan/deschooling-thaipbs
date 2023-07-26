// pages/api/sheetData.ts

import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const response = await axios.get(
      'https://sheet.best/api/sheets/70bacdb9-b223-4aae-882e-2540a7c82d56'
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

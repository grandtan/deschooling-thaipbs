// pages/api/sheetData.ts

import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const apiKey =
      '4UNw#HpV7wJmbx7-uKaFuid#jLv!t5oB@ESY5iWEnGICMJszJJv%nKB_Il_vGdf!';
    const response = await axios.get(
      'https://sheet.best/api/sheets/70bacdb9-b223-4aae-882e-2540a7c82d56',
      {
        headers: {
          'X-Api-Key': apiKey,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res
        .status(500)
        .json({ error: error.message, details: error.response?.data });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
}

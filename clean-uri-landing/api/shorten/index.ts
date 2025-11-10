import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let url: string;

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
      const body = new URLSearchParams(req.body);
      url = body.get('url') || '';
    } else {
      url = req.body?.url || '';
    }

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    const cleanUriResponse = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ url: url.trim() }),
    });

    const data = await cleanUriResponse.json();

    return res.status(cleanUriResponse.status).json(data);
  } catch (err) {
    console.error('Shorten error:', err);
    return res.status(500).json({
      error: 'Failed to shorten URL',
      details: err instanceof Error ? err.message : 'Unknown error',
    });
  }
}

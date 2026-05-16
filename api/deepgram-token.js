export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS — restrict to our domains
  const allowedOrigins = [
    'https://rapidreceptionist.co.uk',
    'https://www.rapidreceptionist.co.uk',
    'http://localhost:4321',
    'http://localhost:3000',
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const apiKey = process.env.DEEPGRAM_API_KEY;
  if (!apiKey) {
    console.error('DEEPGRAM_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'Voice service not configured' });
  }

  return res.status(200).json({ token: apiKey });
}

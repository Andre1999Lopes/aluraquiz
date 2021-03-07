import db from '../../db.json';

export default function dbHandler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end;
  }
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
  return res.json(db);
}

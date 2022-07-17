// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const OK_STATUS_CODE = 200;

export default function handler(req, res) {
  res.status(OK_STATUS_CODE).json({ name: 'John Doe' });
}

export default async (req, res) => {
  let body = JSON.parse(req.body)
  console.log(body)
  res.json({ success: 'Thank you for your vote!' })
}

import { getComedians } from '../../api/dynamo'

export default async (req, res) => {
  let raw = await getComedians()
  let o = JSON.parse(raw.body)
  let comedians = o.Items
  res.json({ comedians })
}

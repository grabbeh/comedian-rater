import { getComedians } from '../../api/dynamo'

export default async (req, res) => {
  let comedians = await getComedians()
  res.json({ comedians })
}

import { getComedians } from '../../api/dynamo'

export default async (req, res) => {
  let raw = await getComedians()
  let o = JSON.parse(raw.body)
  let dynamoDB = o.Items
  let comedians = dynamoDB.map(c => {
    let { TotalVotes, TotalLikeability, TotalFunniness, PK } = c
    return {
      id: PK,
      data: [
        {
          x: TotalLikeability / TotalVotes,
          y: TotalFunniness / TotalVotes
        }
      ]
    }
  })
  res.json({ comedians })
}

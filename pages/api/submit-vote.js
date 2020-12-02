import { addVote } from '../../api/dynamo'

export default async (req, res) => {
  let { likeability, funniness, comedian } = JSON.parse(req.body)
  try {
    await addVote(comedian, likeability, funniness)
    res.statusCode = 200
    res.json({ success: 'Thank you for your vote' })
  } catch (e) {
    let error = e[0] ? e[0].message : e.message || e
    res.statusCode = 500
    res.json({ errorMessage: error })
  }
}

import comedians from '../../data/comedians.json'

export default async (req, res) => {
  let random = comedians[Math.floor(Math.random() * comedians.length)]
  console.log(random)
  res.json({ comedian: random })
}

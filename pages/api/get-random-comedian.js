import comedians from '../../data/comedians.json'
import getVideo from '../../api/youtube'

export default async (req, res) => {
  let comedian = comedians[Math.floor(Math.random() * comedians.length)]
  let video = await getVideo(comedian)
  res.json({ comedian, video })
}

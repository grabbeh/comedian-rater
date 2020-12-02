import dotenv from 'dotenv'
const YouTube = require('simple-youtube-api')
dotenv.config({ path: '../.env' })
const youtube = new YouTube(process.env.YOUTUBE_API_KEY)

const getVideo = async comedian => {
  try {
    return youtube.searchVideos(comedian, 1)
  } catch (e) {
    console.log(e)
    throw new Error(e)
  }
}

export default getVideo

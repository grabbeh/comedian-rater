import dotenv from 'dotenv'
import AWS from 'aws-sdk'
dotenv.config({ path: '../.env' })
AWS.config.update({
  region: 'eu-west-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

// Create the DynamoDB service object
var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })

// add vote

const addVote = async (id, content) => {
  let params = {
    TableName: 'COMEDIAN-RATER',
    Item: {
      PK: id,
      SK: `VOTE${}`,
      VOTE_CAST_AT: Date.now(),
      ...content
    }
  }

  try {
    await docClient.put(params).promise()
    return { statusCode: 200 }
  } catch (error) {
    return {
      statusCode: 400,
      error: `Could not fetch: ${error.stack}`
    }
  }
}

export { addVote }

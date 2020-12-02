import dotenv from 'dotenv'
import AWS from 'aws-sdk'
import KSUID from 'ksuid'
dotenv.config({ path: '../.env' })
AWS.config.update({
  region: 'eu-west-1',
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_KEY
})

// Create the DynamoDB service object
var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })

// add vote

const addVote = async (comedian, likeability, funniness) => {
  const ksuidFromAsync = await KSUID.random()
  const id = ksuidFromAsync.string
  let params = {
    TableName: 'COMEDIAN-RATER',
    Item: {
      PK: comedian,
      SK: `VOTE#${id}`,
      likeability,
      funniness
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

const getComedian = async comedian => {
  let params = {
    table: 'COMEDIAN-RATER-AGGREGATOR',
    Key: {
      PK: comedian
    }
  }

  try {
    await docClient.get(params).promise()
    return { statusCode: 200 }
  } catch (error) {
    return {
      statusCode: 400,
      error: `Could not fetch: ${error.stack}`
    }
  }
}

const getComedians = async () => {
  let params = {
    TableName: 'COMEDIAN-RATER-AGGREGATOR'
  }

  try {
    let data = await docClient.query(params).promise()
    return { statusCode: 200, body: JSON.stringify(data) }
  } catch (e) {
    return {
      statusCode: 400,
      error: `Could not fetch: ${error.stack}`
    }
  }
}

export { addVote, getComedian, getComedians }

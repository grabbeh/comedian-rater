const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient({})

exports.handler = async (event, context, callback) => {
  try {
    const insertRecords = event.Records.filter(
      record => record.eventName === 'INSERT'
    )
    const unmarshalledRecords = insertRecords.map(record =>
      AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
    )
    for (let record of unmarshalledRecords) {
      console.log(record)
      let params = {
        TableName: 'COMEDIAN-RATER-AGGREGATOR',
        Key: {
          PK: record.PK
        },
        UpdateExpression:
          'ADD #TotalVotes :Vote, #TotalLikeability :Likeability, #TotalFunniness :Funniness',
        ExpressionAttributeNames: {
          '#TotalVotes': 'TotalVotes',
          '#TotalLikeability': 'TotalLikeability',
          '#TotalFunniness': 'TotalFunniness'
        },
        ExpressionAttributeValues: {
          ':Likeability': record.likeability,
          ':Funniness': record.funniness,
          ':Vote': 1
        }
      }
      try {
        await documentClient.update(params).promise()
      } catch (e) {
        console.log(e)
      }
    }
  } catch (e) {
    console.log(e)
  }
}

# comedian-rater

Rate a comedian out of 10 for funniness and likeability

Store results for each vote in DynamoDB, have a DynamoDB stream emit each new record and use AWS Lambda to run to update a separate aggregation table with the new overall score per comedian (and potentially the overall results as an array to avoid computing for entire results in middleware)

https://medium.com/signiant-engineering/real-time-aggregation-with-dynamodb-streams-f93547cfb244
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.Tutorial.html

![alt text][/]

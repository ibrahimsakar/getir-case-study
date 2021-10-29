const { MongoClient } = require('mongodb');

const connectMongo = async (postParams) => {
  let client;

  const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@challenge-xzwqd.mongodb.net/${process.env.DB_NAME}?retryWrites=true`;

  try {
    client = await MongoClient.connect(connectionString, { useNewUrlParser: true });
    const db = client.db(process.env.DB_NAME);

    const dataSet = await db.collection('records').aggregate([
      {
        $match: {
          $and: [
            { createdAt: { $gte: new Date(postParams.startDate) } },
            { createdAt: { $lte: new Date(postParams.endDate) } },
          ],
        },
      },
      {
        $set: {
          totalCount: {
            $sum: '$counts',
          },
        },
      },
      {
        $match: {
          $and: [
            { totalCount: { $gte: postParams.minCount } },
            { totalCount: { $lte: postParams.maxCount } },
          ],
        },
      },
      {
        $unset: 'counts',
      },
      {
        $unset: 'value',
      },
      {
        $unset: '_id',
      },
    ]).toArray();

    return dataSet;
  } finally {
    if (client !== undefined) {
      client.close();
    }
  }
};

async function getKeys(app, headers, postParams) {
  const apiResult = await connectMongo(postParams);

  return { code: 0, msg: 'Success', records: apiResult };
}

module.exports = getKeys;

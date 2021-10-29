const { connectMongo } = require('./connectMongo');

const fetchKeys = async (postParams) => {
  const client = await connectMongo();

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

  client.close();

  return dataSet;
};

module.exports = {
  fetchKeys,
};

const { connectMongo } = require('../../utils/connectMongo');

const fetchKeys = async (postParams) => {
  const client = await connectMongo();

  const db = client.db(process.env.DB_NAME);

  let dataSet;
  try {
    dataSet = await db.collection('records').aggregate([
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
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }

  return dataSet;
};

module.exports = {
  fetchKeys,
};

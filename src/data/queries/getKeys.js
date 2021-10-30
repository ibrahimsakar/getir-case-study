const { getDbObject } = require('../../utils/getDbObject');

const fetchKeys = async (postParams) => {
  const db = await getDbObject();

  const query = [
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
  ];

  const dataSet = await db.collection('records').aggregate(query).toArray();

  return dataSet;
};

module.exports = {
  fetchKeys,
};

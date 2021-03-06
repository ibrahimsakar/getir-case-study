const { connectMongo } = require('./mongo');

const getDbObject = async () => {
  const client = await connectMongo();

  return client.db(process.env.DB_NAME);
};

module.exports = { getDbObject };

const { MongoClient } = require('mongodb');

const getClientObject = () => {
  const connectionString = process.env.MONGO_CONNECTIONSTRING;

  return MongoClient.connect(connectionString, { useNewUrlParser: true });
};

const useDbObject = async (fn) => {
  const client = await getClientObject();
  const db = await client.db(process.env.DB_NAME);

  try {
    return await fn(db, client);
  } finally {
    client.close();
  }
};

module.exports = {
  getClientObject,
  useDbObject,
};

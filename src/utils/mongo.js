const { MongoClient } = require('mongodb');

const getClientObject = () => {
  const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@challenge-xzwqd.mongodb.net/${process.env.DB_NAME}?retryWrites=true`;

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

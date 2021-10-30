const { MongoClient } = require('mongodb');

const connectMongo = async () => {
  const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@challenge-xzwqd.mongodb.net/${process.env.DB_NAME}?retryWrites=true`;

  try {
    const client = await MongoClient.connect(connectionString, { useNewUrlParser: true });

    return client;
  } catch (error) {
    console.log(error);

    return error;
  }
};

module.exports = {
  connectMongo,
};

db.createUser({
  user: 'appuser',
  pwd: 'appuserpwd',
  roles: [
    {
      role: 'readWrite',
      db: 'appdb',
    },
  ],
});

db = new Mongo().getDB('appdb');

db.createCollection('records', { capped: false });
// db.records.insert([
// ]);

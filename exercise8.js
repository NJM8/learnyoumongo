const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, database) => {
  if (err) {
    throw err;
  }
  const db = database.db('learnyoumongo');
  const parrots = db.collection('parrots');
  const greaterThan = parseInt(process.argv[2]);
  parrots.count({ age: { $gt: greaterThan } }, (err, documents) => {
    if (err) {
      throw err;
    }
    console.log(documents);
    database.close();
  });
});
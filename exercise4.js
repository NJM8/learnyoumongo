const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, database) => {
  if (err) {
    throw err;
  }
  const db = database.db('learnyoumongo');
  const parrots = db.collection('parrots');
  const minAge = parseInt(process.argv[2]);
  parrots.find({ age: { $gt: minAge } },  { _id: 0 }).toArray((err, documents) => {
    if (err) {
      throw err;
    }
    documents.map(doc => {
      delete doc._id;
    });

    console.log(documents);
    database.close();
  });
});

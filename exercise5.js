const mongo = require('mongodb').MongoClient;
const newUser = { firstName: process.argv[2], lastName: process.argv[3] };

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, database) => {
  if (err) {
    throw err;
  }
  const db = database.db('learnyoumongo');
  const docs = db.collection('docs');

  docs.insert(newUser, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(JSON.stringify(newUser));
    db.close();
  });
});


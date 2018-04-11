const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, database) => {
  if (err) {
    throw err;
  }
  const db = database.db('learnyoumongo');
  const docs = db.collection('users');

  docs.update({username: 'tinatime'}, { $set: {age : 40} }, (err, data) => {
    if (err) {
      throw err;
    }
    db.close();
  });
});



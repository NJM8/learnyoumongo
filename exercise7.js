const mongo = require('mongodb').MongoClient;

const dataBaseName = process.argv[2];
const collectionName = process.argv[3];
const id = process.argv[4];

mongo.connect(`mongodb://localhost:27017/${dataBaseName}`, (err, database) => {
  if (err) throw err;

  const DB = database.db(dataBaseName);
  const docs = DB.collection(collectionName);

  docs.deleteOne({ _id: id }).then(data => {
    console.log('deleted');
    database.close();
  }).catch(err => {
    console.log(err);
  });
});

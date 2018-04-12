const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, database) => {
  if (err) {
    throw err;
  }
  const db = database.db('learnyoumongo');
  const prices = db.collection('prices');


  prices.aggregate([
    { $match: { size: process.argv[2] }}
  , { $group: {
      _id: 'total' // This can be an arbitrary string in this case
    , average: {
        // $sum is the operator used here
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if (err) throw err;
    console.log(results[0].average.toFixed(2));
    database.close();
  });
});
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object destructuring (ES6)

// First argument is an url which is the database server. In production, this will be an aws url or a heroku url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

// find returns a cursor/pointer to the actual values.
// toArray() returns a promise.
// find({completed: false}) --> Pass the object for conditions.
//  db.collection('Todos').find({
//    _id: new ObjectID('5a6d4875d3ee0720dc896d11')
//  }).toArray().then((docs) => {
//    console.log('Todos');
//    console.log(JSON.stringify(docs, undefined, 2));
//  }, (err) => {
//    console.log('Unable to fetch todos', err);
//  });

db.collection('Todos').find().count().then((count) => {
  console.log(`Todos count: ${count}`);
}, (err) => {
  console.log('Unable to fetch todos', err);
});

db.collection('Users').find({name: 'Vaithya'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
})
});

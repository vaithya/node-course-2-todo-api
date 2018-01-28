//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object destructuring (ES6)

// First argument is an url which is the database server. In production, this will be an aws url or a heroku url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
//  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//    console.log(result);
//  });

  // deleteOne
//  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//    console.log(result);
//  });

  // findOneAndDelete
  //db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //  console.log(result);
  //});
  // db.close();
});

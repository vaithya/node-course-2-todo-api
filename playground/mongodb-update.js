//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object destructuring (ES6)

// First argument is an url which is the database server. In production, this will be an aws url or a heroku url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

// Refer node js mongo db driver api documentation for the arguments this function takes and what it returns.
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a6d58c80fa88b374be91e7c')
  }, {
    //Search for mongo db update operators
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a6d50e3c11a532c4424e320')
  }, {
    //Search for mongo db update operators
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});

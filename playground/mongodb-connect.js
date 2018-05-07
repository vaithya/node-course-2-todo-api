//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object destructuring (ES6)

//Generate a new object id.
//var obj = new ObjectID();
//console.log(obj);

// First argument is an url which is the database server. In production, this will be an aws url or a heroku url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

//  db.collection('Todos').insertOne({
//      text: 'Something',
//      completed: false,
//  }, (err, result) => {
//    if (err) {
//      return console.log('Unable to insert todo.', err);
//    }

//    console.log(JSON.stringify(result.ops, undefined, 2));
//  });
//  db.close();
//});

    db.collection('Users').insertOne({
      name: 'Vaithya',
      age: 23,
      location: 'India',
    // _id: 123
    }, (err, result) => {
      if (err) {
        return console.log('Unable to add user.', err);
      }

      console.log(result.ops[0]._id.getTimestamp());
    });
    db.close();
});

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a6d7c5172906a3c2f0df4e9';

if (!ObjectID.isValid(id)) {
    console.log('ID is not valid.');
}

Todo.find({
  _id: id //Mongoose will automatically convert it into an object id.
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id //Mongoose will automatically convert it into an object id.
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found.');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById('5a6d69c3149f0a341d257b1d').then((user) => {
  if (!user) {
    return console.log('Unable to find user.');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});

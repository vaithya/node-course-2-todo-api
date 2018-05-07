//var mongoose = require('mongoose');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoAppProd');
// Local imports and Library imports separately.
require('./config/config.js');

const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {authenticate} = require('./middleware/authenticate');


//var Todo = mongoose.model('Todo', {
//  text: {
//      type: String,
//      required: true,
//      minlength: 1,
//      trim: true
//  },
//  completed: {
//      type: Boolean,
//      default: false
//  },
//  completedAt: {
//      type: Number,
//      default: null
//  }
//});

//var newTodo = new Todo({
//  text: 'Cook dinner'
//});

//newTodo.save().then((doc) => {
//console.log('Saved Todo.', doc);
//}, (e) => {
//  console.log('Unable to save Todo.');
//}); //Save to database

//var otherTodo = new Todo({
//  text: 'Feed the cat',
//  completed: true,
//  completedAt: 123 // 2 minutes into the year 1970. 1970 is 0.
//});

//otherTodo.save().then((doc) => {
//  console.log(JSON.stringify(doc, undefined, 2));
//}, (e) => {
//  console.log('Unable to save', e);
//});

//var User = mongoose.model('User', {
//  email: {
//    type: String,
//    required: true,
//    trim: true,
//    minlength: 1
//  }
//});

//var user = new User({
//  email: 'abc@def.com'
//});

//user.save().then((doc) => {
//  console.log('User saved.', doc);
//}, (e) => {
//  console.log('Unable to save user.', e);
//});

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000; //To deploy to heroku

app.use(bodyParser.json());

app.post('/todos', authenticate, (req, res) => {
  console.log(req.body);

  var todo = new Todo({
    text: req.body.text,
    _creator: req.user._id
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/', authenticate, (req, res) => {
    Todo.find({
      _creator: req.user._id
    }).then((todos) => {
      res.send({todos}); // Similar to { todos: todos }
    }, (e) => {
      res.status(400).send(e);
    })
});

app.get('/todos/:id', authenticate, (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findOne({
    _id: id,
    _creator: req.user._id
  }).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }, (e) => {
    res.status(400).send();
  });
  // res.send(req.params);
});

app.delete('/todos/:id', authenticate, (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Todo.findOneAndRemove({
      _id: id,
      _creator: req.user._id
    }).then((todo) => {
      if (!todo) {
        return res.sendStatus(404).send();
      }
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
});

// PATCH - Use when you want to update a resource

app.patch('/todos/:id', authenticate, (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
      return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completd = false;
    body.completedAt = null;
  }

  Todo.findOneAndUpdate({ _id: id, _creator: req.user._id}, {$set: body}, {new: true}).then((todo) => {
    // $set -- Field update operator.
    // new: true -> To return the modified document rather than the original.
    if (!todo) {
      return res.status(400).send();
    }
    res.send({todo});

  }).catch((e) => {
    res.status(400).send();
  })
});

// Prefix a header with 'x' => Custom header (HTTP does not support it by default)
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then((user) => {
      return user.generateAuthToken();
  //  res.send(user);
    }).then((token) => {
      console.log(user);

      res.header('x-auth', token).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    });
});


app.get('/users/me', authenticate, (req, res) => {
  // var token = req.header('x-auth');
  //
  // User.findByToken(token).then((user) => {
  //   if (!user) {
  //     return Promise.reject();
  //   }
  //   res.send(user);
  // }).catch((e) => {
  //   res.status(401).send();
  // })
  res.send(req.user);
});

app.post('/users/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
      user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
      })
    }).catch((e) => {
      res.status(400).send();
    });
});

// app.delete('/users/me/token', authenticate, (req, res) => {
//   req.user.removeToken(req.token).then(() => {
//     res.status(200).send();
//   }).catch((e) => {
//     res.status(400).send();
//   })
// });

app.listen(port, () => {
  console.log(`Started on port ${port}.`);
})

module.exports = {app};

//The above code is similar to { app: app}

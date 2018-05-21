const _ = require('lodash');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');
const {ObjectID} = require('mongodb');
import HttpStatus from 'http-status-codes';

class TodoLogic {

    createTodo (req, res) {
        const todo = new Todo({
          text: req.body.text,
          _creator: req.user._id
        });
      
        todo.save().then((doc) => {
          res
            .status(HttpStatus.CREATED)
            .send(doc);
        }, (e) => {
          let errorMessage = e;

          if (e.message.match(/Todo validation failed/i)) {
              errorMessage = 'Text field is mandatory. Minimum length of the text is 1 and should be a string.'
              res
              .status(HttpStatus.BAD_REQUEST)
              .send('Could not create Todo.');
          }
          res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send('Could not create Todo.');
        });
    };

    getTodos (req, res) {
        Todo.find({
          _creator: req.user._id
        }).then((todos) => {
          res.send({todos});
        }, (e) => {
          res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send('Could not get Todos.');
        })
    };

    getTodo (req, res) {
        const id = req.params.id;
      
        if (!ObjectID.isValid(id)) {
          return res
                  .status(HttpStatus.BAD_REQUEST)
                  .send('Todo ID is not valid.');
        }
      
        Todo.findOne({
          _id: id,
          _creator: req.user._id
        }).then((todo) => {
          if (!todo) {
            return res
                    .status(HttpStatus.OK)
                    .send('No Todo has been created by this User.');
          }
          res
            .status(HttpStatus.OK)
            .send({todo});
        }, (e) => {
          res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send('Could not get Todo.');
        });
    };

    deleteTodo (req, res) {
        const id = req.params.id;
    
        if (!ObjectID.isValid(id)) {
          return res
                  .status(HttpStatus.BAD_REQUEST)
                  .send('Todo ID is not valid.');
        }
    
        Todo.findOneAndRemove({
          _id: id,
          _creator: req.user._id
        }).then((todo) => {
          if (!todo) {
            return res
                    .status(HttpStatus.OK)
                    .send('This user does not have a Todo with the given ID.');
          }
          res.send({todo});
        }).catch((e) => {
          res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send('Could not delete Todo.');
        });
    };

    updateTodo (req, res) {
        const id = req.params.id;
        const body = _.pick(req.body, ['text', 'completed'])
      
        if (!ObjectID.isValid(id)) {
            return res
              .status(HttpStatus.BAD_REQUEST)
              .send('Todo ID is not valid.');
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
            return res
                  .status(HttpStatus.OK)
                  .send('This user does not have a Todo with the given ID.');
          }
          res.send({todo});
        }).catch((e) => {
          res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send('Could not update Todo.');
        })
    };
}


const todoInstance = new TodoLogic();

export default todoInstance;
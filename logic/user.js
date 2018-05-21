const _ = require('lodash');
const {User} = require('../server/models/user');
import HttpStatus from 'http-status-codes';

class UserLogic {

    createUser (req, res) {
        const body = _.pick(req.body, ['email', 'password']);
        const user = new User(body);
    
        user.save().then((user) => {
          return user.generateAuthToken();
        }).then((token) => {
          res
            .header('x-auth', token)
            .status(HttpStatus.OK)
            .send(user);
        }).catch((e) => {
          if (e.message && e.message.match(/User validation failed/)) {
              res
              .status(HttpStatus.BAD_REQUEST)
              .send('Email ID and Password are mandatory. Enter valid email. Password minimum length is 6.');
          }
          else if (e.errmsg && e.errmsg.match(/duplicate key error/)) {
              res
              .status(HttpStatus.BAD_REQUEST)
              .send('A user with these credentials exists already.');
          }
          res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send('Could not create user.');
        });
    };

    userLogin (req, res) {
        const body = _.pick(req.body, ['email', 'password']);
    
        User.findByCredentials(body.email, body.password).then((user) => {
          user.generateAuthToken().then((token) => {
            res
              .header('x-auth', token)
              .status(HttpStatus.OK)
              .send(user);
          })
        }).catch((e) => {
          res
            .status(HttpStatus.UNAUTHORIZED)
            .send('Either your email or password is wrong.');
        });
    };
}


const userInstance = new UserLogic();

export default userInstance;
var {User} = require('./../models/user');
import HttpStatus from 'http-status-codes';

export const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }
    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res
      .status(HttpStatus.UNAUTHORIZED)
      .send();
  })
};


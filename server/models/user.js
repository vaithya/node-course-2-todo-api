const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});


UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

// Instance function.
// Not using arrow function here because they do not bind "this" keyword.
UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({ _id: user._id.toHexString(), access}, 'abc123').toString();
//  console.log(token);
//  console.log(user);
  //push is not working in the installed version of mongo.
  user.tokens = user.tokens.concat([{access, token}]);
//  console.log(user);
  return user.save().then(() => {
    return token;
  });
};

// Model method
UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    // jwt.verify will throw an error if anything goes wrong.
    decoded = jwt.verify(token, 'abc123');
  } catch (e) {
    // return new Promise((resolve, reject) => {
    //   reject();
    // })
    return Promise.reject();
  }
  // Quotes are required if you have a .value
  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function (email, password) {
  var User = this;


  return User.findOne({email}).then((user) => {
    if(!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      })
    })
  });
};

UserSchema.methods.removeToken = function (token) {
  var user = this;

  user.update({
    $pull: {
      tokens: {
        token: token
      }
    }
  })
};

UserSchema.pre('save', function (next) {
  var user = this;

  if(user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      })
    })
  } else {
    next();
  }

})
var User = mongoose.model('User', UserSchema);

// var User = mongoose.model('User', {
  // email: {
  //   type: String,
  //   required: true,
  //   trim: true,
  //   minlength: 1,
  //   unique: true,
  //   validate: {
  //     validator: validator.isEmail,
  //     message: '{VALUE} is not a valid email'
  //   }
  // },
  // password: {
  //   type: String,
  //   required: true,
  //   minlength: 6
  // },
  // tokens: [{
  //   access: {
  //     type: String,
  //     required: true
  //   },
  //   token: {
  //     type: String,
  //     required: true
  //   }
  // }]
//});

module.exports = {User};

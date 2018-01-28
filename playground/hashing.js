const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('Decoded ', decoded);
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`${message}: ${hash}`);

// MD5, AES, SHA256 etc. Hashing is a one way algorithm. For the same input, we will get the same has value all the time, but from the hash value, we can never find out the original value.
// Passwords are stored in this way.

// HTTPS - secure. To transfer the token.

// var data = {
//   id: 4
// };
//
// var token = {
//   data
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// JSON web token (JWT)

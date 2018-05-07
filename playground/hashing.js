const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  })
})

var hashPassword = '$2a$10$EqC2XBErTDIPVKP6.7TwyOMsZhCfKm4lueu2DkB9sHqEyJxDv2DLe';

bcrypt.compare(password, hashPassword, (err, res) => {
  console.log(res);
});

var data = {
  id: 10
};

// 123abc is the secret.
// Go to jwt.io
// Paste your token in the 'Encoded' tab.
// Gives the Decoded header and payload.
// You'll get invalid signature.

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
// Salting - Add a constant value to the hash. (Secret)

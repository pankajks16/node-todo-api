const {SHA256} = require('crypto-js');
var hash = SHA256("PANKAJ").toString();
console.log("Length of the hashed string is :", hash.length);
console.log("Hashing for the word 'PANKAJ' is :", hash);

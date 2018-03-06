const jwt = require('jsonwebtoken');

var data = {
	id: 123
};

var secret = 'pankaj';
var token = jwt.sign(data, secret);

console.log("TOKEN", token);
console.log(typeof token);
var decoded = jwt.verify(token, secret);

console.log(decoded);
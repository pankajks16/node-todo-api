const {SHA256} = require('crypto-js');


var hash = SHA256("PANKAJ").toString();
//console.log("Length of the hashed string is :", hash.length);
// console.log("Hashing for the word 'PANKAJ' is :", hash);

var data = {
	id: 5
};

var token = {
	data: data,
	hash: SHA256(JSON.stringify(data) + 'salt').toString()
};


console.log(token.data, token.hash);

data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();
// console.log(data);
// console.log(token.data);
// console.log(token.data, token.hash);

// if the hacker only changes id and not the hash in the token then there wont be any use of the salt added 
// in this program.

// token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'salt').toString();

console.log(resultHash);
if(resultHash === token.hash) {
	console.log('Data is intact !!!');
} else {
	console.log('Data was tampered !!! Don\'t trust');
};
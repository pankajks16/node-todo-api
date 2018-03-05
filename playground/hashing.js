const {SHA256} = require('crypto-js');
var hash = SHA256("PANKAJ").toString();
console.log("Length of the hashed string is :", hash.length);
console.log("Hashing for the word 'PANKAJ' is :", hash);

var data = {
	id: 5
};

var token = {
	data,
	hash: SHA256(JSON.stringify(data) + 'secret-salt').toString()
};


// token.data.id = 6;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


var resultHash = SHA256(JSON.stringify(token.data) + 'secret-salt').toString();
if(resultHash === token.hash) {
	console.log('Data is intact !!!');
} else {
	console.log('Data was tampered !!! Don\'t trust');
}
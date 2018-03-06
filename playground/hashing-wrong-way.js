const {SHA256} = require('crypto-js');
var hash = SHA256("PANKAJ").toString();
//console.log("Length of the hashed string is :", hash.length);
// console.log("Hashing for the word 'PANKAJ' is :", hash);

var data = {
	id: 5
};

var token = {
	data: data,
	hash: function(){
		console.log('Executing hash method inside token', this.data);
		return SHA256(JSON.stringify(this.data) + 'salt').toString();
	}
};

console.log(SHA256("undefined" + "salt").toString());
console.log(token.data, token.hash());

data.id = 6;
// console.log(data);
// console.log(token.data);
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// if the hacker only changes id and not the hash in the token then there wont be any use of the salt added 
// in this program.

console.log(token.data, token.hash());
// token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'salt').toString();

console.log(resultHash);
if(resultHash === token.hash()) {
	console.log('Data is intact !!!');
} else {
	console.log('Data was tampered !!! Don\'t trust');
};
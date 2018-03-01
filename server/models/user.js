	 const mongoose = require('mongoose');
const validator = require('validator');
// {
// 	email: 'pankaj@example.com',
// 	password: 'demoPass', //BCrypt algorithm 
// 	tokens: [{
// 		access: 'auth',
// 		token: 'wdmowedefuh3e24i2biewbdiwbd324' // This is passed back and forth. when a user want to make 
// 		// a secure request, then he has to send this along with the HTTP request and it enables us to validate
// 		// whether the user has rights to do the changes or not.
// 	}]
// }

var User = mongoose.model('User', {
	email: {
		type: String,
		required: [true, 'User Email required !!!'],
		trim: true,
		minlength: 1,
		unique: true,
		validate: {
			validator: (value) => {
				return validator.isEmail(value);
			},
			message: '{VALUE} is not a valid email id. Plz check it.'
		}
	},
	password: {
			type: String,
			required: true,
			minlength: [6, 'Password length should be greater than SIX characters !!!!'] 	
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

// required and minlength or maxlength properties can take array as the parameter where the second arg
// is the custom message that we want to display when error throws up !!!

module.exports = { User };
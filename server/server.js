var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 5,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});


// var newTodo = new Todo({
// 	text: "Pankaj is here",
// 	completed: false,
// 	completedAt: "45"
// });


// var newTodo = new Todo({
// 	text: "abcde"
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved the record \n', JSON.stringify(doc, undefined, 2));
// }, (err) => {
// 	console.log('Some error occured while entering the record.\n', err);
// });



var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 6
	}
});


var user = new User({
	email: 'abc@example.com'
});


user.save().then((doc) => {
	console.log('User saved !!!!\n', JSON.stringify(doc, undefined, 2));
}, (err) => {
	console.log('Unable to save user\n', err);
});
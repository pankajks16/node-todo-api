var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 5,  // minlength=1 doesn't matter bcoz required = true take cares of that case
		trim: true     // removes the leading and trailing white spaces
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

module.exports = { Todo };
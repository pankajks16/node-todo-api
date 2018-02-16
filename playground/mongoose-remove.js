var {ObjectID} = require('mongodb');

var {Todo} = require('../server/models/todo');
var {mongoose} = require('../server/db/mongoose');

// remove({})  method to remove all the documents in the collection

// Todo.remove({}).then((result) => {
// 	console.log(result);
// }, (err) => {
// 	console.log(err);
// });

// findOneAndRemove() method removes the first document obtained based on the filter parameter. It removes
// the first document it encounters based on the filter parameter.

// Todo.findOneAndRemove({ completed: true}).then((result) => {
// 	console.log(result);
// }, (err) => {
// 	console.log(err);
// });


// findByIdAndRemove() -- removes based on _id parameter only.

Todo.findByIdAndRemove('5a86865159b574196019d886').then((result) => {
	console.log(result);
}, (err) => {
	console.log(err);
});
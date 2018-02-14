var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	console.log(req.body);
	var todo = new Todo({
		text: req.body.text,
		completed: req.body.completed,
		completedAt: req.body.completedAt
	});

	todo.save().then((docs) => {
		res.send(docs);
	}, (err) => {
		res.status(400).send(err);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000 !!!');
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




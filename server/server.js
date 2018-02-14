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


app.get('/todos', (req, res) => {
	console.log(req.header);
	Todo.find().then((docs) => {
		res.send({docs}); // enclosing in an object to include status code if possible or any other entity apart
		// from the array returned in the response
	}, (err) => {
		res.status(400).send(err);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000 !!!');
});	

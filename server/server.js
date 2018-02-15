var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();
var port = process.env.PORT || 3000;

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


app.get('/todos/:id', (req, res) => {
	//res.send(req.params);
	var id = req.params.id;

	if(!ObjectID.isValid(id)){
		console.log('id is not valid one !!!');
		return res.status(404).send();
	}

	Todo.findById(id).then((doc) => {
		if(!doc) {
			return res.status(404).send();
		}

		res.status(200).send({doc});
	}, (e) => {
		res.status(400).send();
	});

});

app.listen(port, () => {
	console.log(`Started on port ${port} !!!`);
});	

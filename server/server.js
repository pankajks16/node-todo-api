var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());  // dont know the role of this but search it off....



// POST /todos api is used for creating a new todo 
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




// GET /todos api is used to get all the todos available in the mongodb database
app.get('/todos', (req, res) => {
	console.log(req.header);
	Todo.find().then((docs) => {
		res.send({docs}); // enclosing in an object to include status code if possible or any other entity apart
		// from the array returned in the response
	}, (err) => {
		res.status(400).send(err);
	});
});




// GET /todos/:id is the url for retrieving a particular todo based in the :id param
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




// DELETE /todos/:id api is used for removing a particular todos based on the id param passed
app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid(id)) {
		res.status(404).send('<h3> ID is not a valid one !!! Please check the ID passed !! </h3>');
		return console.log('id is not a valid one !!!!');
	}

	Todo.findByIdAndRemove(id).then((doc) => {
		if(!doc){
			console.log('Cannot find a record based on the given id. No record found !!!')
			return res.send('<h3> There is no record present corressponding to the passed ID </h3>')
		}
		console.log('The record has been deleted and the record is: \n', doc);
		res.send(`<h3> Record found !!! </h3> and it is : \n ${doc}`);
	}, (err) => {
		console.log('Error occured while deleting the record !!!')
		res.status(404).send();
	});
});




// PATCH /todos/:id api is used to update the existing record based on the params passed.
app.patch('/todos/:id', (req, res) => {
	var id = req.params.id;
	console.log(req.body);
	var body = _.pick(req.body, ['text', 'completed']);
	console.log(body);

	if(!ObjectID.isValid(id)) {
		res.status(404).send('<h3> ID is not a valid one !!! Please check the ID passed !! </h3>');
		return console.log('id is not a valid one !!!!');
	}

	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime(); 
	} else {
		body.completedAt = null;
		body.completed = false;
	}

	Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((result) => {
		if(!result){
			return res.status(404).send();
		}
		res.send(result);
	}, (err) => {
		res.status(404).send(err);
	});	
});




// Port configuration to start the port
app.listen(port, () => {
	console.log(`Started on port ${port} !!!`);
});	






















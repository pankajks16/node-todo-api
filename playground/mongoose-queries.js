const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '4a8434568085de09fcb7125a';
// Todo.find().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
// 	console.log(e)
// });


// find() method  ---- returns an array. If result not found, it will return an empty array like []
Todo.find({
	_id: id
}).then((doc) => {
	if(doc.length !== 0 || doc[0] !== undefined){
		console.log(JSON.stringify(doc, undefined, 2));	
	} else {
		console.log('No record found');
	}
}, (e) => {
	console.log(e)
});

// findOne() method  --- returns null if result not found. It returns first record of the results obtained.
Todo.findOne({
	//completed: true
	_id: id
}).then((todo) => {
	if(!todo){
		return console.log('No record found ....');
	}
	console.log('findOne method output\n',todo);
}, (e) => {
	console.log(e);
});

// findById() method   --- returns null if not found based on only id
Todo.findById(id).then((todo) => {
	if (!todo){
		return console.log('no record found !!!')
	}
	console.log('\nfindById() method output\n',todo);
}, (e) => {
	console.log(e);
});




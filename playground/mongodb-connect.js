// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

// const ObjectId = require('mongodb').ObjectId;

// var id = new ObjectId();
// var id1 = new ObjectId();
// var id2 = new ObjectId("000000000000"); // the argument must have a single kind of string and of length 12
// var id3 = new ObjectId("000000000000").getTimestamp(); // the argument must have a single kind of string and of length 12
// // e.g: var demo = new ObjectId("pppppppppppp"); // any character inside it

// // var id3 = new ObjectId("PANKAJ");
// // var id4 = new ObjectId("pankaj");

// console.log(id);
// console.log(id1);
// console.log(id2);
// console.log(id3);

// console.log(id3);
// console.log(id4);



	// var obj = {name: "Hello", age: 45};
	// var {name} = obj;
	// console.log(name);

	
MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB sevrer.');
	}

	// return keyword is used bcoz if the error occurs, the sucess message should not get print out. So to return 
	// from the function, it is used. 

	// we can use 'else' statement also if we dont want to use the 'return' keyword.
	console.log('Connected to MongoDB server');


	const myDb = db.db('Users');
	myDb.collection('Sample').insertOne({
		name: 'chinu',
		age: 25,
		_id: 2
	}, (err, results) => {
		if (err) {
			if(err.code === 11000) {
				return console.log('Duplicate values not allowed')
			}
			// console.log(err.name);
			return console.log('Unable to insert into collection Todo', err);
		}
		// console.log(JSON.stringify(results));
		console.log(JSON.stringify(results.ops, undefined, 2));
		// console.log(JSON.stringify(results.ops[0]._id.getTimestamp()));
		//console.log(results.connection.options);
	});
	
	db.close();
});


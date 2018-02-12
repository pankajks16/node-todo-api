const {MongoClient, ObjectId} = require('mongodb');

const dburl = 'mongodb://localhost:27017/';

MongoClient.connect(dburl, (err, db) => {
	if(err){
		console.log('Some error occured. Could not connect to MongoDB !!!!');
		process.exit(0);
	}

	console.log('==================== MongoDB connected =======================\n\n');
	var myDb = db.db('Todos').collection('Todos');

	// deleteMany()
	// myDb.deleteMany({text: 'Hello Pankaj'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.log('Couldn\'t able to delete the record !!!! ');
	// });

	//deleteOne()
	// myDb.deleteOne({text: 'Walk the dog'}).then((result) => {
	// 	console.log(result);
	// });


	//findOneAndDelete()   -- This will find the first record out of the result obtained and take delete
	// action on it. This method returns the deleted object after the delete operation.
	myDb.findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	});
});
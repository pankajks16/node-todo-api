const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, (err, db) => {
	if(err) {
		console.log('Couldn\'t able to connect to the MongoDB server\n', err);
		process.exit(0);
	}

	console.log(' =============== Connected to the MongoDB sevrer ================== \n\n');

	var myDb = db.db('Todos').collection('Todos'); 
	// myDb.collection('Todos').find({
	// 	_id: new ObjectId('5a78360b20b39407f46ffec6')
	// }).toArray().then((docs) => {
	// console.log(JSON.stringify(docs, undefined, 2));
	// console.log(' ===== Disconnected from the MongoDB sevrer Successfully ========== ');
	// }, (err) => {
	// console.log('Unable to fetch the data');
	// console.log(' =============== Error while fetching data. Connection Aborted !!! ================== ');
	// });
	myDb.find({completed: false}).count().then((count) => {
		console.log(`The number of records is : ${count}`);
		if(count !== 0){
			myDb.find({completed: false}).toArray().then((docs) => {
				console.log(JSON.stringify(docs, undefined, 2));
				});
		}
	}, (err) => {
		console.log('Unable to fetch the records .... !!!\n', err);
	});

	// db.close();	

});
const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017/Todos'

MongoClient.connect(url, (err, db) => {
	if(err) {
		console.log('Couldn\'t able to connect to the MongoDB server\n', err);
		process.exit(0);
	}

	console.log(' =============== Connected to the MongoDB sevrer ================== ');

	var myDb = db.db('Todos'); 
	myDb.collection('Todos').find({
		_id: new ObjectId('5a78360b20b39407f46ffec6')
	}).toArray().then((docs) => {
	console.log(JSON.stringify(docs, undefined, 2));
	console.log(' ===== Disconnected from the MongoDB sevrer Successfully ========== ');
	}, (err) => {
	console.log('Unable to fetch the data');
	console.log(' =============== Error while fetching data. Connection Aborted !!! ================== ');
	});

	//db.close();	

});
const {MongoClient, ObjectId} = require('mongodb');

const dburl = 'mongodb://localhost:27017/';

MongoClient.connect(dburl, (err, db) => {
	if(err){
		console.log('Some error occured. Could not connect to MongoDB !!!!');
		process.exit(0);
	}

	console.log('==================== MongoDB connected =======================\n\n');
	var myDb = db.db('Todos').collection('Users');

	// URL for documentations for the methods: 
	// http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
	

	// URL for update operator docs: https://docs.mongodb.com/manual/reference/operator/update/
	// e.g: the link is for docs on the operators like $inc, $set etc.
	myDb.findOneAndUpdate({
		_id: new ObjectId('5a828d144b89136e3e19f8a8')
	}, { 
		$set: {
			name: "Sonu"
		}, 
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	})

	//db.close();
});
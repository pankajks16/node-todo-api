var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Don't know the role of this line. Search it !!!

//var herokuURL = 'mongodb://heroku_mv6xspjm:ptpvml68afs4v98pdh435pr8vi@ds235788.mlab.com:35788/heroku_mv6xspjm';
var herokuURI = process.env.MONGODB_URI;
var localhostURL = 'mongodb://localhost:27017/TodoApp';
mongoose.connect( herokuURI || localhostURL );

// mongoose.connect('mongodb://localhost/TodoApp');   

//   the above also works. Port is optional. For more details see:
//   https://docs.mongodb.com/manual/reference/connection-string/

//format: mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
// anything under square bracket [] is optional term
console.log('Executing mongoose connection file !!!');
module.exports = {
	mongoose
};
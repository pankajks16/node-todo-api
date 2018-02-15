var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// mongoose.connect('mongodb://localhost/TodoApp');   

//   the above also works. Port is optional. For more details see:
//   https://docs.mongodb.com/manual/reference/connection-string/

//format: mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
// anything under square bracket [] is optional term

module.exports = {
	mongoose
};
//Set up mongoose connection
console.log('in db config');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1:27017/Users';
mongoose.connect(mongoDB, {useNewUrlParser: true,
                            useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
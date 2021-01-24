const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const mongoose = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
var jwt = require('jsonwebtoken');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('secretKey', 'jwt_sample_secrete_key'); // jwt secret token
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', function(req, res){
 res.json({"Person_Name" : "Srikanth Narra Lantronix Cloud Engineer Test"});
});


app.use('/user', users);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// handle 404 error
app.use(function(req, res, next) {
	let err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.use(function(err, req, res, next) {
	console.log(err);
	
  if(err.status === 404)
  	res.status(404).json({message: "Not found"});
  else	
    res.status(500).json({message: "Something wnet wrong"});
});

app.listen(4001, function(){ console.log('Node server listening on port 4001');});
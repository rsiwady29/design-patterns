'use strict';
const express = require('express');
const gzippo = require('gzippo');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const studentHandler = require('./student/student-handler');

const app = express();
const port = process.env.PORT || 8080;

// Local environment
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());
app.use(morgan({
	format: 'dev',
	immediate: true
}));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

// API
app.post('/student/create', function(req, res) {
	const result = studentHandler.handle(req.body);
	res.status(200).send(result);
});

// Start Server
app.listen(port);
console.log('Server running on port: ' + port);

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="routes/blogRoutes.ts" />
var express = require("express");
var bodyParser = require('body-parser');
var routes = require('./routes/blogRoutes');
var app = express();
var router = express.Router();
//connect to our database
//Ideally you will obtain DB details from a config file
//var dbName: string = 'blogDB';
var connectionString = 'mongodb://localhost:27017/';
//mongoose.connect(connectionString);
app.use(express.static('../Atsb-client-side'));
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Sets up the initial route
app.use('/', routes);
var server = app.listen(8081, function () {
    var host = server.address();
    var port = server.address().port;
    console.log("Reesy.net at http://localhost:%s", port);
});
//Used to send a 404 error
app.use(function (req, res) {
    res.status(404).send('Sorry 404');
});

/// <reference path="typings/tsd.d.ts" />

import express = require("express");
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
var app = express();


//connect to our database
//Ideally you will obtain DB details from a config file
//var dbName: string = 'blogDB';
var connectionString: string = 'mongodb://localhost:27017/';

//mongoose.connect(connectionString);

app.use(express.static('public'));
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded());
//app.use('/api', blog); //This is our route middleware


var server = app.listen(8081, () =>
{

    var host = server.address()
    var port = server.address().port
    console.log("Reesy.net at http://localhost:%s", port)


});



app.use((req, res) =>
{
  res.status(404).send('Sorry 404');

})

export var App = app;
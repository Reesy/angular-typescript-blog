/// <reference path = "../../typings/tsd.d.ts" />
/// <reference path = "../server.ts" />
var mongoose = require('mongoose');
var blogSchema = require('../models/blogModel');
//connect to our database
//Ideally you will obtain DB details from a config file
var blogManager = (function () {
    function blogManager() {
        var dbName = 'blogDB';
        var connectionString = 'mongodb://localhost:27017/';
        mongoose.connect(connectionString);
    }
    //All of these methods will create calls to mongo after being formatted and tested
    //This will be used to save a post
    blogManager.prototype.addContent = function (req) {
        var blogConnection = new blogSchema(req.body);
        blogConnection.save(function (err) {
            if (err) {
                console.log("Couldn't save!" + err);
            }
            console.log(req.body); //This is useful for getting what is being sent to the server
        });
    };
    blogManager.prototype.testString = function () {
        return "inside the testString function";
    };
    //this is temporary
    blogManager.prototype.getAllPosts = function () {
        return new Promise(function (resolve, reject) {
            blogSchema.find(function (err, blog) {
                return resolve(blog);
            });
        });
    };
    return blogManager;
})();
module.exports = blogManager;

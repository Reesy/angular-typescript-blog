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
    blogManager.prototype.addTitle = function () {
    };
    blogManager.prototype.addContent = function (req) {
        var blogConnection = new blogSchema(req.body);
        blogConnection.save(function (err) {
            if (err) {
                console.log("Couldn't save!" + err);
            }
            console.log('Saved!');
        });
        console.log(req.body);
    };
    blogManager.prototype.addAuthor = function () {
        console.log("InsideAddaauthior");
    };
    blogManager.prototype.addDate = function () {
    };
    blogManager.prototype.getTitle = function () {
        return 'test';
    };
    blogManager.prototype.getContent = function () {
        return null;
    };
    blogManager.prototype.getAuthor = function () {
        return null;
    };
    blogManager.prototype.getDate = function () {
        return null;
    };
    //this is temporary
    blogManager.prototype.getPosts = function () {
        return JSON.stringify(blogTemp);
    };
    return blogManager;
})();
var blogTemp = {
    "blogPosts": [
        {
            "id": 1,
            "title": "Server Number 1 blog post!",
            "content": "Example content one"
        },
        {
            "id": 2,
            "title": "Server Number 2 blog post!",
            "content": "Example of the second page content!"
        },
        {
            "id": 3,
            "title": "Server Number 3 blog post!",
            "content": "Example content three"
        },
        {
            "id": 4,
            "title": "Server Number 4 blog post!",
            "content": "Example of the fourth content!"
        },
        {
            "id": 5,
            "title": "Server Number 5 blog post!",
            "content": "Example content five"
        },
        {
            "id": 6,
            "title": "Server Number 6 blog post!",
            "content": "Example of the sixth page content!"
        },
        {
            "id": 7,
            "title": "Server Number 7 blog post!",
            "content": "Example content seven"
        },
        {
            "id": 8,
            "title": "Server Number 8 blog post!",
            "content": "Example of the eights page content!"
        }
    ]
};
module.exports = blogManager;

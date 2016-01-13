/// <reference path = "../../typings/tsd.d.ts" />
/// <reference path = "../server.ts" />
var blogSchema = require('../models/blogModel');
var blogManager = (function () {
    function blogManager() {
    }
    //All of these methods will create calls to mongo after being formatted and tested
    //This will be used to save a post
    blogManager.prototype.addTitle = function () {
    };
    blogManager.prototype.addContent = function () {
        blogSchema.Find('blog');
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
    return blogManager;
})();
module.exports = blogManager;

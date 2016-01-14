/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
/// <reference path="../DataAccess/blogManager.ts" />
var express = require("express");
var blogManager = require("../DataAccess/blogManager");
//var dataContext = new blogManager();
var blogManagerInstance = new blogManager();
var router = express.Router();
//This will print out the request to the console
router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});
router.route("/hello")
    .get(function (req, res) {
    res.json(blogManagerInstance.getPosts(req));
})
    .post(function (req, res) {
    blogManagerInstance.addContent(req);
});
//Todo: Delete this route
router.route("/test")
    .get(function (req, res) {
    res.json("test!");
    console.log("Inside this!"); //Todo: Delete this console log
});
module.exports = router;

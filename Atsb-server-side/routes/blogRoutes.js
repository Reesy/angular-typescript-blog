/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
/// <reference path="../DataAccess/blogManager.ts" />
var express = require("express");
var blgManager = require("../DataAccess/blogManager");
//var dataContext = new blogManager();
var blogMnger = new blgManager();
var router = express.Router();
//This will print out the request to the console
router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});
router.route("/hello")
    .get(function (req, res) {
    // res.json("hello!");
    console.log("inside constructor for blogRouter!");
    res.json(blogMnger.getPosts());
});
router.route("/test")
    .get(function (req, res) {
    res.json("test!");
    console.log("Inside this!");
});
module.exports = router;

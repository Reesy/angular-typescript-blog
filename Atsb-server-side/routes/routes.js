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
    console.log(typeof (blogManagerInstance.getPosts("sda")));
    blogManagerInstance.getPosts("sda").then(function (response) {
        //  console.log("This should show me the string");
        // console.log(response);
        res.json(response);
    });
    // res.json("blank");
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

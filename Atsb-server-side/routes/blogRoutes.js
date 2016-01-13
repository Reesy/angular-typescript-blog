/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
var express = require("express");
var router = express.Router();
//This will print out the request to the console
router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});
router.route("/hello")
    .get(function (req, res) {
    res.json("hello!");
    console.log("inside constructor for blogRouter!");
});
router.route("/test")
    .get(function (req, res) {
    res.json("test!");
    console.log("Inside this!");
});
module.exports = router;

/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
import express = require("express");


var router = express.Router();
//This will print out the request to the console
router.use((req, res, next) => {
        console.log(req.method, req.url);
        next();
});

router.route("/hello")
    .get((req, res) => {
            res.json("hello!");
            console.log("inside constructor for blogRouter!");        
});

router.route("/test")
    .get((req, res) => {
            res.json("test!");
            console.log("Inside this!");        
});


export = router;

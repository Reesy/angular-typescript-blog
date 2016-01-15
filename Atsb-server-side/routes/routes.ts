/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
/// <reference path="../DataAccess/blogManager.ts" />
import express = require("express");
import blogManager = require("../DataAccess/blogManager");

//var dataContext = new blogManager();
var blogManagerInstance = new blogManager();

var router = express.Router();
//This will print out the request to the console
router.use((req, res, next) => {
        console.log(req.method, req.url);
        next();
});

router.route("/hello")
    .get((req, res) => { 
          
          //  var responseFromClass = blogManagerInstance.getPosts("sds");
         //   responseFromClass.then((promiseResult)=> res.json(promiseResult));
          // var responseFromClass = new Promise((resolve, reject) => resolve(blogManagerInstance.getPosts("sd"))); //works
          // responseFromClass.then((promiseResult) => res.json(promiseResult));
          console.log(typeof(blogManagerInstance.getPosts("sda")));  
          blogManagerInstance.getPosts("sda").then((response) => {
              console.log("This should show me the string");
              console.log(response);
              
          })
          res.json("blank");
    })
    .post((req, res) => {
           blogManagerInstance.addContent(req);   
    })
;

//Todo: Delete this route
router.route("/test")
    .get((req, res) => {
            res.json("test!");
            console.log("Inside this!");         //Todo: Delete this console log
});


export = router;

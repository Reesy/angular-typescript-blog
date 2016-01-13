/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
import express = require("express");


export module Routes {

        export class blogRoutes{
            
           // public static router;

            constructor(){         
            }
            
            public initRoutes(){
               var router = express.Router();
               router.route("/hello")
                    .get((req, res) => {
                            res.json("hello!");
                            console.log("inside constructor for blogRouter!");        
                });
                
                return router;
            }
            
           
            
        }
    
}


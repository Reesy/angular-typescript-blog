/// <reference path = "../../typings/tsd.d.ts" />
/// <reference path = "../server.ts" />
import mongoose = require('mongoose');
var blogSchema = require('../models/blogModel');

//connect to our database
//Ideally you will obtain DB details from a config file

class blogManager{
    
    constructor(){
            var dbName: string = 'blogDB';
            var connectionString: string = 'mongodb://localhost:27017/';
            mongoose.connect(connectionString);
    }
    //All of these methods will create calls to mongo after being formatted and tested
    //This will be used to save a post
    public addContent(req: any){
        var blogConnection = new blogSchema(req.body);
        blogConnection.save((err) => 
        {
            if(err){
                console.log("Couldn't save!" + err);
            }
            console.log(req.body); //This is useful for getting what is being sent to the server
        });
      
    }
    public testString(): string{
        return "inside the testString function";
    }
    //this is temporary
    public getAllPosts(): Promise<any>{
        return new Promise((resolve, reject) =>
        {
            blogSchema.find((err, blog) => {
                 return resolve(blog);
            });
        })
    }
    
    public getSomePosts(firstPostIndex: number, numberOfPosts: number): Promise<any>{
        
        return new Promise((resolve, reject) => 
        {
            return resolve("test");
        })
    }
   
}
export = blogManager;
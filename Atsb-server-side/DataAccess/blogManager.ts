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
    
    public addTitle(){
        
    }
    public addContent(req: any){
        var blogConnection = new blogSchema(req.body);
        blogConnection.save((err) => 
        {
            if(err){
                console.log("Couldn't save!" + err);
            }
            console.log('Saved!');
        });
        console.log(req.body);
        
        
    }
    
    public addAuthor(){
        console.log("InsideAddaauthior");
        
    }
    public addDate(){
        
    }
    
    public getTitle() : string {
        return 'test';
    }
    
    public getContent() : string{
        return null;
        
    }
    
    public getAuthor() : string {
        return null;
    }
    
    public getDate() : string {
        
        return null;
    }
    
    public testString(): string{
        
        return "inside the testString function";
    }
    //this is temporary
    public getPosts(): Promise<any>{
        return new Promise((resolve, reject) =>
        {
            blogSchema.find((err, blog) => {
                 return resolve(blog);
            });
        })
    }
   
}
export = blogManager;



var blogTemp = {
  "blogPosts": [
    {
      "id":1,
      "title":"Server Number 1 blog post!",
      "content": "Example content one"
    },
    {
      "id":2,
      "title":"Server Number 2 blog post!",
      "content": "Example of the second page content!"
    
    },
    {
      "id":3,
      "title":"Server Number 3 blog post!",
      "content": "Example content three"
    },
    {
      "id":4,
      "title":"Server Number 4 blog post!",
      "content": "Example of the fourth content!"
    
    },
    {
      "id":5,
      "title":"Server Number 5 blog post!",
      "content": "Example content five"
    },
    {
      "id":6,
      "title":"Server Number 6 blog post!",
      "content": "Example of the sixth page content!"
    
    },
    {
      "id":7,
      "title":"Server Number 7 blog post!",
      "content": "Example content seven"
    },
    {
      "id":8,
      "title":"Server Number 8 blog post!",
      "content": "Example of the eights page content!"
    
    }
    ]
}
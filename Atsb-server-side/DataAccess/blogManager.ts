/// <reference path = "../../typings/tsd.d.ts" />
/// <reference path = "../server.ts" />
var blogSchema = require('../models/blogModel');

class blogManager{
    
    constructor(){
        
    }
    
    //All of these methods will create calls to mongo after being formatted and tested
    //This will be used to save a post
    
    public addTitle(){
        
    }
    public addContent(){
        
        blogSchema.Find('blog');
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
    
    
    
}
export = blogManager;
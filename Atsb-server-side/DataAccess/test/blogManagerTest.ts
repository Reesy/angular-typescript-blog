/// <reference path = "../../../typings/tsd.d.ts" />



import blogManager = require("../blogManager");
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
var mockBlogClass = new blogManager();


chai.use(chaiAsPromised);

var mockIndex : number = 0;
var mockNumberOfPosts: number = 10;


describe("Blog Manager", () =>{
	describe("constructor", () => {
		it("Should do nothing", () =>{
			
			
		})
	})	
	describe("getAllPosts()", () => {
		it("Should return an array Promise", () =>{		
			//return mockBlogClass.getAllPosts().should.eventually.equal([]);
			return mockBlogClass.getAllPosts().should.eventually.be.a('array');
		})
	})
	describe("When getSomePosts() is supplied with index and number of posts to show", () =>{
		it("Should return an array", () =>{
			return mockBlogClass.getSomePosts(mockIndex, mockNumberOfPosts).should.eventually.be.a('array');
		})
	})
	
	describe("When addContent() is supplied with a JSON string", () =>{
		it("Should write to the database", () =>{
			//ToDo: write a pre-hook that connects to a dummy collection in the database
			//then perform a read after writing, output should be equal to data entered.
			
			//ToDo: write a post-hook to destroy the database
		})
	})
	
	describe("When removeContent() is supplied with the Blog post ID", () => {
		it("Should remove the blog post from the database", () => {
		  	//ToDo: write a pre-hook that connects to a dummy collection in the database
			//then perform a search for the blog post after entry, should fail
			
			//ToDo: write a post-hook to destroy the database
		})
	})
	
	describe("When blogCount() is called", () => {
		it("Should return a value of how many entries are in the blog database", () => {
			//ToDo: create a pre-hook that creates a dummy database with 10 posts
			
			
			//ToDo: destroy database in posthook
		})
	})
})
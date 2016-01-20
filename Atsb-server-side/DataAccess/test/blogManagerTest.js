/// <reference path = "../../../typings/tsd.d.ts" />
var blogManager = require("../blogManager");
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
var mockBlogClass = new blogManager();
chai.use(chaiAsPromised);
var mockIndex = 0;
var mockNumberOfPosts = 10;
describe("Blog Manager", function () {
    describe("constructor", function () {
        it("Should do nothing", function () {
        });
    });
    describe("getAllPosts()", function () {
        it("Should return an array Promise", function () {
            //return mockBlogClass.getAllPosts().should.eventually.equal([]);
            return mockBlogClass.getAllPosts().should.eventually.be.a('array');
        });
    });
    describe("When getSomePosts() is supplied with index and number of posts to show", function () {
        it("Should return an array", function () {
            return mockBlogClass.getSomePosts(mockIndex, mockNumberOfPosts).should.eventually.be.a('array');
        });
    });
    describe("When addContent() is supplied with a JSON string", function () {
        it("Should write to the database", function () {
            return false;
        });
    });
    describe("When removeContent() is supplied with the Blog post ID", function () {
        it("Should remove the blog post from the database", function () {
        });
    });
});

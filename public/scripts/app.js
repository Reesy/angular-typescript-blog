/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="Controllers/blogController.ts" />
//In the template the app must be included last
var Blog;
(function (Blog) {
    angular.module('blog', [])
        .controller('blogController', Blog.Controller);
})(Blog || (Blog = {}));

/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="Controllers/blogController.ts" />
/// <reference path="Directives/blogPostDirective.ts" />
//In the template the app must be included last
var Blog;
(function (Blog) {
    angular.module('blog', [])
        .controller('blogController', Blog.Controller)
        .directive('blogDirective', Blog.testDirective.factory);
})(Blog || (Blog = {}));

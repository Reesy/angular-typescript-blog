/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="Directives/blogPostDirective.ts" />
/// <reference path="Controllers/blogController.ts" />
//In the template the app must be included last
var Blog;
(function (Blog) {
    angular.module('blog', [])
        .controller('blogController', Blog.Controller)
        .directive('testDirective', function () { return new Blog.testDirective(); });
})(Blog || (Blog = {}));

/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="Directives/blogPostDirective.ts" />
/// <reference path="Directives/blogPostPaginateDirective.ts" />
/// <reference path="Controllers/blogController.ts" />
//In the template the app must be included last
var Blog;
(function (Blog) {
    angular.module('blog', ['ui.router'])
        .controller('blogController', Blog.blogController)
        .directive('testDirective', function () { return new Blog.testDirective(); })
        .directive('blogPostPaginateDirective', function () { return new Blog.blogPostPaginateDirective(); })
        .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/Blog");
        $stateProvider
            .state('BlogPanel', {
            url: "/Blog",
            templateUrl: "templates/BlogPanel.html"
        })
            .state('BlogInputPanel', {
            url: "/BlogInput",
            templateUrl: "templates/BlogInputPanel.html"
        });
    });
})(Blog || (Blog = {}));

/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="Directives/blogPostDirective.ts" />
/// <reference path="Controllers/blogController.ts" />
//In the template the app must be included last
var Blog;
(function (Blog) {
    angular.module('blog', ['ui.router'])
        .controller('blogController', Blog.blogController)
        .directive('testDirective', function () { return new Blog.testDirective(); })
        .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
            url: "/home",
            templateUrl: "template/BlogPanel.html"
        })
            .state('BlogPanel', {
            url: "/BlgPnl",
            templateUrl: "templates/BlogPanel.html"
        })
            .state('BlogInputPanel', {
            url: "/BlgInput",
            templateUrl: "templates/BlogInputPanel.html"
        });
    });
})(Blog || (Blog = {}));

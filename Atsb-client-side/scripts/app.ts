/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="Directives/blogPostDirective.ts" />
/// <reference path="Controllers/blogController.ts" />
//In the template the app must be included last

module Blog
{
    angular.module('blog', [])
        .controller('blogController', blogController)
        .directive('testDirective', () => new testDirective());
}
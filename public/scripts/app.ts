/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="Controllers/blogController.ts" />
/// <reference path="Directives/blogPostDirective.ts" />
//In the template the app must be included last

module Blog
{
    angular.module('blog', [])
        .controller('blogController', Controller)
        .directive('blogDirective', testDirective.factory());
}
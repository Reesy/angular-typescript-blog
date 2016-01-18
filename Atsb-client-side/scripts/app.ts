/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="Directives/blogPostDirective.ts" />
/// <reference path="Controllers/blogController.ts" />
//In the template the app must be included last

module Blog
{
    angular.module('blog', ['ui.router'])
        .controller('blogController', blogController)
        .directive('testDirective', () => new testDirective())
        .config(($stateProvider, $urlRouterProvider) =>{
            
            $urlRouterProvider.otherwise("/Blog");
        
            $stateProvider
              .state('BlogPanel', {
                  url: "/Blog",
                  templateUrl: "templates/BlogPanel.html"
              })         
              .state('BlogInputPanel', {
                  url: "/BlogInput",
                  templateUrl: "templates/BlogInputPanel.html"
              })
            
        })

}
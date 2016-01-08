/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var blogController = (function () {
        function blogController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            $scope.OutsideFunction = this.OutsideFunction;
            $scope.callroute = this.callroute;
            $scope.greetingText = "Hello, Typescripty world!";
            //   this.OutsideFunction();
        }
        blogController.prototype.OutsideFunction = function () {
            console.log("found function!");
            this.$scope.greetingText = "This can be found when using controller as!";
        };
        blogController.prototype.callroute = function () {
            this.$http.get('test').success(function (data) { return console.log(data); });
        };
        return blogController;
    })();
    Blog.blogController = blogController;
})(Blog || (Blog = {}));

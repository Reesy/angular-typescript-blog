/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var blogController = (function () {
        function blogController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            $scope.OutsideFunction = this.OutsideFunction;
            $scope.greetingText = "Hello, Typescripty world!";
            $scope.update = this.update;
            //   this.OutsideFunction();
        }
        blogController.prototype.OutsideFunction = function () {
            console.log("found function!");
            this.$scope.greetingText = "This can be found when using controller as!";
        };
        blogController.prototype.update = function () {
        };
        return blogController;
    })();
    Blog.blogController = blogController;
})(Blog || (Blog = {}));

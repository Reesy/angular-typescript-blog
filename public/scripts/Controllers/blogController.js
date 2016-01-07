/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var blogController = (function () {
        function blogController($scope, $http) {
            this.$scope = $scope;
            $scope.OutsideFunction = this.OutsideFunction;
            $scope.greetingText = "Hello, Typescripty world!";
            //   this.OutsideFunction();
        }
        blogController.prototype.OutsideFunction = function () {
            console.log("found function!");
            this.$scope.greetingText = "This can be found when using controller as!";
        };
        return blogController;
    })();
    Blog.blogController = blogController;
})(Blog || (Blog = {}));

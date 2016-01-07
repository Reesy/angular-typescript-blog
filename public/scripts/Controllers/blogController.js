/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var blogController = (function () {
        function blogController($scope, $http) {
            $scope.greetingText = "Hello, Typescripty world!";
        }
        blogController.prototype.OutsideFunction = function ($scope) {
            $scope.greetingText = "OutsideFunction called!";
        };
        return blogController;
    })();
    Blog.blogController = blogController;
})(Blog || (Blog = {}));

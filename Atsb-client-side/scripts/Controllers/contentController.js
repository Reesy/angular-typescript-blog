/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var contentController = (function () {
        function contentController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            // $scope.OutsideFunction = this.OutsideFunction;
            //$scope.callroute = this.callroute;
            $scope.greetingText = "Hello, Typescripty world!";
        }
        contentController.prototype.blogWrite = function () {
            this.$scope.template = "/BlogInputPanel";
        };
        return contentController;
    })();
    Blog.contentController = contentController;
})(Blog || (Blog = {}));

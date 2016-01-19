/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var blogController = (function () {
        function blogController($scope, $http) {
            var _this = this;
            this.$scope = $scope;
            this.$http = $http;
            $scope.OutsideFunction = this.OutsideFunction;
            $scope.callroute = this.callroute;
            $scope.greetingText = "Hello, Typescripty world!";
            //Initialises blog view content
            this.$http.get('hello').success(function (data) {
                _this.$scope.BlogPosts = data;
                console.log(data);
            });
            //   this.OutsideFunction();
        }
        blogController.prototype.OutsideFunction = function () {
            console.log("found function!");
            this.$scope.greetingText = "This can be found when using controller as!";
        };
        blogController.prototype.callroute = function () {
            var _this = this;
            this.$http.get('hello').success(function (data) {
                _this.$scope.BlogPosts = data;
                console.log(data);
            });
        };
        blogController.prototype.submitFormData = function (formData) {
            this.$http.post('hello', formData);
        };
        return blogController;
    })();
    Blog.blogController = blogController;
})(Blog || (Blog = {}));

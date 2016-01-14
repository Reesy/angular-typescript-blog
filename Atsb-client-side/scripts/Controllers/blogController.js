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
            var _this = this;
            this.$http.get('hello').success(function (data) {
                var jsonTest = JSON.parse(data);
                console.log(data);
                console.log(jsonTest.blogPosts[0].content);
                _this.$scope.greetingText = jsonTest.blogPosts[0].content;
            });
        };
        blogController.prototype.postRoute = function () {
            var blogPosts = {
                "id": 1,
                "title": "Server Number 1 blog post!",
                "content": "Example content one"
            };
            this.$http.post('hello', blogPosts);
        };
        return blogController;
    })();
    Blog.blogController = blogController;
})(Blog || (Blog = {}));

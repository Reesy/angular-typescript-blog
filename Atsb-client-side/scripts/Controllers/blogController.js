/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var blogController = (function () {
        function blogController($scope, $http) {
            var _this = this;
            this.$scope = $scope;
            this.$http = $http;
            $scope.requestBlogData = this.requestBlogData;
            $scope.greetingText = "Hello, Typescripty world!";
            //Initialises blog view content
            //ToDo: Change this initialiser to just get the x number of newest posts.
            this.$http.get('blogRoute').success(function (data) {
                _this.$scope.BlogPosts = data;
                console.log(data);
            });
            // $scope.requestBlogData();
            //requires number of unique blog posts in database / number of blog posts to be shown per page
        }
        blogController.prototype.requestBlogData = function () {
            var _this = this;
            this.$http.get('blogRoute').success(function (data) {
                _this.$scope.BlogPosts = data;
                console.log(data);
            });
        };
        //This submits the form data to the server side to handle
        blogController.prototype.submitFormData = function (formData) {
            this.$http.post('blogRoute', formData);
        };
        return blogController;
    })();
    Blog.blogController = blogController;
})(Blog || (Blog = {}));

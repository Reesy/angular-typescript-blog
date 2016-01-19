/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var blogPostPaginateDirective = (function () {
        function blogPostPaginateDirective() {
            return blogPostPaginateDirective.paginate();
        }
        blogPostPaginateDirective.paginate = function () {
            return {
                restrict: 'E',
                template: 'Hello, directive world + {{greetingText}}'
            };
        };
        return blogPostPaginateDirective;
    })();
    Blog.blogPostPaginateDirective = blogPostPaginateDirective;
})(Blog || (Blog = {}));

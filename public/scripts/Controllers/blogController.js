/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var Controller = (function () {
        function Controller($scope) {
            $scope.greetingText = "Hello, Typescripty world!";
        }
        return Controller;
    })();
    Blog.Controller = Controller;
})(Blog || (Blog = {}));

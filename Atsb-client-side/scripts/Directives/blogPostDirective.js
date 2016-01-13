/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var testDirective = (function () {
        function testDirective() {
            return testDirective.helloWorld();
        }
        testDirective.helloWorld = function () {
            return {
                restrict: 'E',
                template: 'Hello, directive world + {{greetingText}}'
            };
        };
        return testDirective;
    })();
    Blog.testDirective = testDirective;
})(Blog || (Blog = {}));

/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var testDirective = (function () {
        function testDirective($scope) {
            this.template = '<p1> DIRECTIVE HELLO </p1>';
            this.scope = {};
            testDirective.prototype.link = function (scope, element, attrs) {
            };
        }
        testDirective.factory = function () {
            return testDirective;
        };
        return testDirective;
    })();
    Blog.testDirective = testDirective;
})(Blog || (Blog = {}));

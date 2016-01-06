/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var testDirective = (function () {
        // public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        //   public template = "<div> Hello, World! </div>";
        //   public scope = {};
        function testDirective() {
            return testDirective.helloWorld();
        }
        testDirective.helloWorld = function () {
            return {
                restrict: 'E',
                template: 'Hello from the directive!'
            };
        };
        return testDirective;
    })();
    Blog.testDirective = testDirective;
})(Blog || (Blog = {}));

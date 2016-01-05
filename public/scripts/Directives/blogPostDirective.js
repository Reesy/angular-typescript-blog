/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
var Blog;
(function (Blog) {
    var testDirective = (function () {
        function testDirective() {
        }
        // public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        //   public template = "<div> Hello, World! </div>";
        //   public scope = {};
        testDirective.factory = function () {
            return {
                restrict: 'AEC',
                replace: true,
                scope: {},
                link: function (scope, element) {
                    template: "<div> Hello, World! </div>";
                }
            };
        };
        return testDirective;
    })();
    Blog.testDirective = testDirective;
})(Blog || (Blog = {}));

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
var express = require("express");
var Routes;
(function (Routes) {
    var blogRoutes = (function () {
        // public static router;
        function blogRoutes() {
        }
        blogRoutes.prototype.initRoutes = function () {
            var router = express.Router();
            router.route("/hello")
                .get(function (req, res) {
                res.json("hello!");
                console.log("inside constructor for blogRouter!");
            });
            return router;
        };
        return blogRoutes;
    })();
    Routes.blogRoutes = blogRoutes;
})(Routes = exports.Routes || (exports.Routes = {}));

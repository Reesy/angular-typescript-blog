/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
module Blog {
    export interface IBlogScope {
           greetingText: string;
           testTest: string;
    }   

    export class Controller {
        constructor($scope: IBlogScope) {
            $scope.greetingText = "Hello, Typescripty world!";
        }   

    }
}
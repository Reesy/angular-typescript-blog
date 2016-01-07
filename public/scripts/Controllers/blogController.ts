/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
module Blog {
    export interface IBlogScope {
           greetingText: string;
           OutsideFunction(): void;
    }   

    export class blogController {
        constructor(public $scope: IBlogScope, $http) {
            $scope.OutsideFunction = this.OutsideFunction;
            $scope.greetingText = "Hello, Typescripty world!";     
         //   this.OutsideFunction();
        }
        OutsideFunction(){
            console.log("found function!");
            this.$scope.greetingText = "This can be found when using controller as!";
        }
    }
}
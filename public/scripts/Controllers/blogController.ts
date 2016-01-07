/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
module Blog {
    export interface IBlogScope {
           greetingText: string;
    }   

    export class blogController {
        
        constructor($scope: IBlogScope, $http) {
            $scope.greetingText = "Hello, Typescripty world!";     
        }
        
        OutsideFunction($scope: IBlogScope){
            $scope.greetingText = "OutsideFunction called!";
        }
           
        
    }
}
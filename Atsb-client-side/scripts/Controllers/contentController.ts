/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />
module Blog {
    export interface IContentScope {
           greetingText: string;
           template: string;
           blogWrite(): void;
    }   

    export class contentController{
   
               
        constructor(public $scope: IContentScope, public $http: ng.IHttpService) {
           // $scope.OutsideFunction = this.OutsideFunction;
            //$scope.callroute = this.callroute;
            $scope.greetingText = "Hello, Typescripty world!";
     
        }
        
        blogWrite() {
            this.$scope.template = "/BlogInputPanel";
            
        }
        
        
    }
}
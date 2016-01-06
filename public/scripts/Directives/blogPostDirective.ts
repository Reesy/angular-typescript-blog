/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../app.ts" />


module Blog {

   export class testDirective{
        constructor(){
            return testDirective.helloWorld();
        }
        private static helloWorld() : any{
            return {
                restrict: 'E',
                template: 'Hello, directive world'
                
            }   
        }
    }
}